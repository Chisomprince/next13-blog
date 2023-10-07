import { Post } from "@prisma/client";
import dayjs from "dayjs";

type BlogHeroProps = {
  blog: Post;
};
export default function BlogHero({ blog }: BlogHeroProps) {
  return (
    <section className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://source.unsplash.com/random/480x360?1')] bg-cover repeat-0 text-white">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-20 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leadi sm:text-5xl">{blog.title}</h1>
        <p className="px-8 mt-8 mb-8 text-lg">{blog.description}</p>
        <p className="px-8 ">{dayjs(blog.updatedAt).format("DD MMMM YYYY")}</p>
      </div>
    </section>
  );
}
