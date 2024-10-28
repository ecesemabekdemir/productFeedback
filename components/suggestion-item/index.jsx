import { getFeedbacks } from "@/utils/feedbackService";
import AddCommentForm from "../addComment";
import CommentList from "../commentList";
import CommentIcon from "@/svgs/comment";
import "./suggestionItem.css";

export default async function SuggestionItem({ id }) {
  const { response, error } = await getFeedbacks();
  console.log("Response:", response);
  if (error) {
    return <p>Bir hata oluştu.</p>;
  }

  // Belirli bir ID'ye göre gönderiyi filtreleyin
  const post = response.posts.slice(0, 5).find((x) => x.id === parseInt(id));

  if (!post) {
    return <p>Gönderi bulunamadı.</p>;
  }

  return (
    <div className="suggestionItem">
      <div className="feedbackCardContainer">
        <div className="feedBackContent">
          <div className="cardContent">
            <div className="likes">
              <p>{post.reactions.likes}</p>
            </div>
            <div className="feedBackContentItem">
              <div>
                <h3>{post.title}</h3>
                <p>{post.content || "içerik gelicek"}</p>
                <p className="tag">Enhancement</p>
              </div>
            </div>
          </div>
        </div>
        <div className="comment">
          <CommentIcon />
        </div>
      </div>
      <CommentList />
      <AddCommentForm />
    </div>
  );
}
