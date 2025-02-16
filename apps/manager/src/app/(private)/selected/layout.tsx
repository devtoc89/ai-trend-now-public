import type React from "react";

async function SelectedPostLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex">
      <div className="flex-1 flex flex-col">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">선택된 정보</h2>
        </div>

        <div className="overflow-x-auto flex-1">{children}</div>
      </div>
    </div>
  );
}

export default SelectedPostLayout;
