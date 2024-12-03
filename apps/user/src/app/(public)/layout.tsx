// import Sidebar from "#layer/ui/components/SideBar/SideBar.tsx";
import CommonLayout from "#layer/ui/layouts/common/CommonLayout.tsx";

export default async function InformationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CommonLayout>{children}</CommonLayout>;
}
