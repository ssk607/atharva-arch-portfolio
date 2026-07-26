import HomeHeader from "@/components/Header/HomeHeader";
import HomeSlider from "@/components/Home/HomeSlider";
import FooterCTA from "@/components/Footer/FooterCTA";
import Footer from "@/components/Footer/Footer";

import projects from "./data/project";

export default function Home() {
  return (
    <>
      <main className="home-page">

        <HomeHeader />

        <HomeSlider projects={projects} />

      </main>

      <FooterCTA />

      <Footer />
    </>
  );
}