import { Post } from "@prisma/client";
import { BlogCard } from "./blog-card";

type BlogListProps = { blogs: Post[] };
export default function BlogList({ blogs }: BlogListProps) {
  return (
    <div className="container">
      <div className="flex justify-center flex-wrap gap-8 py-10">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
}
