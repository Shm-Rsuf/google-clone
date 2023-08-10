import Link from "next/link";

const WebSearchPage = async ({ searchParams }) => {
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
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

  return (
    <>
      {results &&
        results.map((result) => (
          <div key={result.cacheId}>
            <h3>{result.title}</h3>
          </div>
        ))}
    </>
  );
};

export default WebSearchPage;
