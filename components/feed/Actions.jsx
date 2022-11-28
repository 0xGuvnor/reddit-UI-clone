import React from "react";
import { HiOutlineAnnotation, HiOutlineGift } from "react-icons/hi";
import { MdIosShare } from "react-icons/md";

const Actions = () => {
  return (
    <div className="flex items-center pt-2 -ml-2">
      <div className="flex items-center space-x-1 rounded p-1 px-2 text-[#818384] hover:bg-[#333333]">
        <HiOutlineAnnotation className="w-4 h-4" />
        <span className="text-xs">24 comments</span>
      </div>

      <div className="flex items-center space-x-1 rounded p-1 px-2 text-[#818384] hover:bg-[#333333]">
        <HiOutlineGift className="w-4 h-4" />
        <span className="text-xs">Awards</span>
      </div>

      <div className="flex items-center space-x-1 rounded p-1 px-2 text-[#818384] hover:bg-[#333333]">
        <MdIosShare className="w-4 h-4" />
        <span className="text-xs">Share</span>
      </div>
    </div>
  );
};

export default Actions;
