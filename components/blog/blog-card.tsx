import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Post } from "@prisma/client";
import Link from "next/link";

type BlogCardProps = {
  blog: Post;
};
export function BlogCard({ blog }: BlogCardProps) {
  return (
    <Card className="w-[350px]">
      <Link href={"/blog/slog"}>
        <AspectRatio ratio={16 / 9}>
          <Image
            src="https://source.unsplash.com/random/480x360/?4"
            alt="Image"
            className="rounded-md object-cover"
            fill
          />
        </AspectRatio>
      </Link>
      <CardHeader>
        <CardTitle>{blog.title}</CardTitle>
        <CardDescription>{blog.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Link href={`/blog/${blog.id}`}>
          <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
