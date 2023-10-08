"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { createBlogs, updateBlog } from "@/actions/blog";

import { toast } from "@/components/ui/use-toast";
import { generateSlug } from "@/lib/utils";
import {
  blogFormSchema,
  blogFormSchemaType,
} from "@/lib/validations/blog-schema";
import { Post } from "@prisma/client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function useBlogSubmit(blog?: Post) {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<blogFormSchemaType>({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      title: blog?.title || "",
      description: blog?.description || "",
      content: blog?.content || "",
      published: blog?.published || false,
    },
    mode: "onChange",
  });

  async function onSubmit(data: blogFormSchemaType) {
    try {
      setLoading(true);
      const payload = {
        ...data,
        slug: generateSlug(data.title),
      };
      if (blog) {
        await updateBlog(blog.id, payload);
        toast({
          title: "Success",
          description: "blog Information updated successfully",
        });
      } else {
        await createBlogs(payload);
        toast({
          title: "Success",
          description: "blog created successfully",
        });
      }

      router.push("/admin/blog");
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast({
          title: "Error",
          description: err.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong, please try again later.",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  }

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Data = event?.target?.result as string;
        form.setValue("image", base64Data);
      };
      reader.readAsDataURL(file);
    }
  };

  return { onSubmit, loading, form, handleImageUpload };
}
