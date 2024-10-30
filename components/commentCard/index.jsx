import "./commentCard.css";

export default function CommentCard({ comment }) {
  console.log("comment :>> ", comment);
  return (
    <div className="commentCardContainer">
      <div>
        <div className="image"></div>
      </div>
      <div className="commentCard">
        <div className="commentHeader">
          <div className="profil">
            <div className="namebox">
              {/* <p>{comment?.user?.fullName}</p> */}
              {/* <p>{comment?.user?.username}</p> */}
            </div>
          </div>
          <button>Reply</button>
        </div>
        <div className="commentContent">
          {/* <p>{comment?.body}</p> */}
        </div>
      </div>
    </div>
  );
}
