import Ampul from "@/svgs/ampul/ampul";
import AddFeedbackButton from "../addFeedbackButton";
import HeaderFilter from "../headerFilter";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="left">
          <Ampul />
          <p className="headerItemLenght">6 Suggestions</p>
        </div>
        <HeaderFilter />
        <AddFeedbackButton />
      </div>
    </>
  );
}
