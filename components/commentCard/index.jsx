"use client";
import "./commentCard.css";

export default function CommentCard({ comment }) {
  return (
    <div className="commentCardContainer">
      <div>
        <div className="image"></div>
      </div>
      <div className="commentCard">
        <div className="commentHeader">
          <div className="profil">
            <div className="namebox">
              {/* <p>{post?.commit?.fullName}</p> */}
              {/* <p>{post?.commit?.username}</p> */}
            </div>
          </div>
          <button>Reply</button>
        </div>
        <div className="commentContent">
          <p>{comment?.description}</p>
        </div>
      </div>
    </div>
  );
}
