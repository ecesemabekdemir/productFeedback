"use client";
import AddCommentForm from "../addComment";
import CommentList from "../commentList";
import CommentIcon from "@/svgs/comment";
import "./suggestionItem.css";
import { useEffect, useState } from "react";

export default function SuggestionItem({ feedbackDetail, comments }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (feedbackDetail?.response) {
      setPost(feedbackDetail.response);
    }
  }, [feedbackDetail]);

  if (!post) {
    return <p>Gönderi bulunamadı.</p>;
  }
  return (
    <div className="suggestionItem">
      <div className="feedbackCardContainer">
        <div className="feedBackContent">
          <div className="cardContent">
            <div className="likes">
              <p>{post?.reactions?.likes}</p>
            </div>
            <div className="feedBackContentItem">
              <div>
                <h3>{post?.title}</h3>
                <p>{post?.content || "içerik gelicek"}</p>
              </div>
              <p className="tag">Enhancement</p>
            </div>
          </div>
        </div>
        <div className="comment">
          <CommentIcon />
        </div>
      </div>
      <CommentList comments={comments} />
      <AddCommentForm />
    </div>
  );
}
