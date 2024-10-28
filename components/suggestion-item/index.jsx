"use client";
import AddCommentForm from "../addComment";
import CommentList from "../commentList";
import CommentIcon from "@/svgs/comment";
import "./suggestionItem.css";
import { useState, useEffect } from "react";

export default function SuggestionItem({ feedbackData, id }) {
  const [posts, setPosts] = useState([]);
  console.log("id", id);

  useEffect(() => {
    if (feedbackData && feedbackData.response && feedbackData.response.posts) {
      console.log("tümnm postlar", feedbackData.response.posts);

      const filteredPosts = feedbackData.response.posts.filter((post) => {
        console.log("idd", post.id, id);
        return post.id == id;
      });

      setPosts(filteredPosts);
      console.log("Filtered posts", filteredPosts); // filtrelenmiş postları kontrol ettik
    }
  }, [feedbackData, id]);

  if (posts.length === 0) {
    return <p>Gönderi bulunamadı.</p>; // posts dizisi boşsa burada döndürdük.
  }

  return (
    <div className="suggestionItem">
      <div className="feedbackCardContainer">
        {posts.map((post, index) => (
          <div className="feedBackContent" key={index}>
            <div className="cardContent">
              <div className="likes">
                <p>{post.reactions.likes}</p>
              </div>
              <div className="feedBackContentItem">
                <div>
                  <h3>{post.title}</h3>
                  <p>{post.content || "içerik gelicek"}</p>
                  <p className="tag">Enhancement</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="comment">
          <CommentIcon />
        </div>
      </div>
      <CommentList />
      <AddCommentForm />
    </div>
  );
}
