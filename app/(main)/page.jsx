import FeedbackCard from "@/components/feedbackCard";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { getCategory, getFeedbacks } from "@/utils/feedbackService";

export default async function MainPage({ searchParams, handleAddFeedback }) {
  const { category } = searchParams;
  let url = `${process.env.API_ROOT_URL}${process.env.API_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}${process.env.API_CATEGORIES_ENDPOINT}`;

  if (category) {
    url = `${url}?category=${category}`;
  }

  const data = await getCategory(url);
  const feedbackData = await getFeedbacks();

  return (
    <>
      <div className="homePage">
        <Sidebar data={data} />
        <div className="content">
          <Header feedbackData={feedbackData} />
          <FeedbackCard
            feedbackData={feedbackData}
            handleAddFeedback={handleAddFeedback}
          />
        </div>
      </div>
    </>
  );
}
