import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Comments from "../../components/commentsSection/Comments";
import PostComment from "../../components/commentsSection/PostComment";
import Post from "../../components/common/Post";
import About from "../../components/community/About";
import Header from "../../components/header";
import { useRedditContext } from "../../context/RedditContext";

const PostDetail = () => {
  const { selectedPost } = useRedditContext();
  const router = useRouter();

  useEffect(() => {
    if (selectedPost === null) router.push("/");
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-white bg-black">
      <Header />
      <div className="mx-auto flex w-full max-w-5xl flex-1 space-x-6 px-6 py-[5rem]">
        <div className="w-full space-y-4 lg:w-2/3">
          <Post {...selectedPost} />
          <PostComment postId={selectedPost?.id} />
          <Comments postId={selectedPost?.id} />
        </div>
        <div className="hidden w-1/3 md:block">
          <About />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
