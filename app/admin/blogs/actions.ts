"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { getSession } from "@/lib/session.server"
import { uploadFileToTebi } from "@/lib/s3"
import { getBlogPost, deleteBlog } from "@/lib/data.server"

function generateSlug(title: string) {
  if (!title) return ""
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with a single one
    .trim()
}

export async function createBlogPost(formData: FormData) {
  const { supabaseAdmin } = await import("@/lib/supabase-admin")
  const session = await getSession()
  if (!session.admin) {
    throw new Error("Not authenticated")
  }

  const imageFile = formData.get("image") as File | null
  let imageUrl: string | null = null

  // 1. Upload image if it exists
  if (imageFile && imageFile.size > 0) {
    try {
      imageUrl = await uploadFileToTebi(imageFile)
    } catch (error) {
      return { error: "Image upload failed." }
    }
  }

  // 2. Prepare data for Supabase
  const newPost = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    content: formData.get("content") as string,
    image_url: imageUrl,
    author_id: session.admin.id,
    slug: generateSlug(formData.get("title") as string),
  }

  // 3. Basic validation
  if (!newPost.title) {
    return { error: "Title is required." }
  }

  // 4. Insert into database
  const { error } = await supabaseAdmin.from("blogs").insert([newPost])

  if (error) {
    console.error("Error creating blog post:", error)
    return { error: "Database error: Could not create blog post." }
  }

  // 5. Revalidate cache and redirect
  revalidatePath("/admin/blogs")
  revalidatePath(`/blog/${newPost.slug}`)
  redirect("/admin/blogs")
}

export async function updateBlogPost(id: number, formData: FormData) {
  const { supabaseAdmin } = await import("@/lib/supabase-admin")
  const session = await getSession()
  if (!session.admin) {
    throw new Error("Not authenticated")
  }

  const imageFile = formData.get("image") as File | null
  let imageUrl: string | null = formData.get("imageUrl") as string | null

  // 1. Fetch existing post to get old image URL if needed
  const existingPost = await getBlogPost(id)
  if (!existingPost) {
    return { error: "Blog post not found." }
  }

  // 2. Upload new image if it exists
  if (imageFile && imageFile.size > 0) {
    try {
      imageUrl = await uploadFileToTebi(imageFile)
      // TODO: Delete old image from Tebi to save space
    } catch (error) {
      return { error: "Image upload failed." }
    }
  }

  // 3. Prepare data for Supabase
  const updatedPost = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    content: formData.get("content") as string,
    image_url: imageUrl,
    slug: generateSlug(formData.get("title") as string),
  }

  // 4. Basic validation
  if (!updatedPost.title) {
    return { error: "Title is required." }
  }

  // 5. Update database
  const { error } = await supabaseAdmin.from("blogs").update(updatedPost).eq("id", id)

  if (error) {
    console.error("Error updating blog post:", error)
    return { error: "Database error: Could not update blog post." }
  }

  // 6. Revalidate cache and redirect
  revalidatePath("/admin/blogs")
  revalidatePath(`/admin/blogs/${id}`)
  revalidatePath(`/blog/${updatedPost.slug}`)
  redirect("/admin/blogs")
}

export async function deleteBlogAction(id: number) {
  await deleteBlog(id);
  revalidatePath("/admin/blogs");
}
