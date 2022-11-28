import Link from "next/link";
import React from "react";
import { HiOutlineLink, HiOutlinePhotograph } from "react-icons/hi";
import { CreatePostIcon } from "../../assets/CreatePostIcon";

const CreatePost = () => {
  return (
    <div className="flex items-center space-x-3 rounded border border-[#343536] bg-[#1a1a1b] px-3 py-2">
      <CreatePostIcon />

      <div className="flex flex-1">
        <Link
          href="/new"
          className="w-full cursor-pointer rounded border border-[#343536] bg-[#272729] px-4 py-2 text-sm hover:bg-[#333333] focus:outline-none"
        >
          Create Post
        </Link>
      </div>

      <div className="flex px-1 space-x-1">
        <HiOutlinePhotograph className="h-9 w-9 cursor-pointer rounded p-1.5 text-gray-400 hover:bg-[#343536]" />
        <HiOutlineLink className="h-9 w-9 cursor-pointer rounded p-1.5 text-gray-400 hover:bg-[#343536]" />
      </div>
    </div>
  );
};

export default CreatePost;
