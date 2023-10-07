import { BlogTableRowActions } from "@/components/admin/blog-table-actions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Post } from "@prisma/client";
import dayjs from "dayjs";
type BlogTable = {
  blogs: Post[];
};
export default function BlogTable({ blogs }: BlogTable) {
  return (
    <div>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-3/6">Title</TableHead>
            <TableHead className="w-1/6">Status</TableHead>
            <TableHead className="w-1/6">Created</TableHead>
            <TableHead className="w-1/6">Last Updated</TableHead>
            <TableHead className="text-right w-1/6"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs.map((blog) => (
            <TableRow key={blog.id}>
              <TableCell className="font-medium">{blog.title}</TableCell>
              <TableCell>{blog.published ? "Published" : "Draft"}</TableCell>
              <TableCell>
                {dayjs(blog.createdAt).format("DD MMM YYYY")}
              </TableCell>
              <TableCell className="text-righ">
                {dayjs(blog.updatedAt).format("DD MMM YYYY")}
              </TableCell>
              <TableCell className="flex justify-end">
                <BlogTableRowActions id={blog.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
