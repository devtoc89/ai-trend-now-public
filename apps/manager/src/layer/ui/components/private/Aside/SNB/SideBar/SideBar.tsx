"use client";

import { SideMenuItem } from "@repo/ui/organisms";
import { BrainIcon, FileIcon, FileTextIcon, Newspaper, SettingsIcon } from "lucide-react";
import { usePathname } from "next/navigation";

const sidebarMenus = [
  {
    key: "new",
    icon: <Newspaper className="h-5 w-5" />,
    label: "새로운 정보",
    href: "/new",
  },
  {
    key: "selected",
    icon: <FileIcon className="h-5 w-5" />,
    label: "선택된 정보",
    href: "/selected",
  },
  {
    key: "ai",
    icon: <BrainIcon className="h-5 w-5" />,
    label: "AI 작성물",
    href: "/ai",
  },
  {
    key: "post",
    icon: <FileTextIcon className="h-5 w-5" />,
    label: "발행된 글",
    href: "/post",
  },
  {
    key: "settings",
    icon: <SettingsIcon className="h-5 w-5" />,
    label: "설정",
    href: "#",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="h-full">
      <div className="flex flex-col justify-between h-full">
        <div>
          {sidebarMenus.map((menu) => (
            <SideMenuItem
              key={menu.key}
              icon={menu.icon}
              label={menu.label}
              href={menu.href}
              isSelected={menu.href === pathname}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
