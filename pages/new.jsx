import React from "react";
import About from "../components/community/About";
import Header from "../components/header";
import PostForm from "../components/new/PostForm";

const New = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black text-[#d7dadc]">
      <Header />

      <main className="flex flex-1 w-full max-w-5xl px-6 py-5 mx-auto mt-16 space-x-6">
        <div className="w-full">
          <PostForm />
        </div>
        <div className="hidden w-1/3 md:block">
          <About />
        </div>
      </main>
    </div>
  );
};

export default New;
