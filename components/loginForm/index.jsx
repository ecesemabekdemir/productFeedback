"use client";
import { loginUser } from "@/utils/feedbackService";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm({ handleLoginSuccess }) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const router = useRouter();

  // kullanıcı girişi icin yapmak icim
  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await loginUser(credentials); // feedbackService den geliyor.

      console.log("başarılı", response);
      localStorage.setItem("token", response.token); // token saklama
      handleLoginSuccess();
    } catch (error) {
      console.error(" hatalı giris", error);
    }
  }
  // form verilerini güncellemek için
  function handleChange(e) {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <form className="loginForm" onSubmit={handleLogin}>
      <label htmlFor="email">
        <input
          name="email"
          type="text"
          placeholder="username@mail.com"
          value={credentials.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password">
        <input
          name="password"
          type="pasword"
          placeholder="******"
          value={credentials.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className="loginBtn">
        Log in
      </button>
    </form>
  );
}
