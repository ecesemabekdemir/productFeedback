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
      <>
        {response.posts.map((x) => (
          <div className="feedbackCard">
            <div className="feedBackContent">
              <div className="cardContent">
                <div className="likes">
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
          </div>
        ))}
      </>
    </div>
  );
}
