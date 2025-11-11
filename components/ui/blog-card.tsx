import { BlogPost } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: BlogPost }) => {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="group">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
          <Image
            src={blog.image_url || "/placeholder.svg"}
            alt={blog.title}
            width={500}
            height={300}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="mt-4">
          <p className="text-sm text-muted-foreground">{blog.created_at ? new Date(blog.created_at).toLocaleDateString() : 'N/A'}</p>
          <h3 className="text-lg font-semibold mt-1 group-hover:text-primary transition-colors duration-300">
            {blog.title}
          </h3>
          <p className="text-muted-foreground mt-2 line-clamp-2">
            {blog.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
