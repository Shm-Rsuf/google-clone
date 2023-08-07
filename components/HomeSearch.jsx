import { BiSearchAlt2 } from "react-icons/bi";
import { HiMicrophone } from "react-icons/hi";
const HomeSearch = () => {
  return (
    <>
      <form className="flex items-center w-full mx-auto max-w-[90%] border border-gray-200 px-6 py-3 gap-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-lg lg:max-w-2xl">
        <BiSearchAlt2 className="text-xl text-gray-500" />
        <input
          type="text"
          placeholder="Search Google or type a URL"
          className="w-full focus:outline-none placeholder:text-xs sm:placeholder:text-base"
        />
        <HiMicrophone className="text-xl" />
      </form>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
        <button className="btn">Google Search</button>
        <button className="btn">I&apos;m felling lucky</button>
      </div>
    </>
  );
};

export default HomeSearch;
