import Link from "next/link";
import Parser from "html-react-parser";
import PaginationBtn from "./PaginationBtn";

const WebSearchResults = ({ results }) => {
  // console.log("results :", results);
  return (
    <div className="w-full mx-auto px-3 pb-40 sm:pb-32 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm my-3">
        About {results?.searchInformation?.formattedTotalResults} results (
        {results?.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results?.items?.map((result) => (
        <div key={result.cacheId} className="mb-6 max-w-xl">
          <div className="group flex flex-col">
            <Link href={result.link} className="text-sm truncate">
              {result.formattedUrl}
            </Link>
            <Link
              href={result.link}
              className="group-hover:underline decoration-blue-800 text-lg truncate font-medium text-blue-800"
            >
              {result.title}
            </Link>
          </div>
          <p className="text-gray-600 text-sm">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationBtn />
    </div>
  );
};

export default WebSearchResults;
