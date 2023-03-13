import { useRouter } from "next/router";
import React from "react";
import { useRedditContext } from "../../context/RedditContext";
import Actions from "../feed/Actions";
import Info from "../feed/Info";
import Vote from "../feed/Vote";

const Post = ({
  id,
  title,
  content,
  author,
  upvotes,
  downvotes,
  created_at,
}) => {
  const router = useRouter();
  const { setSelectedPost, timeAgo } = useRedditContext();

  const navigateToPost = () => {
    setSelectedPost({
      id,
      title,
      content,
      author,
      upvotes,
      downvotes,
      created_at,
    });

    router.push(`/post/${id}`);
  };

  return (
    <div className="transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-900">
      <div className="flex space-x-3 rounded border border-[#343536] bg-[#1a1a1b]/80 p-2">
        <Vote upvotes={upvotes} downvotes={downvotes} />
        <div
          onClick={navigateToPost}
          className="flex flex-1 cursor-pointer flex-col space-y-1"
        >
          <Info
            author={author}
            timestamp={
              1
              // timeAgo.format(new Date(created_at), "twitter-now")
            }
          />
          <h1 className="text-lg font-medium text-[#d7dadc]">{title}</h1>
          <p className="text-sm font-light text-[#d7dadc]/80">{content}</p>
          <Actions />
        </div>
      </div>
    </div>
  );
};

export default Post;
