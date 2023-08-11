import Link from "next/link";
import PaginationBtn from "./PaginationBtn";

const ImageSearchResults = ({ results }) => {
  // console.log("results :", results.items);
  return (
    <div className="pb-24 mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-5 space-x-4">
        {results.items.map((result) => (
          <div key={result.link} className="mb-8">
            <div className="group">
              <Link href={result.image.contextLink} className="">
                <img
                  src={result.link}
                  alt={result.title}
                  className="w-full h-60 object-contain group-hover:shadow-lg transition-shadow"
                />
              </Link>
              <Link href={result.image.contextLink}>
                <h2 className="truncate group-hover:underline text-lg">
                  {result.title}
                </h2>
              </Link>
              <Link href={result.image.contextLink}>
                <p className="group-hover:underline text-gray-600">
                  {result.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <PaginationBtn />
    </div>
  );
};

export default ImageSearchResults;
