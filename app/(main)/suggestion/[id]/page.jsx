"use client";

import EditFeedbackButton from "@/components/editFeedbackButton";
import GoBack from "@/components/goBack";
import "../detailPage.css";
import SuggestionItem from "@/components/suggestion-item";

export default function PageDetail({ params }) {
  const { id } = params;

  return (
    <>
      <div className="detailPage">
        <div className="detailPageHeader">
          <GoBack />
          <EditFeedbackButton />
        </div>
        <SuggestionItem />
      </div>
    </>
  );
}
