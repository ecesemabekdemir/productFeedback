import EditFeedbackButton from "@/components/editFeedbackButton";
import GoBack from "@/components/goBack";
import "../detailPage.css";
import SuggestionItem from "@/components/suggestion-item";
import { getFeedbacks } from "@/utils/feedbackService";

export default async function PageDetail({ params }) {
  const { id } = params;
  const feedbackData = await getFeedbacks(id);

  return (
    <>
      <div className="detailPage">
        <div className="detailPageHeader">
          <GoBack />
          <EditFeedbackButton />
        </div>
        <SuggestionItem feedbackData={feedbackData} id={id} />
      </div>
    </>
  );
}
