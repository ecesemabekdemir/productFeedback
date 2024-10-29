import CommentCard from "../commentCard";
import "./commentList.css";

export default function CommentList({ comments }) {
  return (
    <div className="commentListContainer">
      <h2>4 Comments</h2>
      {comments.map((comment, i) => (
        <CommentCard key={i} comment={comment} />
      ))}
    </div>
  );
}
