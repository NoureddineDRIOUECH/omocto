import BlogCard from "@/components/ui/blog-card";
import { getBlogPosts } from "@/lib/data.server";
import { BlogPost } from "@/lib/definitions";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

const BlogPage = async () => { // Made async
  const blogs: BlogPost[] = await getBlogPosts(); // Fetch real data

  return (
    <div className="max-w-6xl py-20 mx-auto p-4">
      <div className="text-center my-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Notre Blog
        </h1>
        <p className="text-lg text-muted-foreground mt-4">
          Réflexions, histoires et idées de l'équipe Omocto.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      <div className="text-center mt-16">
        <Link href="/contact" className="inline-flex items-center gap-2 text-lg font-semibold text-primary">
            Parlons-en
            <MoveUpRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default BlogPage;
