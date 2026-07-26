import HomeHeader from "@/components/HomeHeader";
import HomeSlider from "@/components/HomeSlider";
import projects from "./data/project";

export default function Home() {
  return (
    <main className="home-page">

      <header className="home-overlay-header">
        <h1>ATHARVA ARCHITECTS</h1>
      </header>

      <HomeHeader />

      <HomeSlider projects={projects} />

    </main>
  );
}