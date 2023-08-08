"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");

  /* handleSubmit */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web/?searchTerm=${term}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border border-gray-200 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md px-5 py-2 ml-10 mr-10 flex-grow max-w-3xl"
    >
      <input
        type="text"
        className="w-full focus:outline-none"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
      />
      <RxCross2
        onClick={() => setTerm("")}
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
      />
      <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3 cursor-pointer" />
      <AiOutlineSearch
        onClick={handleSubmit}
        className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
      />
    </form>
  );
};

export default SearchBox;
