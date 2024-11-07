import CommentIcon from "@/svgs/comment";
import UpdownIcon from "@/svgs/updownicon";
import Link from "next/link";

export default function Progress({ feedbackData }) {

  const filteredData = feedbackData?.response?.filter(x => x.updateStatus === 3);

  return (
    <div className="plannedContainer">
      <div className="filteredCardInfo">
        <h3>In-Progress ({filteredData.length || 0})</h3>
        <p>Currently being developed</p>
      </div>
      {filteredData && filteredData.length > 0 ? (
        filteredData?.map((x, index) => (
          <div className="FilteredCard" key={index}>
            <p className="filteredTitle"> <span></span> Planned </p>
            <Link href={"#"}>{x.title}</Link>
            <p>{x.description}</p>
            <div className="tag">
              <button>Feature</button>
            </div>
            <div className="filteredActions">
              <div className="likeBtn">
                <button> <UpdownIcon /> 123</button>
              </div>
              <div className="filteredCommentInfo">
                <CommentIcon />
                <p>{x.commit.length || 2}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="FilteredCard placeholder">
          <p className="filteredTitle"> <span></span> In Progress </p>
          <Link href={"#"}>No content available</Link>
          <p>This section currently has no posts.</p>
          <div className="tag">
            <button>Feature</button>
          </div>
          <div className="filteredActions">
            <div className="likeBtn">
              <button> <UpdownIcon /> 0</button>
            </div>
            <div className="filteredCommentInfo">
              <CommentIcon />
              <p>0</p>
            </div>
          </div>
        </div>
      )}
    </div>)
}