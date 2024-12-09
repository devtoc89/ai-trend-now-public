"use client";

import { PAPER_PAGE_URL, PAPER_ROOT_URL } from "#consts/global";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@repo/ui/components/ui/navigation-menu";
import { cn } from "@repo/util/style/tailwind.util";
import Link from "next/link";

const components: { title: string; href: string; isActivate: (url: string) => boolean }[] = [
  // {
  //   title: "Column",
  //   href: COLUMN_PAGE_URL,
  //   isActivate: (url: string) => url.indexOf(COLUMN_ROOT_URL) > -1,
  // },
  {
    title: "Paper",
    href: PAPER_PAGE_URL,
    isActivate: (url: string) => url.indexOf(PAPER_ROOT_URL) > -1,
  },
];

function NavMenu() {
  const path = usePathname();

  return (
    <NavigationMenu className="text-gray-800">
      <NavigationMenuList>
        {components.map((comp) => {
          const isActivated = comp.isActivate(path);
          return (
            <NavigationMenuItem key={comp.href}>
              <Link
                href={comp.href}
                aria-disabled={isActivated}
                className={cn(
                  isActivated && "pointer-events-none ",
                  navigationMenuTriggerStyle(),
                  "bg-transparent dark:text-white",
                )}
              >
                <p className={cn(isActivated && "pointer-events-none font-extrabold text-base")}>{comp.title}</p>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavMenu;
