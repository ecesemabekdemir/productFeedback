import SignupForm from "@/components/signupForm";
import Apple from "@/svgs/apple";
import Google from "@/svgs/google";
import Link from "next/link";

export default function SingUpPage() {
  return (
    <div className="signupSection">
    <h1>Feedback Board</h1>
    <SignupForm />
    <div className="or">
      <hr />
      <p>or</p>
      <hr />
    </div>
    <div className="loginOptionBtns">
      <button className="google">
        <Google />
        <p>sign up with Google</p>
      </button>
      <button className="apple">
        <Apple />
        <p>sign up with Google</p>
      </button>
    </div>
    <div className="accountCreation">
      <p>Do you have an account?</p>
      <Link href={"/login"}>Log in</Link>
    </div>
  </div>
  )
}