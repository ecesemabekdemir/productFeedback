import CommentList from "../commentList";
import FeedbackCard from "../feedbackCard";

export default function Comments() {
  return (
    <div className="comments">
      <FeedbackCard />
      <CommentList />
    </div>
  );
}
