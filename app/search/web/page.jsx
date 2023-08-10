const WebSearchPage = async ({ searchParams }) => {
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );
  const data = await res.json();
  const results = data.items;
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
