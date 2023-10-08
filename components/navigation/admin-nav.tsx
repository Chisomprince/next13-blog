"use client";

// import { Icons } from "@/components/icons"
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { UserButton } from "@clerk/nextjs";
import Logo from "../ui/Logo";
import { Separator } from "../ui/separator";
import { AdminNavMobile } from "./admin-nav-mobile";
export function AdminNavigation() {
  return (
    <div className="sticky top-0 bg-background z-50">
      <div className="container flex items-center justify-between lg:justify-end py-4 ">
        <div className="flex items-center gap-2 lg:hidden">
          <AdminNavMobile />
          <Logo />
        </div>

        <NavigationMenu>
          <UserButton afterSignOutUrl="/" />
        </NavigationMenu>
      </div>
      <Separator className="mt-0" />
    </div>
  );
}
