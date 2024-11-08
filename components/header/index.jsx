"use client";
import Ampul from "@/svgs/ampul/ampul";
import AddFeedbackButton from "../addFeedbackButton";
import HeaderFilter from "../headerFilter";
import "./header.css";
import LoginBtn from "../loginBtn";
import { useEffect, useState } from "react";
import { GetMe, logOut } from "@/utils/feedbackService";

export default function Header({ feedbackData }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const response = await GetMe();
      setUser(response); // Veriyi direkt olarak user state'ine atıyoruz
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await logOut();
    setUser();
  };

  useEffect(() => {
    console.log("user :>> ", user);
  }, [user]);

  return (
    <>
      <div className="header">
        <div className="left">
          <Ampul />
          <p className="headerItemLenght">6 Suggestions</p>
        </div>
        <HeaderFilter />
        {user?.data ? (
          <>
            <div className="userInfo">
              {user?.data?.firstName}
              {user?.data?.lastName}
            </div>{" "}
            <br />
            <AddFeedbackButton />
            <button onClick={handleLogout}>Çıkış Yap</button>
          </>
        ) : (
          <LoginBtn />
        )}
      </div>
    </>
  );
}
