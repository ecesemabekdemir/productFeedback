"use client";
import SignupForm from "@/components/signupForm";
import Apple from "@/svgs/apple";
import Google from "@/svgs/google";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SingUpPage() {
  const router = useRouter();

  function handleSignupSuccess() {
    router.push("/login");
  }
  return (
    <div className="signupSection">
      <h1>Feedback Board</h1>
      <SignupForm handleSignupSuccess={handleSignupSuccess} />
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
  );
}
