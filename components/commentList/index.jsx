import CommentCard from "../commentCard";
import "./commentList.css";

export default function CommentList() {
  return (
    <div className="commentListContainer">
      <h2>4 Comments</h2>
      <CommentCard />
      <CommentCard />
      <CommentCard />
    </div>
  );
}
