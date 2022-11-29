import React from "react";
import { LoadingAnimation } from "../assets/LoadingAnimation";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center w-screen h-screen space-y-4 overflow-hidden bg-black/80">
      <LoadingAnimation style="mr-2 h-20 w-20 animate-spin fill-white text-gray-600" />
      <h2 className="text-2xl font-semibold text-center text-white">
        Loading...
      </h2>
    </div>
  );
};

export default Loading;
