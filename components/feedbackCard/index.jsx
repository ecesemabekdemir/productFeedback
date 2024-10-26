"use client";
import CommentIcon from "@/svgs/comment";
import "./feedback.css";
import { useRouter } from "next/navigation";

export default function FeedbackCard() {
  const Router = useRouter();
  return (
    <div className="feedbackCardContainer">
      <div className="feedbackCard">
        <div className="cardContent">
          <div className="likes">
            <p>50</p>
          </div>
          <div className="content">
            <h3>Add tags for solutions</h3>
            <p>Easier to search for solutions based on a specific stack.</p>
            <p className="tag">Enhancement</p>
          </div>
        </div>
        <div className="comment" onClick={() => Router.push("/comment/1")}>
          <CommentIcon />
        </div>
      </div>
    </div>
  );
}
