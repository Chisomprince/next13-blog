"use server";
import prisma from "@/prisma/client";
export async function getStatistics() {
  return await prisma.post.count();
}
