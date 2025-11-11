"use client"

import Link from "next/link"

export default function RecentPosts({ posts }: { posts: any[] }) {
  return (
    <div className="card-base p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">Recent Posts</h2>
        <Link href="/admin/blogs/new" className="text-primary text-sm font-medium hover:underline">
          New Post
        </Link>
      </div>

      <div className="space-y-3">
        {posts.length === 0 ? (
          <p className="text-muted-foreground text-sm">No posts yet</p>
        ) : (
          posts.map((post) => (
            <Link
              key={post.id}
              href={`/admin/blogs/${post.id}`}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex-shrink-0 overflow-hidden">
                {post.imageUrl && (
                  <img
                    src={post.imageUrl || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                  {post.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}
