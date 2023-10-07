"use client";

import { Controller } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import WYSIWYGEditor from "@/components/ui/wysiwyg-editor";
import useBlogSubmit from "@/hooks/useBlogSubmit";
import { Post } from "@prisma/client";
interface BlogFormProps {
  blog?: Post;
}

export function BlogForm({ blog }: BlogFormProps) {
  const { onSubmit, loading, form } = useBlogSubmit(blog);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mb-32">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Blog Title</FormLabel>
              <FormControl>
                <Input placeholder="..." {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name of your blog.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="published"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Publish</FormLabel>
              <Select
                onValueChange={(e) => field.onChange(Boolean(e))}
                defaultValue={""}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={"true"}>Publish</SelectItem>
                  <SelectItem value={"false"}>Unpublish</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                This determins if your blog is visible to the public or not
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Blog Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about your blog"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Write a short description of your blog.(This will be displayed
                on the blog card)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Controller
          control={form.control}
          name="content"
          render={({ field: { onChange, value } }) => (
            <WYSIWYGEditor value={value} onChange={onChange} />
          )}
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Loading..." : blog ? "Update blog" : "Add blog"}
        </Button>
      </form>
    </Form>
  );
}
