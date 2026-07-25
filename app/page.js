import HomeHeader from "@/components/HomeHeader";
import HomeSlider from "@/components/HomeSlider";
import projects from "./data/project";

export default function Home() {
  return (
    <>
      <HomeHeader />

      <HomeSlider projects={projects} />
    </>
  );
}