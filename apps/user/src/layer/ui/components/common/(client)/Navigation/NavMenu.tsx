"use client";

import { PAPER_PAGE_URL, PAPER_ROOT_URL } from "#consts/global";

import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@repo/ui/components/ui/navigation-menu";
import { cn } from "@repo/util/style/tailwind.util";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [comp] = useState(components.find((comp) => comp.isActivate(path)));

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {comp && (
          <NavigationMenuItem key={comp.href}>
            <span className={cn("font-extrabold text-base")}>{comp.title}</span>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavMenu;
