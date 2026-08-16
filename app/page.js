import HomeHeader from "@/components/Header/HomeHeader";
import HomeSlider from "@/components/Home/HomeSlider";
import FooterCTA from "@/components/Footer/FooterCTA";
import Footer from "@/components/Footer/Footer";

import projects from "./data/project";

export default function Home() {
  // Chalukya Infra should remain in project.js
  // but should not appear in the Home slider.
  const homeProjects = projects.filter(
    (project) => project.id !== "chalukya-infra"
  );

  return (
    <>
      <main className="home-page">

        <HomeHeader />

        <HomeSlider projects={homeProjects} />

      </main>

      <FooterCTA />

      <Footer />
    </>
  );
}