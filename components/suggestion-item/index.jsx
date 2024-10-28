import AddCommentForm from "../addComment";
import CommentList from "../commentList";
import FeedbackCard from "../feedbackCard";

export default function SuggestionItem() {
  return (
    <div className="suggestionItem">
      <FeedbackCard />
      <CommentList />
      <AddCommentForm />
    </div>
  );
}
