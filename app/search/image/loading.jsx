const loading = () => {
  return (
    <div className="mt-5 px-2 lg:ml-52 max-w-6xl flex gap-4 flex-col sm:flex-row pb-20">
      <div className="animate-pulse">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md "></div>
        <div className="h-3 w-48 mb-2.5 bg-gray-200 rounded-md "></div>
        <div className="h-2 w-44 mb-2 bg-gray-200 rounded-md "></div>
      </div>
      <div className="hidden sm:inline-flex gap-4">
        <div className="animate-pulse">
          <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md "></div>
          <div className="h-3 w-48 mb-2.5 bg-gray-200 rounded-md "></div>
          <div className="h-2 w-44 mb-2 bg-gray-200 rounded-md "></div>
        </div>
        <div className="animate-pulse">
          <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md "></div>
          <div className="h-3 w-48 mb-2.5 bg-gray-200 rounded-md "></div>
          <div className="h-2 w-44 mb-2 bg-gray-200 rounded-md "></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
