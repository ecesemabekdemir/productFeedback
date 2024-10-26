import RoadmapComp from "@/components/roadmap";
import RoadmapHeader from "@/components/roadmap-header";

export default function RoadmapPage() {
  return (
    <div className="roadmapContainer">
      <RoadmapHeader />
      <RoadmapComp />
    </div>
  )
}