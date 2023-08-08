import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

const HomeHeader = () => {
  return (
    <header className="flex justify-end p-4">
      <div className="flex items-center space-x-4 text-sm">
        <Link href="#" className="hover:underline cursor-pointer duration-300">
          Gmail
        </Link>
        <Link href="#" className="hover:underline cursor-pointer duration-300">
          Image
        </Link>
        <TbGridDots className="text-4xl hover:bg-slate-200 rounded-full bg-transparent p-2 cursor-pointer duration-300" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md transition-all hover:brightness-105">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
