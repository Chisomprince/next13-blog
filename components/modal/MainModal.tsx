"use client";
import { deleteBlogs } from "@/actions/blog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { catchApiErrors } from "@/lib/utils";
import { useModal } from "@/providers/modal-provider";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LoadingIcon } from "../ui/icons";
import { toast } from "../ui/use-toast";

type MainModalProps = {
  title: string;
  contentText?: string;
  cancelBtnText?: string;
  confirmBtnText?: string;
};

export default function MainModal({
  title,
  contentText,
  cancelBtnText = "Cancel",
  confirmBtnText = "Confirm Delete",
}: MainModalProps) {
  const pathname = usePathname();

  const { open, closeModal, modalState } = useModal();
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      if (pathname === "/admin/blog" && modalState) {
        const res = await deleteBlogs(modalState as string);
        toast({
          title: "Success",
          description: res,
          variant: "destructive",
        });
      }
    } catch (err) {
      catchApiErrors(err);
      closeModal();
    } finally {
      setDeleting(false);
      closeModal();
    }
  };
  return (
    <Dialog open={open} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{contentText}</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button variant={"secondary"} onClick={closeModal}>
            {cancelBtnText}
          </Button>
          <Button className="gap-2" onClick={handleDelete}>
            {confirmBtnText} {deleting && <LoadingIcon />}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
