"use client"
import { useState } from "react";
import Progress from "./inprogress";
import Live from "./live";
import Planned from "./planned";
import "./roadmap.css"

export  default function RoadmapComp() {
  const [selectedTab, setSelectedTab] = useState("Planned");
  return (
    <div className="filteredSuggestionPart">
      <div className="filteredSuggestion">
        <Planned />
        <Live />
        <Progress />
      </div>

      <div className="filteredSuggestionMobil">
      <div className="tabMenu">
        <button 
          className={`tabButton ${selectedTab === "Planned" ? "active" : ""}`} 
          onClick={() => setSelectedTab("Planned")}
        >
          Planned
        </button>
        <button 
          className={`tabButton ${selectedTab === "Live" ? "active" : ""}`} 
          onClick={() => setSelectedTab("Live")}
        >
          Live
        </button>
        <button 
          className={`tabButton ${selectedTab === "Progress" ? "active" : ""}`} 
          onClick={() => setSelectedTab("Progress")}
        >
          Progress
        </button>
      </div>

      <div className="filteredSuggestionPart">
        {selectedTab === "Planned" && <Planned />}
        {selectedTab === "Live" && <Live />}
        {selectedTab === "Progress" && <Progress />}
      </div>
      </div>
    </div>
  )
}