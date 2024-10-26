import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

export default function MainPage() {
  return (
    <>
      <div className="homePage">
        <Sidebar />
        <div className="content">
          <Header />
        </div>
      </div>
    </>
  );
}
