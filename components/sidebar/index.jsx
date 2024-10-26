import SidebarFilter from "../sidebarFilter"
import SidebarRoadMap from "../sidebarRoadmap"
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarInfo">
        <h1>Frontend Mentor</h1>
        <p>Feedback Board</p>
      </div>
      <SidebarFilter />
      <SidebarRoadMap />
    </div>
  )
}