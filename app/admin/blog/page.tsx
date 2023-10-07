import { fetchBlogs } from "@/actions/blog";
import BlogTable from "@/components/admin/blog-table";
import MainModal from "@/components/modal/MainModal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function page() {
  const blogs = await fetchBlogs();

  if (!blogs) {
    notFound();
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="space-y-0.5 mt-6">
          <h2 className="text-2xl font-bold tracking-tight">My Blogs</h2>
          <p className="text-muted-foreground">
            This a list of all the blogs you have written.
          </p>
        </div>
        <Link href={"/admin/blog/create"}>
          <Button>Add Blog</Button>
        </Link>
      </div>
      <div className="mt-6"></div>
      <MainModal
        title="Delete Blog"
        contentText="Are you sure you want to delete this blog"
      />
      <BlogTable blogs={blogs} />
    </div>
  );
}
