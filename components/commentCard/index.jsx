"use client";
import { useState } from "react";
import Reply from "../reply";
import "./commentCard.css";

export default function CommentCard({ comment }) {
  const [show, setShow] = useState(false);
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
          <Reply show={show} />
      </div>

      <button onClick={() => setShow(!show)} className="btn-group">
        Reply
      </button>
    </div>
  );
}
