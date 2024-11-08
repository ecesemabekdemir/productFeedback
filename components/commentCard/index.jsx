"use client";
import "./commentCard.css";

export default function CommentCard({ comment }) {
  return (
    <div className="commentCardContainer">
      <div className="commentCardInfo">
        <div className="image"></div>
        <div className="commentCard">
          <div className="commentHeader">
            <div className="profil">
              <div className="namebox">
                <p>{comment?.userName}</p>
              </div>
            </div>
            <div className="commentContent">
              <p>{comment?.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="reply">
        <button>Reply</button>
      </div>
    </div>
  );
}
