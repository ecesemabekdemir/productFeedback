import CommentIcon from "@/svgs/comment";
import UpdownIcon from "@/svgs/updownicon";
import Link from "next/link";

export default function Planned() {
  return (
    <div className="plannedContainer">
      <div className="filteredCardInfo">
        <h3>Planned (2)</h3>
        <p>Ideas prioritized for research</p>
      </div>
      <div className="FilteredCard">
        <p className="filteredTitle"> <span></span> Planned </p>
        <Link href={"#"}>More comprehensive reports</Link>
        <p>It would be great to see a more detailed breakdown of solutions.</p>
        <div className="tag">
          <button>Feature</button>
        </div>
        <div className="filteredActions">
          <div className="likeBtn">
            <button> <UpdownIcon /> 123</button>
          </div>
          <div className="filteredCommentInfo">
            <CommentIcon /> 
            <p>2</p>
          </div>
        </div>
      </div>
    </div>
  )
}