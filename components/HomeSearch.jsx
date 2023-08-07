"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiMicrophone } from "react-icons/hi";
const HomeSearch = () => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  /* handleFormSubmit */
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  /* randomSearchHandler */
  const randomSearchHandler = async () => {
    setSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await response.json();
    const result = data[0];
    if (!response.ok) return;

    router.push(`/search/web?searchTerm=${result}`);
    setSearchLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="flex items-center w-full mx-auto max-w-[90%] border border-gray-200 px-6 py-3 gap-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-lg lg:max-w-2xl"
      >
        <BiSearchAlt2 className="text-xl text-gray-500 cursor-pointer" />
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Search Google or type a URL"
          className="w-full focus:outline-none placeholder:text-xs sm:placeholder:text-base"
        />
        <HiMicrophone className="text-xl cursor-pointer" />
      </form>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
        <button onClick={handleFormSubmit} className="btn">
          Google Search
        </button>
        <button
          onClick={randomSearchHandler}
          disabled={searchLoading}
          className="btn flex justify-center items-center disabled:opacity-75"
        >
          {searchLoading ? (
            <div>
              <Image
                src="spiner.svg"
                width={80}
                height={80}
                alt="spiner image"
              />
            </div>
          ) : (
            <span>I&apos;m felling lucky</span>
          )}
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
