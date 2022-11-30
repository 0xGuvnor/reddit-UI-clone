import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";

const RedditContext = createContext();
const useRedditContext = () => useContext(RedditContext);

const RedditProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

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
    <RedditContext.Provider value={{ currentUser }}>
      {children}
    </RedditContext.Provider>
  );
};

export { useRedditContext, RedditProvider };
