import Link from "next/link";
import ImageSearchResults from "@/components/ImageSearchResults";

const ImageSearchPage = async ({ searchParams }) => {
  const startIndex = searchParams.start || "1";
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
  );
  if (!res.ok) {
    throw new Error("Something went wrong!");
  }
  const data = await res.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-20">
        <h3 className="text-3xl mb-4">No results found!</h3>
        <p className="text-lg">
          Try searching for something else or go back to{" "}
          <Link
            className="text-blue-500 hover:underline cursor-pointer duration-300"
            href="/"
          >
            homepage
          </Link>
        </p>
      </div>
    );
  }

  return <>{results && <ImageSearchResults results={data} />}</>;
};

export default ImageSearchPage;
