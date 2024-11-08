"use client"
import { useState } from "react";
import Progress from "./inprogress";
import Live from "./live";
import Planned from "./planned";
import "./roadmap.css"

export  default function RoadmapComp({feedbackData}) {
  const [selectedTab, setSelectedTab] = useState("Planned");
  return (
    <div className="filteredSuggestionPart">
      <div className="filteredSuggestion">
        <Planned feedbackData={feedbackData} />
        <Live feedbackData={feedbackData} />
        <Progress feedbackData={feedbackData} />
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
        {selectedTab === "Planned" && <Planned feedbackData={feedbackData} />}
        {selectedTab === "Live" && <Live feedbackData={feedbackData} />}
        {selectedTab === "Progress" && <Progress feedbackData={feedbackData} />}
      </div>
      </div>
    </div>
  )
}