import { fetchBlogs } from "@/actions/blog";
import BlogList from "@/components/blog/blog-list";
import { BlogSearch } from "@/components/blog/blog-search";
import { notFound } from "next/navigation";

export default async function AllBlogs() {
  const blogs = await fetchBlogs();

  if (!blogs) {
    notFound();
  }
  return (
    <>
      <main>
        <h2 className="text-2xl font-bold text-center mt-20">All Stories</h2>
        <BlogSearch />
        <BlogList blogs={blogs} />
      </main>
    </>
  );
}
