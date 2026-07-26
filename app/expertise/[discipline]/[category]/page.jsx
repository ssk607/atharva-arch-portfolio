import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "@/app/data/project";

export default async function CategoryPage({ params }) {

    const { discipline, category } = await params;

    console.log("PARAMS:", { discipline, category });

    console.log("PROJECTS:", projects);

    const filteredProjects = projects.filter(
        (project) =>
            project.discipline === discipline &&
            project.category === category
    );

    console.log("FILTERED:", filteredProjects);

    if (!filteredProjects.length) {
        notFound();
    }

    const formatTitle = (text) =>
        text
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

    return (
        <>

            <div className="category-breadcrumb">

                <Link href="/">Home</Link>

                <span>/</span>

                <span>
                    {discipline
                        .replace(/-/g, " ")
                        .replace(/\b\w/g, c => c.toUpperCase())}
                </span>

                <span>/</span>

                <span>
                    {category
                        .replace(/-/g, " ")
                        .replace(/\b\w/g, c => c.toUpperCase())}
                </span>

            </div>
            <section className="category-hero">
                <h1>{formatTitle(category)}</h1>

                <p>{formatTitle(discipline)}</p>
            </section>

            <section className="category-grid">
                {filteredProjects.map((project) => (
                    <Link
                        key={project.id}
                        href={`/projects/${project.id}`}
                        className="category-card"
                    >
                        <img
                            src={project.cover}
                            alt={project.title}
                        />

                        <div className="category-content">
                            <h2>{project.title}</h2>

                            <p>{project.location}</p>
                        </div>
                    </Link>
                ))}
            </section>
        </>
    );
}