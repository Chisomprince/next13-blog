import { fetchBlogById } from "@/actions/blog";
import { notFound } from "next/navigation";
import { BlogForm } from "./blog-form";

type AdminBlogSlugProps = {
  params: {
    slug: string;
  };
};
export default async function AdminBlogSlug({ params }: AdminBlogSlugProps) {
  const blog = await fetchBlogById(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <div className="space-y-0.5 my-6">
        <h2 className="text-2xl font-bold tracking-tight">Create a new blog</h2>
      </div>
      <main className=" max-w-3xl">
        <BlogForm blog={blog} />
      </main>
    </div>
  );
}
