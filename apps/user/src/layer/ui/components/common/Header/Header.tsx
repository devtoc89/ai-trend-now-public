import Link from "next/link";

function Header() {
  return (
    <div className="w-full h-16 bg-gray-100 bg-opacity-80 border-b-2 border-gray-200 flex flex-row items-center px-2 overflow-hidden">
      <div>
        <Link href="/post">
          <h1 className="text-2xl font-bold py-1 px-2 rounded-md text-shadow-md mt-0">AI News Now</h1>
        </Link>
        {/* <Image src="/logo3.webp" alt="alt" width={64} height={64} /> */}
      </div>
    </div>
  );
}

export default Header;
