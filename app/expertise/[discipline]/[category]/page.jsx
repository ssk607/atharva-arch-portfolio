import Link from "next/link";
import { notFound } from "next/navigation";

import HomeHeader from "@/components/Header/HomeHeader";
import Footer from "@/components/Footer/Footer";
import FooterCTA from "@/components/Footer/FooterCTA";

import projects from "@/app/data/project";

export default async function CategoryPage({ params }) {
    const { discipline, category } = await params;

    const filteredProjects = projects.filter(
        (project) =>
            project.discipline.slug === discipline &&
            project.category.slug === category
    );

    if (filteredProjects.length === 0) {
        notFound();
    }

    const pageTitle = filteredProjects[0].category.title;
    const disciplineTitle = filteredProjects[0].discipline.title;

    return (
        <>
            <HomeHeader />

            <section className="category-page">

                <div className="category-header">

                    <nav className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>

                        <span>{disciplineTitle}</span>

                        <span>/</span>

                        <span>{pageTitle}</span>
                    </nav>

                    <p className="category-label">
                        {disciplineTitle}
                    </p>

                    <h1>{pageTitle}</h1>

                </div>

                <div className="projects-grid">

                    {filteredProjects.map((project) => (

                        <Link
                            key={project.id}
                            href={`/projects/${project.id}`}
                            className="project-card"
                        >

                            <img
                                src={project.cover}
                                alt={project.title}
                            />

                            <div className="project-card-content">

                                <h3>{project.title}</h3>

                                <p>{project.location}</p>

                            </div>

                        </Link>

                    ))}

                </div>

            </section>

            <FooterCTA />

            <Footer />
        </>
    );
}