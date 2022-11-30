import Image from "next/image";
import React from "react";
import Icons from "./Icons";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import PP from "../../public/ProfilePic.png";

const Header = () => {
  return (
    <div className="fixed inset-0 z-40 flex h-14 bg-[#121213]">
      <div className="flex flex-1 items-center space-x-4 border-b border-[#343536] px-5">
        <div className="flex items-center flex-1 space-x-4">
          <Logo />
          <SearchBar />
        </div>
        <div className="flex items-center space-x-4">
          <Icons />

          <button className="relative items-center justify-center overflow-hidden rounded-full cursor-pointer h-9 w-9">
            <div>
              <Image
                className="object-contain"
                src={PP}
                fill
                alt="Profile picture"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
