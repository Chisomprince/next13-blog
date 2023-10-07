import { fetchBlogs } from "@/actions/blog";
import BlogList from "@/components/blog/blog-list";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { HomeNavigation } from "@/components/navigation/home-nav";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Home() {
  const blogs = await fetchBlogs();

  if (!blogs) {
    notFound();
  }

  return (
    <>
      <HomeNavigation />
      <Hero />
      <main>
        <h2 className="text-2xl font-bold text-center mt-20">Our Blog</h2>
        <p className="text-center">
          Enjoy our blog posts with us. We are always looking for new posts to
          share with you. Stay tuned!
        </p>
        <BlogList blogs={blogs.splice(0, 6)} />

        <div className="flex justify-center mt-10 my-20">
          <Link href={"/blogs"}>
            <Button className="px-8">All Blogs</Button>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
