import { GLOBAL_TITLE, ROOT_URL } from "#consts/global";
import NavMenu from "#layer/ui/components/common/(client)/Navigation/NavMenu";
import ThemeButton from "#layer/ui/components/common/(client)/Theme/ThemeButton";
import Link from "next/link";

function Header() {
  return (
    <div className="w-full h-16 bg-gray-100 bg-opacity-80 border-b-2 border-gray-200  flex flex-row justify-between items-center overflow-hidden dark:bg-slate-800 dark:border-gray-600 px-2">
      <div className="flex flex-row items-center  ">
        <div>
          <Link href={ROOT_URL}>
            <h1 className="text-2xl font-bold py-1 px-2 rounded-md text-shadow-md mt-0 dark:text-white">
              {GLOBAL_TITLE}
            </h1>
          </Link>
        </div>
        <div>
          <NavMenu />
        </div>
      </div>
      <div>
        <ThemeButton />
      </div>
    </div>
  );
}

export default Header;
