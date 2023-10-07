"use client";
import BlogList from "@/components/blog/blog-list";
import { BlogSearch } from "@/components/blog/blog-search";
import { Post } from "@prisma/client";
import { useMemo, useState } from "react";

type AllBlogsListProps = {
  blogs: Post[];
};
export default function AllBlogsList({ blogs }: AllBlogsListProps) {
  const [search, setSearch] = useState("");

  const blogList = useMemo(() => {
    return blogs.filter((blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, blogs]);
  return (
    <>
      <main>
        <BlogSearch search={search} setSearch={setSearch} />
        <BlogList blogs={blogList} />
      </main>
    </>
  );
}
