"use client";
import { GetMe, postComments } from "@/utils/feedbackService";
import "./addComment.css";
import { useEffect, useState } from "react";

export default function AddCommentForm({ post, setPost }) {
  const [text, setText] = useState("");
  const [user, setUser] = useState("");
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (post) {
      if (Array.isArray(post.commits)) {
        setComment(post);
      } else if (post.commits) {
        setComment({ ...post, commits: [post.commits] });
      }
    }
  }, [post]);

  const MAX_CHAR = 250;
  const [remainingChar, setRemainingChar] = useState(250);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await GetMe();
        setUser(userData);
      } catch (error) {
        toast.error("Error fetching user data.");
        console.error(error);
      }
    };
    fetchUser();
  }, []);
  useEffect(() => {
    setRemainingChar(MAX_CHAR - text.length);
  }, [text]);

  console.log("feedbackDetail", post);

  return (
    <div className="addCommentForm">
      <h2>Add Comment</h2>
      <form id="addComment" className="form-group" action={postComments}>
        <textarea
          name="description"
          className="addCommentTextarea"
          placeholder="Type your comment here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <input type="hidden" name="userId" value={user?.data?.userId} />
        <input
          type="hidden"
          name="userName"
          value={user?.data?.firstName || ""}
        />
        <input type="hidden" name="feedBackId" value={comment?.id || ""} />
        <input type="hidden" name="created" value={new Date().toISOString()} />
        <div className="btn-group">
          <small>{remainingChar} Characters left</small>
          <div className="addCommentBtn">
            <button>Post Comment</button>
          </div>
        </div>
      </form>
    </div>
  );
}
