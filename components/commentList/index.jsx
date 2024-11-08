"use client";
import CommentCard from "../commentCard";
import "./commentList.css";

export default function CommentList({ feedbackDetail }) {
  return (
    <div className="commentListContainer">
      <h2>{feedbackDetail?.commits?.length} Comment</h2>
      {feedbackDetail?.commits?.map((comment, i) => (
        <CommentCard key={i} comment={comment} />
      ))}
    </div>
  );
}
