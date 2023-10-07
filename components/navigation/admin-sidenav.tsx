"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "../ui/Logo";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "sticky top-0 h-full flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-4 bg-muted px-6 py-8 border-r",
        className
      )}
      {...props}
    >
      <Link
        href="/"
        legacyBehavior
        passHref
        className={cn(buttonVariants({ variant: "ghost" }))}
      >
        <Logo />
      </Link>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
