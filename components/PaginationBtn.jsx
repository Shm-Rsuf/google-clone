"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const PaginationBtn = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = +searchParams.get("start") || 1;
  console.log(pathname, searchTerm, startIndex);

  return (
    <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex >= 0 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          <div className="flex flex-col cursor-pointer hover:underline items-center">
            <BsChevronLeft className="h-5" />
            <span>Previous</span>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          <div className="flex flex-col cursor-pointer hover:underline items-center">
            <BsChevronRight className="h-5" />
            <span>Next</span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default PaginationBtn;
