"use client";
import CommentCard from "../commentCard";
import "./commentList.css";

export default function CommentList({ feedbackDetail }) {
  return (
    <div className="commentListContainer">
      {feedbackDetail?.commits?.map((comment, i) => (
        <div key={i}>
          <h2>{feedbackDetail?.commits?.length} Comment</h2>
          <CommentCard comment={comment} />
        </div>
      ))}
    </div>
  );
}
