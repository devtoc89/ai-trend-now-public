// import Sidebar from "#layer/ui/components/SideBar/SideBar";
import CommonLayout from "#layer/ui/layouts/common/CommonLayout";

export default async function InformationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CommonLayout>{children}</CommonLayout>;
}
