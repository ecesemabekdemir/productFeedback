"use client";

import { useState } from "react";

export default function SignupForm({ handleSignupSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  async function handleSignup(e) {
    e.preventDefault();
    try {
      const response = await signupUser(formData); // signupUser fonksiyonunu feedbackServer.jsden
      console.log("Kayıt başarılı:", response);
      handleSignupSuccess(); // kayıt ok ise yönlendir logine yönlendirce<
    } catch (error) {
      console.error("Kayıt hatası:", error);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <form className="signupForm" onSubmit={handleSignup}>
      <label htmlFor="name">
        <input
          name="name"
          type="text"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="lastname">
        <input
          name="lastname"
          type="text"
          placeholder="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="email">
        <input
          name="email"
          type="text"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password">
        <input
          name="password"
          type="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className="signUpBtn">
        Sing up
      </button>
    </form>
  );
}
