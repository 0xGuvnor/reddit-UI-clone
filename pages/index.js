import { useEffect, useState } from "react";
import About from "../components/community/About";
import Banner from "../components/community/Banner";
import Feed from "../components/feed";
import CreatePost from "../components/feed/CreatePost";
import Header from "../components/header";
import useSWR from "swr";
import axios from "axios";

export default function Home() {
  const [myPosts, setMyPosts] = useState([]);

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR("/api/get-posts", fetcher, {
    refreshInterval: 200,
  });

  useEffect(() => {
    if (!data) return;

    setMyPosts(data.data);
  }, [data]);

  console.log(data?.data);

  return (
    <div className="flex min-h-screen flex-col bg-[#010101]">
      <Header />
      <Banner />
      <main className="flex flex-1 w-full max-w-5xl px-6 py-5 mx-auto space-x-6">
        <div className="w-full space-y-4">
          <CreatePost />
          <Feed posts={myPosts} />
        </div>
        <div className="hidden w-1/3 md:block">
          <About />
        </div>
      </main>
    </div>
  );
}
