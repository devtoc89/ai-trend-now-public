// import Sidebar from "#layer/ui/components/SideBar/SideBar.tsx";
import Header from "#layer/ui/components/common/Header/Header.tsx";
import CommonLayout from "#layer/ui/layouts/common/CommonLayout.tsx";

export default async function InformationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CommonLayout>
      <div className="flex h-full w-full flex-col overflow-auto">
        <div className="sticky top-0 z-10 w-full">
          <Header />
        </div>
        <main className="flex-1">{children}</main>
      </div>
    </CommonLayout>
  );
}
