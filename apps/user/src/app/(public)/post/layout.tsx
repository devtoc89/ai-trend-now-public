import type React from "react";

async function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex">
      <div className="flex-1 flex flex-col w-full">
        <div className="container mx-auto w-full h-full">
          <div className="overflow-x-auto flex-1 p-6 w-full h-full">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default PostLayout;
