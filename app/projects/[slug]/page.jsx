import { notFound } from "next/navigation";

import projects from "@/app/data/project";

import ProjectNavigation from "@/components/Project/ProjectNavigation";

import ProjectHeader from "@/components/Project/ProjectHeader";

import MasonryGallery from "@/components/Gallery/MasonryGallery";

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