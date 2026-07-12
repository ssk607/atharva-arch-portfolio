import HomeSlider from "@/components/HomeSlider";
import projects from "@/app/data/project"; // or the correct path

export default function Home() {
  return (
    <>  
      <header className="home-overlay-header">
        <h1>ATHARVA ARCHITECTS</h1>
      </header>

      <HomeSlider projects={projects} />
    </>
  );
}