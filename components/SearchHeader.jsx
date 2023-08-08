import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOption from "./SearchHeaderOption";

const SearchHeader = () => {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex justify-between items-center w-full px-5 py-3">
        <Link href="/">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
            width={100}
            height={50}
            alt="google image"
            priority
            className="w-auto"
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden sm:inline-flex gap-2">
          <RiSettings3Line className="search-header_icon" />
          <TbGridDots className="search-header_icon" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md transition-all hover:brightness-105 ml-2">
          Sign In
        </button>
      </div>
      <SearchHeaderOption />
    </header>
  );
};

export default SearchHeader;
