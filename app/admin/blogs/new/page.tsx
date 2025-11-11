"use client"

import { useRouter } from "next/navigation"
import BlogForm from "@/components/admin/blog-form"

export default function NewBlogPage() {
  const router = useRouter()

  // Define a default structure for a new blog post
  const newBlogTemplate = {
    title: "",
    description: "",
    content: "",
    imageUrl: "",
  }

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => router.back()} className="mb-6 sm:mb-8 text-primary hover:underline flex items-center gap-2">
          ← Back to all posts
        </button>
        <BlogForm initialBlog={newBlogTemplate} isEditing={false} />
      </div>
    </div>
  )
}
