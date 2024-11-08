"use client";
import LoginForm from "@/components/loginForm";
import "./login.css";
import Google from "@/svgs/google";
import Apple from "@/svgs/apple";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function LoginPage() {
  function handleLoginSuccess() {
    // ana sayfaya yönlendir
    redirect("/");
  }

  return (
    <div className="loginSection">
      <h1>Feedback Board</h1>
      <LoginForm handleLoginSuccess={handleLoginSuccess} />
      <div className="or">
        <hr />
        <p>Ya da</p>
        <hr />
      </div>
      <div className="loginOptionBtns">
        <button className="google">
          <Google />
          <p>log in with Google</p>
        </button>
        <button className="apple">
          <Apple />
          <p>log in with Apple</p>
        </button>
      </div>
      <div className="accountCreation">
        <p>Don't you have an account?</p>
        <Link href={"/signUp"}>Sign up</Link>
      </div>
    </div>
  );
}
