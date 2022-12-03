import { useEffect, useState } from "react";
import About from "../components/community/About";
import Banner from "../components/community/Banner";
import Feed from "../components/feed";
import CreatePost from "../components/feed/CreatePost";
import Header from "../components/header";
import useSWR from "swr";
import Login from "../components/Login";
import { useRedditContext } from "../context/RedditContext";
import { supabase } from "../services/supabaseClient";

export default function Home() {
  const { currentUser, fetcher } = useRedditContext();

  const [myPosts, setMyPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(true);

  const { data, error } = useSWR("/api/get-posts", fetcher, {
    refreshInterval: 200,
  });

  const saveAndUpdateUser = async () => {
    if (!currentUser) return;

    await supabase.from("users").upsert(
      {
        email: currentUser.user_metadata.email,
        name: currentUser.user_metadata.full_name,
        profileURL: currentUser.user_metadata.avatar_url,
      },
      { onConflict: "email" }
    );
  };

  useEffect(() => {
    if (!data) return;

    setMyPosts(data.data);
  }, [data]);

  useEffect(() => {
    if (currentUser) setShowLoginModal(false);

    saveAndUpdateUser();
    console.log("saving user...");
  }, [currentUser]);

  return (
    <>
      {showLoginModal && <Login show={setShowLoginModal} />}

      <div className="flex min-h-screen flex-col bg-[#010101]">
        <Header />
        <Banner />
        <main className="mx-auto flex w-full max-w-5xl flex-1 space-x-6 px-6 py-5">
          <div className="w-full space-y-4">
            <CreatePost />
            <Feed posts={myPosts} />
          </div>
          <div className="hidden w-1/3 md:block">
            <About />
          </div>
        </main>
      </div>
    </>
  );
}
