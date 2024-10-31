import CommentCard from "../commentCard";
import "./commentList.css";

export default function CommentList({ feedbackDetail }) {
  return (
    <div className="commentListContainer">
      <h2>4 Comments</h2>
      {feedbackDetail?.commits?.map((comment, i) => (
        <CommentCard key={i} comment={comment} />
      ))}
    </div>
  );
}
