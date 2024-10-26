import EmptySvg from "@/svgs/empty";
import AddFeedbackButton from "../addFeedbackButton";
import "./empty.css"

export default function Empty() {
  return (
    <div className="empty">
      <EmptySvg />
        <h1>There is no feedback yet.</h1>
        <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
        <AddFeedbackButton />
    </div>
  )
}