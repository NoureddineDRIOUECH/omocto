import { getBlogPost } from "@/lib/data.server";
import BlogForm from "@/components/admin/blog-form";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function EditBlogPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10);
  if (isNaN(id)) {
    notFound();
  }

  const blog = await getBlogPost(id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/admin/blogs" className="mb-6 sm:mb-8 text-primary hover:underline flex items-center gap-2">
          ← Back to all posts
        </Link>
        <BlogForm initialBlog={blog} isEditing={true} />
      </div>
    </div>
  );
}