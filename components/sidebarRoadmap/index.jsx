import Link from "next/link";

export default function SidebarRoadMap() {
  return (
    <div className="sidebarRoadMap">
      <div className="roadMapRouting">
        <h1>Roadmap</h1>
        <Link href={"roadmap"}> View </Link>
      </div>
      <div className="situation">
        <h3> <span> </span> Planned</h3>
        <h3>2</h3>
      </div>
      <div className="situation">
        <h3> <span> </span> In-Progress</h3>
        <h3>3</h3>
      </div>
      <div className="situation">
        <h3> <span> </span> Live</h3>
        <h3>1</h3>
      </div>
    </div>
  )
}