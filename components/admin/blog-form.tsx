"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { createBlogPost, updateBlogPost } from "@/app/admin/blogs/actions"
import ImageUploadField from "@/components/admin/image-upload-field"
import { BlogPost } from "@/lib/definitions"

export default function BlogForm({ initialBlog, isEditing = false }: { initialBlog: BlogPost, isEditing?: boolean }) {
  const [blog, setBlog] = useState(initialBlog)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setBlog((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleImageChange = (file: File | null) => {
    setImageFile(file)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()
    formData.append("title", blog.title)
    formData.append("description", blog.description)
    formData.append("content", blog.content || "")
    
    if (imageFile) {
      formData.append("image", imageFile)
    } else if (isEditing && blog.image_url) {
      formData.append("imageUrl", blog.image_url)
    }

    let result;
    if (isEditing) {
      result = await updateBlogPost(blog.id, formData);
    } else {
      result = await createBlogPost(formData);
    }

    if (result?.error) {
      alert(result.error)
      setLoading(false)
    }
    // The redirect is handled by the server action
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">{isEditing ? "Edit Post" : "Create New Post"}</h1>
        <p className="text-muted-foreground">
          {isEditing ? "Update your blog post" : "Create a new blog post for your audience"}
        </p>
      </div>

      {/* Form Card */}
      <div className="card-base p-8 space-y-6">
        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">Featured Image</label>
          <ImageUploadField name="image" value={imageFile ?? blog.image_url} onChange={handleImageChange} />
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={blog.title}
            onChange={handleChange}
            placeholder="Enter post title"
            required
            className="input-base"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Description</label>
          <textarea
            name="description"
            value={blog.description}
            onChange={handleChange}
            placeholder="Short summary for post previews"
            rows={3}
            required
            className="input-base resize-none"
          />
        </div>
        
        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Content</label>
          <textarea
            name="content"
            value={blog.content}
            onChange={handleChange}
            placeholder="Write your main blog content here..."
            rows={10}
            className="input-base resize-vertical"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button type="submit" disabled={loading} className="btn-primary disabled:opacity-50">
          {loading ? "Saving..." : isEditing ? "Update Post" : "Create Post"}
        </button>
        <button type="button" onClick={() => router.back()} className="btn-ghost">
          Cancel
        </button>
      </div>
    </form>
  )
}
