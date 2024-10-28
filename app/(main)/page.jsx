import FeedbackCard from "@/components/feedbackCard";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { getFeedbacks } from "@/utils/feedbackService";

export default async function MainPage({ searchParams }) {
  const { tags } = searchParams;
  let url = `${process.env.API_ROOT_URL}${process.env.API_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}${process.env.API_CATEGORIES_ENDPOINT}`;

  if (tags) {
    url = `${url}?tags=${tags}`;
  }

  const data = await getFeedbacks(url);

  return (
    <>
      <div className="homePage">
        <Sidebar data={data} />
        <div className="content">
          <Header />
          <FeedbackCard />
          {/* <Empty /> */}
        </div>
      </div>
    </>
  );
}
