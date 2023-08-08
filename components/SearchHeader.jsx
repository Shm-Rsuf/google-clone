import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";

const SearchHeader = () => {
  return (
    <header>
      <div className="">
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
        <div className="">
          <SearchBox />
        </div>
        <div className="">
          <RiSettings3Line />
          <TbGridDots />
        </div>
        <button>Sign In</button>
      </div>
    </header>
  );
};

export default SearchHeader;
