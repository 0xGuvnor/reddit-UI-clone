import Image from "next/image";
import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import RedditBanner from "../public/RedditBanner.svg";
import GoogleLogo from "../public/GoogleLogo.png";
import FacebookLogo from "../public/FacebookLogo.png";
import { BsApple } from "react-icons/bs";
import { supabase } from "../services/supabaseClient";

const Login = ({ show }) => {
  const signInWith = async (provider) => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: provider,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const loginProviders = [
    { name: "Apple", logo: BsApple, login: () => signInWith("apple") },
    { name: "Google", logo: GoogleLogo, login: () => signInWith("google") },
    {
      name: "Facebook",
      logo: FacebookLogo,
      login: () => signInWith("facebook"),
    },
  ];

  return (
    <div className="fixed z-50 flex items-center justify-center w-screen h-screen bg-black/50 backdrop-blur-sm">
      <div className="relative flex h-3/4 w-3/4 flex-col rounded-xl bg-[#1B2021] xl:w-1/2">
        <div className="absolute top-0 right-0 m-1">
          <AiOutlineClose
            onClick={() => show(false)}
            className="h-9 w-9 cursor-pointer rounded-full p-1.5 text-white transition duration-300 ease-in-out hover:scale-110 hover:bg-[#343536]"
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full -mt-16 space-y-2">
          <div className="relative h-52 w-96">
            <Image
              src={RedditBanner}
              fill
              alt="Reddit banner"
              className="object-cover"
            />
          </div>

          <div className="space-y-4">
            {loginProviders.map((provider, id) => (
              <LoginButton provider={provider} key={id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

const LoginButton = ({ provider }) => {
  return (
    <button
      onClick={provider.login}
      disabled={provider.name === "Google" ? false : true}
      className="flex items-center p-4 space-x-4 transition duration-300 ease-in-out border border-gray-300 rounded cursor-pointer group w-72 hover:bg-gray-100"
    >
      {provider.name === "Apple" ? (
        <BsApple className="w-6 h-6 group-hover:fill-black" />
      ) : (
        <div className="relative w-6 h-6">
          <Image
            src={provider.logo}
            fill
            alt={`${provider.name} logo`}
            className="object-contain"
          />
        </div>
      )}

      <span className="flex-1 font-bold text-center group-hover:text-black">
        Sign in with {provider.name}
      </span>
    </button>
  );
};
