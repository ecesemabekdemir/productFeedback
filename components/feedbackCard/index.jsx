import CommentIcon from "@/svgs/comment";
import "./feedback.css";
import { getFeedbacks } from "@/utils/feedbackService";
import Link from "next/link";
import UpdownIcon from "@/svgs/updownicon";

export default async function FeedbackCard() {
  const { response, error } = await getFeedbacks();

  return (
    <div id="feedback" className="feedbackCardContainer">
      {response.map((x, index) => (
        <div key={index} className="feedbackCard">
          <div className="feedBackContent">
            <div className="cardContent">
              <div className="likes">
                <UpdownIcon />
                <p>{x.uploadsCount}</p>
              </div>
              <Link
                href={`/suggestion/${x.id}`}
                className="feedBackContentItem"
              >
                <div>
                  <h3>{x.title}</h3>
                  <p>{x.description}</p>
                  <p className="tag">{x.name}</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="comment">
            <CommentIcon />
            <p>{x.commit?.length}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
