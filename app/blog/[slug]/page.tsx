import { getBlogPostBySlug } from "@/lib/data.server";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const blog = await getBlogPostBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
        <MoveLeft className="w-4 h-4" /> Back to Blog
      </Link>

      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{blog.title}</h1>
      <p className="text-muted-foreground text-lg mb-8">
        By {blog.author_id} on {new Date(blog.created_at).toLocaleDateString()}
      </p>

      {blog.image_url && (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
          <Image
            src={blog.image_url}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="prose prose-lg dark:prose-invert max-w-none text-foreground">
        <p>{blog.description}</p>
        <div dangerouslySetInnerHTML={{ __html: blog.content || '' }} />
      </div>
    </div>
  );
}