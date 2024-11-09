import EditFeedbackButton from "@/components/editFeedbackButton";
import GoBack from "@/components/goBack";
import "../detailPage.css";
import SuggestionItem from "@/components/suggestion-item";
import { getFeedbackDetail } from "@/utils/feedbackService";

export default async function PageDetail({ params }) {
  const { id } = params;

  const feedbackDetail = await getFeedbackDetail(id);
  console.log("ddd",feedbackDetail);

  return (
    <>
      <div className="detailPage">
        <div className="detailPageHeader">
          <GoBack />
          <EditFeedbackButton />
        </div>
        <SuggestionItem feedbackDetail={feedbackDetail} />
      </div>
    </>
  );
}
