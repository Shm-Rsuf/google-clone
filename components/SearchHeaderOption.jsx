import { AiOutlineSearch } from "react-icons/ai";

const SearchHeaderOption = () => {
  return (
    <div>
      <div className="flex items-center space-x-1 border-b border-transparent active:text-blue-500 cursor-pointer pb-3">
        <AiOutlineSearch className="text-lg" />
        <p>All</p>
      </div>
    </div>
  );
};

export default SearchHeaderOption;
