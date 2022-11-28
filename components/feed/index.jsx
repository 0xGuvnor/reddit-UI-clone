import React from "react";
import Post from "../common/Post";

const Feed = ({ posts }) => {
  return (
    <div className="space-y-2">
      {posts.map((post) => (
        <Post {...post} key={post.id} />
      ))}
    </div>
  );
};

export default Feed;
