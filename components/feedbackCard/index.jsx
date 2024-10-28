import CommentIcon from "@/svgs/comment";
import "./feedback.css";
import { getFeedbacks } from "@/utils/feedbackService";
import Link from "next/link";
import UpdownIcon from "@/svgs/updownicon";

export default async function FeedbackCard() {
  const { response, error } = await getFeedbacks();

  return (
    <div className="feedbackCardContainer">
      <>
        {response.posts.map((x) => (
          <Link
            key={x.id}
            href={`/suggestion/${x.id}`}
            className="feedbackCard"
          >
            <div className="feedBackContent">
              <div className="cardContent">
                <div className="likes">
                  <UpdownIcon />
                  <p>{x.reactions.likes}</p>
                </div>
                <div className="feedBackContentItem">
                  <div>
                    <h3>{x.title}</h3>
                    <p>içerik gelicek</p>
                    <p className="tag">Enhancement</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment">
              <CommentIcon />
            </div>
          </Link>
        ))}
      </>
    </div>
  );
}
