"use client";
import CommentIcon from "@/svgs/comment";
import "./feedback.css";
import { Router } from "next/navigation";
import { getFeedbacks } from "@/utils/feedbackService";

export default async function FeedbackCard() {
  const { response, error } = await getFeedbacks();

  console.log(error);

  return (
    <div className="feedbackCardContainer">
      <div className="feedbackCard" onClick={() => Router.push("/comment/1")}>
        <div className="cardContent">
          <div className="likes">
            <p>50</p>
          </div>
          <div className="feedBackContent">
            {response.posts.map((x) => (
              <p>{x.title}</p>
            ))}

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
