import Sidebar from "#layer/ui/components/private/Aside/SNB/SideBar/SideBar";
import { GlobalLogo } from "@repo/ui/organisms";

function Aside() {
  return (
    <aside className="w-64 border-r border-gray-200 p-4 h-full flex flex-col">
      <div>{<GlobalLogo />}</div>
      <nav className="flex-1">
        <Sidebar />
      </nav>
    </aside>
  );
}

export default Aside;
