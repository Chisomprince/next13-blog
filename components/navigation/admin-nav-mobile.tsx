import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { adminNav } from "@/config/site-navigation";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { SidebarNav } from "./admin-sidenav";

export function AdminNavMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <HamburgerMenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <SidebarNav items={adminNav} />
      </SheetContent>
    </Sheet>
  );
}
