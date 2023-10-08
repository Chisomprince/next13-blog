import { z } from "zod";

export const blogFormSchema = z.object({
  image: z.string().optional(),
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Content is required" }),
  content: z.string().min(1, { message: "Content is required" }),
  published: z.boolean().optional(),
});

export type blogFormSchemaType = z.infer<typeof blogFormSchema>;
