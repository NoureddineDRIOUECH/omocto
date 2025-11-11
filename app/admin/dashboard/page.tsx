import { getBlogPosts, getContacts } from "@/lib/data.server";
import DashboardClientPage from "./DashboardClientPage";

export default async function DashboardPage() {
  const blogs = await getBlogPosts();
  const contacts = await getContacts();

  return <DashboardClientPage initialBlogs={blogs} initialContacts={contacts} />;
}
