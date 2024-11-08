"use client";
import {
  getFeedbackDetail,
  GetMe,
  postComments,
} from "@/utils/feedbackService";
import "./addComment.css";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function AddCommentForm() {
  const [user, setUser] = useState({});
  const [text, setText] = useState("");
  const MAX_CHAR = 250;
  const [remainingChar, setRemainingChar] = useState(250);

  useEffect(() => {
    setRemainingChar(MAX_CHAR - text.length);
  }, [text]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (remainingChar < 0) {
      toast.error("250 karakterden fazla olamaz.");
      return;
    }
  };
  useEffect(() => {
    const fetchUser = async () => {
      const response = await getFeedbackDetail();
      setUser(response); // Veriyi direkt olarak user state'ine atıyoruz
    };
    fetchUser();
  }, []);

  return (
    <div className="addCommentForm">
      <h2>Add Comment</h2>
      <form id="addComment" className="form-group" action={postComments}>
        <textarea
          name="description"
          className="addCommentTextarea"
          placeholder="Type your comment here"
        ></textarea>
        <input type="hidden" name="userId" />
        <input type="hidden" name="userName" />
        <input type="hidden" name="commitId" />
        <input type="hidden" name="feedBackId" />
        <input type="hidden" name="created" />
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
