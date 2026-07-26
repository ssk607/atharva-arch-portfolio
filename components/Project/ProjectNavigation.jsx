import Link from "next/link";
import projects from "@/app/data/project";

export default function ProjectNavigation({ currentProject }) {
    const filteredProjects = projects.filter(
        (project) =>
            project.discipline.slug === currentProject.discipline.slug &&
            project.category.slug === currentProject.category.slug
    );

    const currentIndex = filteredProjects.findIndex(
        (project) => project.id === currentProject.id
    );

    const previous =
        currentIndex > 0
            ? filteredProjects[currentIndex - 1]
            : null;

    const next =
        currentIndex < filteredProjects.length - 1
            ? filteredProjects[currentIndex + 1]
            : null;

    return (
        <section className="project-navigation">
            {previous ? (
                <Link
                    href={`/projects/${previous.id}`}
                    className="project-nav-card"
                >
                    <span>← Previous Project</span>

                    <h3>{previous.title}</h3>

                    <p>{previous.category.title}</p>
                </Link>
            ) : (
                <div />
            )}

            {next ? (
                <Link
                    href={`/projects/${next.id}`}
                    className="project-nav-card right"
                >
                    <span>Next Project →</span>

                    <h3>{next.title}</h3>

                    <p>{next.category.title}</p>
                </Link>
            ) : (
                <div />
            )}
        </section>
    );
}