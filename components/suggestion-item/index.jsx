"use client";
import AddCommentForm from "../addComment";
import CommentList from "../commentList";
import CommentIcon from "@/svgs/comment";
import "./suggestionItem.css";
import { useEffect, useState } from "react";

export default function SuggestionItem({ feedbackDetail }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (feedbackDetail) {
      setPost(feedbackDetail);

    }
  }, [feedbackDetail]);

  if (!post) {
    return <p>Gönderi bulunamadı.</p>;
  }

  console.log("post",post);

  return (
    <div id="suggestion" className="suggestionItem">
      <div className="feedbackCardContainer">
        <div className="feedBackContent">
          <div className="cardContent">
            <div className="likes">
              <p>{post.uploadsCount}</p>
            </div>
            <div className="feedBackContentItem">
              <div>
                <h3>{post.title}</h3>
                <p>{post.description || "içerik gelicek"}</p>
              </div>
              <p className="tag">{post.name}</p>
            </div>
          </div>
        </div>
        <div className="comment">
          <CommentIcon />
        </div>
      </div>
      <CommentList feedbackDetail={feedbackDetail} />
      <AddCommentForm />
    </div>
  );
}
