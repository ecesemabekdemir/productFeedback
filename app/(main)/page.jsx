import FeedbackCard from "@/components/feedbackCard";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

export default function MainPage() {
  return (
    <>
      <div className="homePage">
        <Sidebar />
        <div className="content">
          <Header />
          <FeedbackCard />
        </div>
      </div>
    </>
  );
}
