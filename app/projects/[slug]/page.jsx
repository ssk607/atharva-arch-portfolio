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
        location={project.location}
        year={project.year}
        status={project.status}
      />

      <Gallery images={project.images} />
    </>
  );
}