import { fetchBlogBySlug, fetchBlogs } from "@/actions/blog";
import BlogHero from "@/components/blog/blog-hero";
import BlogList from "@/components/blog/blog-list";
import { Separator } from "@/components/ui/separator";
// import hljs from "highlight.js/lib/core";
// import javascript from "highlight.js/lib/languages/javascript";
import { notFound } from "next/navigation";
import sanitizeHtml from "sanitize-html";

type BlogSlugPageProps = {
  params: {
    slug: string;
  };
};
export default async function BlogSlugPage({ params }: BlogSlugPageProps) {
  const blog = await fetchBlogBySlug(params.slug);
  const blogs = await fetchBlogs();
  if (!blog) {
    notFound();
  }

  // Todo
  // hljs.registerLanguage("javascript", javascript);

  // const sanitizeOptions = {
  //   allowedTags: sanitizeHtml.defaults.allowedTags.concat(["pre", "code"]), // Allow <pre> and <code> tags
  //   allowedAttributes: {
  //     ...sanitizeHtml.defaults.allowedAttributes,
  //     code: ["language-html"], // Allow 'class' attribute for <code> tags
  //   },
  // };

  const html = sanitizeHtml(blog.content || "");

  const recommedations = blogs
    .filter((item) => item.id !== blog.id)
    .splice(0, 6);

  return (
    <>
      <BlogHero blog={blog || {}} />

      <main className="px-4 ">
        <div className="container mx-auto max-w-4xl py-20">
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <Separator className="my-4" />
        <h2 className="text-center font-bold text-2xl mt-10">Next Reads</h2>
        <BlogList blogs={recommedations} />
      </main>
    </>
  );
}
