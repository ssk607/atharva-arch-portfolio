import Gallery from "@/components/Gallery";
import ProjectHeader from "@/components/ProjectHeader";
import projects from "@/app/data/project";
import { notFound } from "next/navigation";

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  console.log("Slug:", slug);

  const project = projects.find((p) => p.id === slug);

  console.log("Project:", project);

  if (!project) {
    notFound();
  }

  return (
    <>

      <ProjectHeader
        title={project.title}
        category={project.category}
        client={project.client}
        location={project.location}
        area={project.area}
        year={project.year}
        status={project.status}
        services={project.services}
      />

      <section className="project-description">

        <div className="container">

          <p>{project.description}</p>

        </div>

      </section>

      <Gallery
        images={project.images}
      />

    </>
  );
}