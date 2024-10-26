import AddFeedbackButton from "../addFeedbackButton";
import GoBack from "../goBack";

export default function RoadmapHeader() {
  return (
    <div className="roadmapHeader">
      <div className="roadmapInfo">
        <GoBack />
      </div>
      <AddFeedbackButton />
    </div>
  )
}