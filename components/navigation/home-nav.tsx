"use client";

import Link from "next/link";

// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { homeNav } from "@/config/site-navigation";
import { UserButton } from "@clerk/nextjs";
import Logo from "../ui/Logo";
export function HomeNavigation() {
  return (
    <div className="sticky top-0 bg-background z-50">
      <div className="container flex items-center justify-between py-4 ">
        <Link href="/" legacyBehavior passHref>
          <Logo />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {homeNav.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
          <UserButton afterSignOutUrl="/" />
        </NavigationMenu>
      </div>
    </div>
  );
}
