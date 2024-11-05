import Link from "next/link";
import "./loginBtn.css";
export default function LoginBtn() {
  return (
    <div className="loginBtn">
      <Link href="/login">
        <button className="login">Login</button>
      </Link>
    </div>
  );
}
