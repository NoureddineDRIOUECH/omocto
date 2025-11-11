import { getBlogPosts } from "@/lib/data.server";
import BlogsClientPage from "./BlogsClientPage";

export default async function BlogsPage() {
  const initialBlogs = await getBlogPosts();

  return <BlogsClientPage initialBlogs={initialBlogs} />;
}
