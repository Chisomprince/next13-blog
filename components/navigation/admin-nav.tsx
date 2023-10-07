"use client";

// import { Icons } from "@/components/icons"
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { UserButton } from "@clerk/nextjs";
import { Separator } from "../ui/separator";
export function AdminNavigation() {
  return (
    <div className="sticky top-0 bg-background z-50">
      <div className="container flex items-center justify-end py-4 ">
        <NavigationMenu>
          <UserButton afterSignOutUrl="/" />
        </NavigationMenu>
      </div>
      <Separator className="mt-0" />
    </div>
  );
}
