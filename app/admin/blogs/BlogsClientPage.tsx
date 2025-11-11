"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { BlogPost } from "@/lib/definitions"
import BlogListItem from "@/components/admin/blog-list-item"
import { deleteBlogAction } from "./actions"

export default function BlogsClientPage({ initialBlogs }: { initialBlogs: BlogPost[] }) {
    const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs)
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        setBlogs(initialBlogs);
    }, [initialBlogs]);

    const filteredBlogs = blogs.filter((blog) => blog.title.toLowerCase().includes(searchTerm.toLowerCase()))

    const handleDelete = async (id: number) => {
        if (confirm("Are you sure you want to delete this post?")) {
            await deleteBlogAction(id);
            // The revalidation in the server action will cause the parent to re-render and pass new props.
        }
    }

    return (
        <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Blog Posts</h1>
                    <p className="text-sm sm:text-base text-muted-foreground mt-1 sm:mt-2">Create and manage your blog content</p>
                </div>
                <Link href="/admin/blogs/new" className="btn-primary justify-center sm:justify-start">
                    ✨ New Post
                </Link>
            </div>

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input-base w-full"
                />
            </div>

            {/* Blog List */}
            <div className="card-base">
                {filteredBlogs.length === 0 ? (
                    <div className="p-6 sm:p-12 text-center">
                        <p className="text-muted-foreground text-base sm:text-lg">No blog posts found</p>
                        <Link href="/admin/blogs/new" className="text-primary font-medium mt-4 inline-block hover:underline">
                            Create your first post
                        </Link>
                    </div>
                ) : (
                    <div className="divide-y divide-border">
                        {filteredBlogs.map((blog) => (
                            <BlogListItem key={blog.id} blog={blog} onDelete={() => handleDelete(blog.id)} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
