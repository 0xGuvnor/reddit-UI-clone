import About from "../components/community/About";
import Banner from "../components/community/Banner";
import CreatePost from "../components/feed/CreatePost";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="flex">
      <Header />
      <Banner />
      <main>
        <div>
          <CreatePost />
        </div>
        <div>
          <About />
        </div>
      </main>
    </div>
  );
}
