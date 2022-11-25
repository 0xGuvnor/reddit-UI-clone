import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

const SearchBar = () => {
  return (
    <div className="mx-4 flex flex-1 items-center space-x-3 rounded border border-[#343536] bg-[#272729] px-4 py-1.5">
      <HiOutlineSearch className="h-5 w-5 text-[#b9b9c2] transition duration-300 ease-in-out hover:scale-110" />
      <input
        className="flex-1 text-sm bg-inherit focus:outline-none"
        type="text"
        placeholder="Search Reddit"
      />
    </div>
  );
};

export default SearchBar;
