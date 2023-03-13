import Image from "next/image";
import React from "react";
import TimeAgo from "timeago-react";
import logo from "../../public/SubredditLogo.webp";

const Info = ({ author, timestamp }) => {
  return (
    <div className="flex items-center space-x-1 text-xs text-[#818384]">
      <div className="relative h-4 w-4">
        <Image
          src={logo}
          alt="Subreddit logo"
          fill
          className="rounded-full object-contain"
        />
      </div>
      <div className="font-semibold text-[#d7dadc] hover:underline">
        r/azuki
      </div>
      <div>•</div>
      <div>Posted by {author}</div>
      <div>•</div>
      <TimeAgo datetime={timestamp} />
    </div>
  );
};

export default Info;
