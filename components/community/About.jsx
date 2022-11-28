import React from "react";

const About = () => {
  return (
    <div className="flex flex-col space-y-2 divide-y divide-[#343536] rounded border border-[#343536] bg-[#1a1a1b] p-4 text-gray-300">
      <div className="divide-y divide-[#343536] pb-2">
        <p className="pb-2 text-gray-400">About the Community</p>
        <div className="py-2 space-y-2 text-sm">
          <p>
            Take the red bean to join the garden. View the collection at{" "}
            <a
              href="https://www.azuki.com/gallery"
              target="_blank"
              className="text-blue-500"
            >
              azuki.com/gallery
            </a>
            .
          </p>
          <p>
            Azuki starts with a collection of 10,000 avatars that give you
            membership access to The Garden: a corner of the internet where
            artists, builders, and web3 enthusiasts meet to create a
            decentralized future. Azuki holders receive access to exclusive
            drops, experiences, and more. Visit{" "}
            <a
              href="https://www.azuki.com"
              target="_blank"
              className="text-blue-500"
            >
              azuki.com
            </a>{" "}
            for more details.
          </p>
          <p>We rise together. We build together. We grow together.</p>
        </div>
        <div className="flex pt-2 space-x-16">
          <div className="flex flex-col">
            <span>1.2m</span>
            <span className="text-xs">Members</span>
          </div>
          <div className="flex flex-col">
            <span>420</span>
            <span className="text-xs">Online</span>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <p className="text-sm font-light">Created Jan 20, 2022</p>
      </div>
    </div>
  );
};

export default About;
