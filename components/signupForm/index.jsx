"use client";

import { registerUser } from "@/utils/feedbackService";
import { useFormState } from "react-dom";

export default function SignupForm() {
  const [state, action] = useFormState(registerUser, null);

  return (
    <>
      {state?.error && (
        <div className="bg-red-500 text-white py-2 px-3 text-center">
          {state.error}
        </div>
      )}
      <form className="signupForm" action={action}>
        <label htmlFor="name">
          <input name="firstName" type="text" placeholder="name" />
        </label>
        <label htmlFor="lastname">
          <input name="lastName" type="text" placeholder="lastname" />
        </label>
        <label htmlFor="email">
          <input name="email" type="text" placeholder="email" />
        </label>
        <label htmlFor="password">
          <input name="password" type="password" placeholder="password" />
        </label>
        <input name="nickname" type="hidden" />
        <input name="avatar" type="hidden" />
        <button type="submit" className="signUpBtn">
          Sing up
        </button>
      </form>
    </>
  );
}
