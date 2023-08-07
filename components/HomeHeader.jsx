import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

const HomeHeader = () => {
  return (
    <header>
      <div className="">
        <Link href="#">Gmail</Link>
        <Link href="#">Image</Link>
        <TbGridDots />
        <button>Sign In</button>
      </div>
    </header>
  );
};

export default HomeHeader;
