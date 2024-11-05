"use client";
import CommentIcon from "@/svgs/comment";
import "./feedback.css";
import Link from "next/link";
import UpdownIcon from "@/svgs/updownicon";
import { useState } from "react";
import AddFeedbackButton from "../addFeedbackButton";

export default function FeedbackCard({ feedbackData }) {
  const [feedbacks, setFeedbacks] = useState(feedbackData);

  function handleAddFeedback(newFeedback) {
    setFeedbacks((prev) => [...prev, newFeedback]);
  }
  return (
    <div id="feedback" className="feedbackCardContainer">
      {feedbacks.response.map((x, i) => (
        <div key={i} className="feedbackCard">
          <div className="feedBackContent">
            <div className="cardContent">
              <div className="likes">
                <UpdownIcon />
                <p>{x.uploadsCount}</p>
              </div>
              <Link
                href={`/suggestion/${x.id}`}
                className="feedBackContentItem"
              >
                <div>
                  <h3>{x.title}</h3>
                  <p>{x.description}</p>
                  <p className="tag">{x.name}</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="comment">
            <CommentIcon />
            <p>{x.commit?.length}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
