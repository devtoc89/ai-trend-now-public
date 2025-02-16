import { GLOBAL_TITLE, ROOT_URL } from "#consts/global";
import NavMenu from "#layer/ui/components/common/(client)/Navigation/NavMenu";
import ThemeButton from "#layer/ui/components/common/(client)/Theme/ThemeButton";
import MainMenu from "#layer/ui/components/common/(server)/MainMenu/MainMenu";
import { cn } from "@repo/util/style/tailwind.util";
import Link from "next/link";

function Header() {
  return (
    <div
      className={cn(
        "w-full h-16   flex flex-row justify-between items-center overflow-hidden  px-2",
        "border-b bg-fore-background border-muted",
        // "bg-gray-100 bg-opacity-80 border-b-2 border-gray-200 dark:bg-slate-800 dark:border-gray-600",
      )}
    >
      <div className="flex flex-row  flex-wrap gap-1 px-2 items-end">
        <div>
          <Link href={ROOT_URL}>
            <h1 className="text-xl md:text-2xl font-bold rounded-md text-shadow-md mt-0 ">{GLOBAL_TITLE}</h1>
          </Link>
        </div>
        <div>
          <NavMenu />
        </div>
      </div>
      <div className="flex flex-row gap-1">
        <div>
          <MainMenu />
        </div>
        <ThemeButton />
      </div>
    </div>
  );
}

export default Header;
