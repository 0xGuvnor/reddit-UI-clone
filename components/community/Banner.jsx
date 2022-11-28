import Image from "next/image";
import React, { useEffect, useState } from "react";
import banner from "../../public/banner.jpg";
import logo from "../../public/SubredditLogo.webp";

const Banner = () => {
  const [joined, setJoined] = useState(false);
  const [hoverStatus, setHoverStatus] = useState("Joined");

  const handleJoin = () => {
    if (joined) {
      setJoined(false);
      localStorage.setItem("joined", "");
    } else {
      setJoined(true);
      localStorage.setItem("joined", "joined");
    }
  };

  useEffect(() => {
    setJoined(!!localStorage.getItem("joined"));
  }, []);

  return (
    <div className="flex flex-col mt-14">
      <div className="relative w-screen h-52 xl:h-96">
        <Image src={banner} fill className="object-cover" alt="Azuki banner" />
      </div>
      <div className="bg-[#1a1a1b]">
        <div className="max-w-5xl px-6 py-2 mx-auto">
          <div className="flex items-start pb-5 space-x-4">
            <div className="relative w-20 h-20 -mt-6">
              <Image
                src={logo}
                alt="Azuki logo"
                fill
                className="object-contain w-full h-full border rounded-full"
              />
            </div>

            <div className="mt-1">
              <h1 className="text-2xl font-bold text-[#D7DADC]">Azuki</h1>
              <h2 className="pt-1 text-sm text-gray-400">r/azuki</h2>
            </div>

            <div className="mt-1">
              {joined ? (
                <button
                  onClick={handleJoin}
                  onMouseEnter={() => setHoverStatus("Leave")}
                  onMouseLeave={() => setHoverStatus("Joined")}
                  className="w-24 cursor-pointer rounded-full border border-gray-300 px-[1.6rem] py-1 text-center text-sm font-semibold hover:border-0 hover:bg-red-500"
                >
                  {hoverStatus}
                </button>
              ) : (
                <button
                  onClick={handleJoin}
                  className="w-24 cursor-pointer rounded-full border border-gray-300 bg-gray-300 px-[1.6rem] py-1 text-center text-sm font-semibold text-black"
                >
                  Join
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
