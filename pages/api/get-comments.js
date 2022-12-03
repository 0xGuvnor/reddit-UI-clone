import { supabase } from "../../services/supabaseClient";

export default async (req, res) => {
  try {
    // console.log(req.query, "api");

    const { data } = await supabase
      .from("comments")
      .select("*, users!inner(*)")
      .eq("postId", req.query.postId);

    // console.log(data, "data");

    res.status(200).send({ data });
  } catch (error) {
    res.status(500).send({ error: "Error fetching comments" });
  }
};
