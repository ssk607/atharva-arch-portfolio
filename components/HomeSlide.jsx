import Link from "next/link";

export default function HomeSlide({ project }) {

    return (

        <Link
            href={`/projects/${project.id}`}
            className="home-slide"
        >

            <img
                src={project.cover}
                alt={project.title}
            />

            <div className="slide-details">

                <h2>{project.title}</h2>

                <p>{project.location}</p>

                <span className="view-project">
                    View Project →
                </span>

            </div>

        </Link>

    );

}