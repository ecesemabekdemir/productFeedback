"use client";
import Link from "next/link";

export default function LogOutBtn() {
  return (
    <div className="logoutBtn">
      <Link href="/">
        <button className="logout">LogOut</button>
      </Link>
    </div>
  );
}
