import React from "react";
import { DownvoteIcon } from "../common/DownvoteIcon";
import { UpvoteIcon } from "../common/UpvoteIcon";

const Vote = ({ upvotes, downvotes }) => {
  return (
    <div className="flex flex-col items-center">
      <button>
        <UpvoteIcon />
      </button>

      <p className="py-1 text-xs font-bold text-white">{upvotes - downvotes}</p>

      <button>
        <DownvoteIcon />
      </button>
    </div>
  );
};

export default Vote;
