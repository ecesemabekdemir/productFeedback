"use client";

import { loginUser } from "@/utils/feedbackService";
import { useFormState } from "react-dom";

export default function LoginForm() {
  const [state, action] = useFormState(loginUser, null);

  return (
    <>
      {state?.error && (
        <div className="bg-red-500 text-white py-2 px-3 text-center">
          {state.error}
        </div>
      )}
      <form className="loginForm" action={action}>
        <label htmlFor="email">
          <input name="email" type="email" placeholder="username@mail.com" />
        </label>
        <label htmlFor="password">
          <input name="password" type="password" placeholder="******" />
        </label>
        <button type="submit" className="loginBtn">
          Log in
        </button>
      </form>
    </>
  );
}
