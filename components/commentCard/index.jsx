import "./commentCard.css";

export default function CommentCard({ post, setPost }) {
  console.log("comment :>> ", post);
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
          <p>{post?.commits?.description}</p>
        </div>
      </div>
    </div>
  );
}
