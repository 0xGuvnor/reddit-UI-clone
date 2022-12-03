import axios from "axios";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";

const RedditContext = createContext();
const useRedditContext = () => useContext(RedditContext);

TimeAgo.addDefaultLocale(en);

const RedditProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  const timeAgo = new TimeAgo("en-US");

  const fetcher = (url) => axios.get(url).then((res) => res.data);

  useEffect(() => {
    (async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setCurrentUser(user);
    })();

    supabase.auth.onAuthStateChange((event, session) => {
      setCurrentUser(session.user);
    });
  }, []);

  return (
    <RedditContext.Provider
      value={{ currentUser, fetcher, selectedPost, setSelectedPost, timeAgo }}
    >
      {children}
    </RedditContext.Provider>
  );
};

export { useRedditContext, RedditProvider };
