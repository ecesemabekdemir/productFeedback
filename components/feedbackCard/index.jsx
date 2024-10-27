import CommentIcon from "@/svgs/comment";
import "./feedback.css";
import { getFeedbacks } from "@/utils/feedbackService";

export default async function FeedbackCard() {
  const { response, error } = await getFeedbacks();

  console.log(error);

  console.log(response);

  //onClick={() => Router.push("/comment/1")}
  return (
    <div className="feedbackCardContainer">
      <div className="feedbackCard">
        <div className="cardContent">
          <div className="likes">
            <p>50</p>
          </div>
          <div className="feedBackContent">
            <div className="feedBackContentItem">
              {response.posts.map((x) => (
                <p>{x.title}</p>
              ))}
            </div>

            <p className="tag">Enhancement</p>
          </div>
        </div>
        <div className="comment">
          <CommentIcon />
        </div>
      </div>
    </div>
  );
}
