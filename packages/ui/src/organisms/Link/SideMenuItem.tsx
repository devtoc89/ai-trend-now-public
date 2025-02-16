import IconLink from "#molecules/Link/IconLink";

export interface SideMenuItemProps {
  icon: React.ReactNode;
  label: string;
  isSelected?: boolean;
  href: string;
}

export default function SideMenuItem({ icon, label, isSelected = false, href }: SideMenuItemProps) {
  return <IconLink variant={isSelected ? "snbSelected" : "snb"} icon={icon} label={label} href={href} />;
}
