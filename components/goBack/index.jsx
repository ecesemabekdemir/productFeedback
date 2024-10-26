import Link from "next/link";
import "./back.css";

export default function GoBack() {
  return (
    <>
      <div className="goBack">
        <Link href="/" className="goBackButton">
          Go Back
        </Link>
      </div>
    </>
  );
}
