import EditFeedbackButton from "@/components/editFeedbackButton";
import GoBack from "@/components/goBack";
import "../detailPage.css";
import SuggestionItem from "@/components/suggestion-item";
import {
  getFeedbackDetail,
  getFeedbackDetailComments,
} from "@/utils/feedbackService";

export default async function PageDetail({ params }) {
  const { id } = params;
  const feedbackDetail = await getFeedbackDetail(id);
  const feedbackDetailComments = await getFeedbackDetailComments(id);
  console.log("fededdfa", feedbackDetail);

  return (
    <>
      <div className="detailPage">
        <div className="detailPageHeader">
          <GoBack />
          <EditFeedbackButton />
        </div>
        <SuggestionItem
          feedbackDetail={feedbackDetail}
          comments={feedbackDetailComments}
        />
      </div>
    </>
  );
}
