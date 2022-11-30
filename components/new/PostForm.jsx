import { useRouter } from "next/router";
import React, { useState } from "react";
import { supabase } from "../../services/supabaseClient";
import Loading from "../Loading";

const PostForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const handlePost = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await supabase.from("feed").insert([
        {
          author: "azuki_fan",
          title,
          content,
        },
      ]);

      setIsLoading(false);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col space-y-6">
      {isLoading && <Loading />}

      <h1 className="border-b border-[#343536] pb-3 text-lg font-medium">
        Create a Post
      </h1>

      <div className="flex flex-col space-y-2 rounded bg-[#1a1a1b] p-4">
        <input
          className="rounded border border-[#343536] bg-[#1a1a1b] px-1.5 py-1 text-sm text-white focus:outline-none"
          type="text"
          placeholder="Title"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="rounded border border-[#343536] bg-[#1a1a1b] px-1.5 py-1 text-sm text-white focus:outline-none"
          name="content"
          rows={10}
          cols={30}
          placeholder="Text (required)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex justify-end pt-1">
          <button
            className="w-24 rounded-full bg-gray-200 px-4 py-1.5 text-xs font-semibold text-[#1a1a1b] transition duration-300 ease-in-out hover:scale-110 hover:bg-green-400"
            onClick={handlePost}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
