import Link from "next/link";

function Header() {
  return (
    <div className="w-full h-16 bg-gray-100 bg-opacity-80 border-b-2 border-gray-200 flex flex-row items-center px-2 overflow-hidden dark:bg-slate-800 dark:border-gray-600">
      <div>
        <Link href="/post">
          <h1 className="text-2xl font-bold py-1 px-2 rounded-md text-shadow-md mt-0 dark:text-white">AI News Now</h1>
        </Link>
      </div>
    </div>
  );
}

export default Header;
