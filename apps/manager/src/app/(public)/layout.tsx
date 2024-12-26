// import Sidebar from "#layer/ui/components/SideBar/SideBar";
import CommonLayout from "#layer/ui/layouts/common/CommonLayout";

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CommonLayout>
      <div className="w-full h-full flex justify-center items-center">
        <main>{children}</main>
      </div>
    </CommonLayout>
  );
}
