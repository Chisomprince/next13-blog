import { fetchBlogs } from "@/actions/blog";
import AllBlogsList from "@/components/blog/bog-list-page";
import { notFound } from "next/navigation";

export default async function AllBlogs() {
  const blogs = await fetchBlogs();

  if (!blogs) {
    notFound();
  }
  return (
    <>
      <h2 className="text-2xl font-bold text-center mt-20">All Stories</h2>
      <AllBlogsList blogs={blogs} />
    </>
  );
}
