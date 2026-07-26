import { notFound } from "next/navigation";

import projects from "@/app/data/project";

import ProjectHeader from "@/components/ProjectHeader";

import Gallery from "@/components/Gallery";

export default async function ProjectPage({ params }) {

  const { slug } = await params;

  const project = projects.find(
    p => p.id === slug
  );

  if (!project) {
    notFound();
  }

  console.log("PROJECT:", project);
  console.log("IMAGES:", project.images);

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

      <Gallery images={project.images} />

    </>
  );
}