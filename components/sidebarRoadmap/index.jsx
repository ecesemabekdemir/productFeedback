import Link from "next/link";

export default function SidebarRoadMap({feedbackData}) {
  const filteredPlannedData = feedbackData?.response?.filter(post => post.updateStatus === 1);
  const filteredLiveData = feedbackData?.response?.filter(post => post.updateStatus === 2);
  const filteredProgressData = feedbackData?.response?.filter(post => post.updateStatus === 3);

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