import RoadmapComp from "@/components/roadmap";
import RoadmapHeader from "@/components/roadmap-header";
import { getFeedbacks } from "@/utils/feedbackService";

export default async function RoadmapPage() {
  const feedbackData = await getFeedbacks();

  return (
    <div className="roadmapContainer">
      <RoadmapHeader />
      <RoadmapComp feedbackData={feedbackData} />
    </div>
  );
}
