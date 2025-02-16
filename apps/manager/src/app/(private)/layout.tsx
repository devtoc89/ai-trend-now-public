import Auth from "#app/(private)/auth";
import Aside from "#layer/ui/components/private/Aside/SNB/Aside";
import CommonLayout from "#layer/ui/layouts/common/CommonLayout";

export default async function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Auth>
      <CommonLayout>
        <div className="flex h-full w-full">
          <Aside />
          <main className="flex-1 p-8">{children}</main>
        </div>
      </CommonLayout>
    </Auth>
  );
}
