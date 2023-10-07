import { BlogForm } from "@/components/admin/blog-form";

export default async function AdminBlogCraete() {
  return (
    <div>
      <div className="space-y-0.5 my-6">
        <h2 className="text-2xl font-bold tracking-tight">Create a new blog</h2>
      </div>
      <main className=" max-w-3xl">
        <BlogForm />
      </main>
    </div>
  );
}
