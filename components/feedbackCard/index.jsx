"use client";
import CommentIcon from "@/svgs/comment";
import "./feedback.css";

import { Router } from "next/navigation";

export default function FeedbackCard() {
  return (
    <div className="feedbackCardContainer">
      <div className="feedbackCard" onClick={() => Router.push("/comment/1")}>
        <div className="cardContent">
          <div className="likes">
            <p>50</p>
          </div>
          <div className="feedBackContent">
            {data.map(() => {
              <>
                <h3>{data.title}</h3>
                <p>{data.body}</p>
              </>;
            })}

            <p className="tag">Enhancement</p>
          </div>
        </div>
        <div className="comment">
          <CommentIcon />
        </div>
      </div>
    </div>
  );
}
