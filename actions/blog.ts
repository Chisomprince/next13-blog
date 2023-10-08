"use server";
import { blogFormSchemaType } from "@/lib/validations/blog-schema";
import prisma from "@/prisma/client";
import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";
import { revalidatePath } from "next/cache";

/**
 * Creates a new blog
 * @param data
 * @returns
 */
export const createBlogs = async (
  data: blogFormSchemaType & { slug: string }
) => {
  const user: User | null = await currentUser();
  if (!user) {
    throw new Error("User not found");
  }

  const slugExist = await prisma.post.findFirst({
    where: { slug: data.slug },
  });

  if (slugExist) {
    throw new Error("A blog with same title already exist");
  }

  const res = await prisma.post.create({
    data: { ...data, authorId: user.id },
  });

  revalidatePath("/admin/blog");
  return res;
};

/**
 * Returns the list of all blogs both published and unpublished
 * @returns
 */

export const fetchBlogs = async () => {
  return await prisma.post.findMany();
};

/**
 * Returns a blog given a blog id
 * @param id
 * @returns
 */
export const fetchBlogById = async (id: string) => {
  return await prisma.post.findUnique({
    where: { id },
  });
};

//TODO
export const fetchBlogBySlug = async (slug: string) => {
  return await prisma.post.findFirst({
    where: { slug },
  });
};

/**
 * Updates a blog data
 * @param id
 * @param data
 * @returns
 */
export const updateBlog = async (id: string, data: blogFormSchemaType) => {
  const res = await prisma.post.update({
    where: { id },
    data,
  });

  revalidatePath("/admin/blog");
  return res;
};

/**
 * Deletes a blog given an a blog id
 * @param id
 * @returns
 */
export const deleteBlogs = async (id: string) => {
  const user: User | null = await currentUser();
  if (!user) {
    throw new Error("User not found");
  }

  await prisma.post.delete({
    where: { id },
  });

  revalidatePath("/admin/blog");
  return "Blog deleted successfully";
};
