import FeedbackCard from "@/components/feedbackCard";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { getCategory } from "@/utils/feedbackService";

export default async function MainPage({ searchParams }) {
  const { category } = searchParams;
  let url = `${process.env.API_ROOT_URL}${process.env.API_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}${process.env.API_CATEGORIES_ENDPOINT}`;

  if (category) {
    url = `${url}?category=${category}`;
  }

  const data = await getCategory(url);

  console.log("data", data);

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
