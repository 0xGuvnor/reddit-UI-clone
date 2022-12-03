import React, { useState } from "react";
import { useRedditContext } from "../../context/RedditContext";
import { supabase } from "../../services/supabaseClient";

const PostComment = ({ postId }) => {
  const { currentUser } = useRedditContext();

  const [input, setInput] = useState("");

  const submitComment = async () => {
    try {
      await supabase.from("comments").insert({
        author: currentUser.user_metadata.full_name,
        text: input,
        postId: postId,
        email: currentUser.user_metadata.email,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setInput("");
    }
  };

  return (
    <div className="flex flex-col space-y-2 rounded bg-[#1a1a1b] p-4 text-sm">
      <div>
        Post as {""}
        <span className="text-[#4296ca]">
          {currentUser?.user_metadata.full_name}
        </span>
      </div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        cols={30}
        rows={8}
        placeholder="Post your thoughts..."
        className="rounded border border-[#343536] bg-[#1a1a1b] p-2 focus:outline-none"
      />
      <div className="flex justify-end pt-2">
        <button
          onClick={submitComment}
          className="rounded-full bg-gray-200 px-4 py-1.5 text-xs font-semibold text-[#1a1a1b]"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default PostComment;
