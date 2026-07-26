import { notFound } from "next/navigation";
import Link from "next/link";

import HomeHeader from "@/components/Header/HomeHeader";
import ProjectHeader from "@/components/Project/ProjectHeader";
import MasonryGallery from "@/components/Gallery/MasonryGallery";
import ProjectNavigation from "@/components/Project/ProjectNavigation";
import FooterCTA from "@/components/Footer/FooterCTA";
import Footer from "@/components/Footer/Footer";

import projects from "@/app/data/project";

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects.find((item) => item.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <HomeHeader />

      <section className="project-page">

        <nav className="breadcrumb">

          <Link href="/">Home</Link>

          <span>/</span>

          <Link
            href={`/expertise/${project.discipline.slug}/${project.category.slug}`}
          >
            {project.category.title}
          </Link>

          <span>/</span>

          <span>{project.title}</span>

        </nav>

        <ProjectHeader project={project} />

        <section className="project-description">

          <div className="container">

            <p>{project.description}</p>

          </div>

        </section>

        <MasonryGallery images={project.images} />

        <ProjectNavigation
          currentProject={project}
        />

      </section>

      <FooterCTA />

      <Footer />
    </>
  );
}