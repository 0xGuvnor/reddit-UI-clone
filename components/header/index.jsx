import React from "react";
import Icons from "./Icons";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="fixed inset-0 z-50 flex h-14 bg-[#121213]">
      <div className="flex flex-1 items-center space-x-4 border-b border-[#343536] px-5">
        <div className="flex items-center flex-1 space-x-4">
          <Logo />
          <SearchBar />
        </div>
        <div className="flex items-center space-x-4">
          <Icons />
        </div>
      </div>
    </div>
  );
};

export default Header;
