"use client";
import "./addComment.css";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function AddCommentForm() {
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

  return (
    <div className="addCommentForm">
      <h2>Add Comment</h2>
      <form id="addComment" className="form-group" onSubmit={handleSubmit}>
        <textarea
          className="addCommentTextarea"
          placeholder="Type your comment here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
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
