"use client";
import Comments from "@/components/comments";
import EditFeedbackButton from "@/components/editFeedbackButton";
import GoBack from "@/components/goBack";
import "../detailPage.css";
import { useState } from "react";

export default function PageDetail({ params }) {
  const { id } = params;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const suggestionData = await getDetailSuggestion(params.id);

      setData(suggestionData);

      if (!suggestionData) {
        return notFound();
      }
    };

    fetchData();
  }, [params.id]);
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
