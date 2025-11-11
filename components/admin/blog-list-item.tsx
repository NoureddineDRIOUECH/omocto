import { BlogPost } from "@/lib/data"
import Link from "next/link"
import { formatDate } from "@/lib/utils"

interface BlogListItemProps {
  blog: BlogPost
  onDelete: () => void
}

export default function BlogListItem({ blog, onDelete }: BlogListItemProps) {
    return (
        <div className="p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 hover:bg-secondary/30 transition-colors group">
            <div className="hidden sm:flex w-16 h-16 rounded-lg bg-secondary flex-shrink-0 overflow-hidden border border-border">
                {blog.imageUrl && (
                    <img src={blog.imageUrl || "/placeholder.svg"} alt={blog.title} className="w-full h-full object-cover" />
                )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <Link href={`/admin/blogs/${blog.id}`} className="group/link">
                    <h3 className="font-semibold text-sm sm:text-base text-foreground group-hover/link:text-primary transition-colors truncate">
                        {blog.title}
                    </h3>
                </Link>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-1">{blog.description}</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-2 text-xs text-muted-foreground">
                    <span>By {blog.author}</span>
                    <span>{formatDate(blog.date)}</span>
                </div>
            </div>

            <div className="flex gap-2 w-full sm:w-auto">
                <Link
                    href={`/admin/blogs/${blog.id}`}
                    className="flex-1 sm:flex-none px-2 sm:px-3 py-2 rounded-lg bg-secondary text-foreground text-xs sm:text-sm font-medium hover:bg-secondary/80 transition-colors"
                >
                    Edit
                </Link>
                <button
                    onClick={onDelete}
                    className="flex-1 sm:flex-none px-2 sm:px-3 py-2 rounded-lg bg-destructive/10 text-destructive text-xs sm:text-sm font-medium hover:bg-destructive/20 transition-colors"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}
