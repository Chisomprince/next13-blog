import { AdminNavigation } from "@/components/navigation/admin-nav";
import { SidebarNav } from "@/components/navigation/admin-sidenav";
import { adminNav } from "@/config/site-navigation";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="">
      <aside className="lg:w-1/6 fixed lg:h-screen">
        <SidebarNav items={adminNav} />
      </aside>

      <div className="w-5/6 ml-60 ">
        <AdminNavigation />
        <div className="flex-1 px-4 lg:px-12">{children}</div>
      </div>
    </div>
  );
}
