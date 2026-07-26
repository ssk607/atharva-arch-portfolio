import { notFound } from "next/navigation";

import projects from "@/app/data/project";

import ProjectHeader from "@/components/ProjectHeader";

import MasonryGallery from "@/components/MasonryGallery";

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

      <ProjectHeader project={project} />

      <MasonryGallery images={project.images} />

      <ProjectNavigation currentProject={project} />

    </>
  );
}