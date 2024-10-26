"use client"
import { useState } from "react";
import SidebarFilter from "../sidebarFilter"
import SidebarRoadMap from "../sidebarRoadmap"
import "./sidebar.css"
import Hamburger from "@/svgs/hamburger";
import CarpiSvg from "@/svgs/carpi";

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sidebar">
      <div className="sidebarDesktop">
        <div className="sidebarInfo">
          <h1>Frontend Mentor</h1>
          <p>Feedback Board</p>
        </div>
        <SidebarFilter />
        <SidebarRoadMap />
      </div>

      <div className="topnav">
      <div className="sidebarInfo">
          <h1>Frontend Mentor</h1>
          <p>Feedback Board</p>
          <button className="hamburgerMenu" onClick={() => toggleMenu()}>
             {isMenuOpen ? <CarpiSvg /> : <Hamburger />}
          </button>
        </div>
        {isMenuOpen && (
         <div className={`mobileMenuItems ${isMenuOpen ? "open" : ""}`}>
            <SidebarFilter />
            <SidebarRoadMap />
          </div>
        )}
      </div>
    </div>


  )
}