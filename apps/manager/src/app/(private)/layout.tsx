import Aside from "#layer/ui/components/private/Aside/SNB/Aside.tsx";
// import Sidebar from "#layer/ui/components/SideBar/SideBar.tsx";
import CommonLayout from "#layer/ui/layouts/common/CommonLayout.tsx";

export default async function InformationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CommonLayout>
      <div className="flex h-full w-full">
        <Aside />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </CommonLayout>
  );
}
