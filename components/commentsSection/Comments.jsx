import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiChatAlt } from "react-icons/hi";
import useSWR from "swr";
import { useRedditContext } from "../../context/RedditContext";
import { DownvoteIcon } from "../common/DownvoteIcon";
import { UpvoteIcon } from "../common/UpvoteIcon";

const Comments = ({ postId }) => {
  const { fetcher, timeAgo } = useRedditContext();

  const [comments, setComments] = useState([]);

  const { data } = useSWR(`/api/get-comments?postId=${postId}`, fetcher, {
    refreshInterval: 200,
  });

  useEffect(() => {
    if (!data) return;

    setComments(data.data);
  }, [data]);

  return (
    <div className="space-y-4 rounded bg-[#1a1a1a] py-2 px-4">
      {comments &&
        comments.map((comment, id) => (
          <div
            key={id}
            className="my-[.3rem] flex flex-col gap-[.5rem] text-sm"
          >
            <div className="flex gap-[.4rem]">
              <div className="relative h-[1.2rem] w-[1.2rem] overflow-hidden rounded-full">
                <Image
                  src={comment.users.profileURL}
                  fill
                  alt="User's profile picture"
                  className="object-cover"
                />
              </div>
              <span>{comment.author}</span>
              <span>•</span>
              <span>
                {timeAgo.format(new Date(comment.created_at), "twitter-now")}
              </span>
            </div>
            <div className="text-sm">{comment.text}</div>
            <div className="flex items-center gap-[.4rem] text-xs">
              <span>
                <UpvoteIcon className="text-[#818384]" />
              </span>
              <span>0</span>
              <span>
                <DownvoteIcon className="text-[#818384]" />
              </span>
              <span className="flex items-center gap-[.2rem] text-[#818384]">
                <HiChatAlt className="w-6 h-6" />
                <span>Reply</span>
              </span>
              <span className="text-[#818384]">Give</span>
              <span className="text-[#818384]">Share</span>
              <span className="text-[#818384]">Save</span>
              <span className="text-[#818384]">Follow</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Comments;
