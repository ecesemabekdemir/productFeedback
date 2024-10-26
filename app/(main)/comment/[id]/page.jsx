import Comments from "@/components/comments";
import EditFeedbackButton from "@/components/editFeedbackButton";
import GoBack from "@/components/goBack";
import "../detailPage.css";

export default function pageDetail({ params }) {
  const { id } = params;
  return (
    <>
      <div className="detailPage">
        <div className="detailPageHeader">
          <GoBack />
          <EditFeedbackButton />
        </div>
        <Comments />
      </div>
    </>
  );
}
