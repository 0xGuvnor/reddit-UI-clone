import React from "react";
import IconItem from "../common/IconItem";
import {
  HiOutlineSparkles,
  HiOutlineGlobe,
  HiOutlineVideoCamera,
  HiOutlineChat,
  HiOutlineBell,
  HiOutlinePlus,
  HiOutlineSpeakerphone,
  HiOutlineCurrencyDollar,
} from "react-icons/hi";

const Icons = () => {
  return (
    <div className="flex items-center space-x-2 divide-x divide-[#343536]">
      <div className="flex items-center space-x-2">
        <IconItem Icon={HiOutlineSparkles} />
        <IconItem Icon={HiOutlineGlobe} />
        <IconItem Icon={HiOutlineVideoCamera} />
      </div>
      <div className="flex items-center pl-2 space-x-2">
        <IconItem Icon={HiOutlineChat} />
        <IconItem Icon={HiOutlineBell} />
        <IconItem Icon={HiOutlinePlus} />
        <IconItem Icon={HiOutlineSpeakerphone} />

        <button className="flex items-center py-1 pl-2 pr-4 space-x-1 text-gray-800 rounded-full bg-coin shadow-coin">
          <HiOutlineCurrencyDollar className="w-4 h-4" />
          <span className="text-sm work-sans">Free</span>
        </button>
      </div>
    </div>
  );
};

export default Icons;
