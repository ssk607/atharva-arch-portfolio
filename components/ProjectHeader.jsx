import Link from "next/link";

export default function ProjectHeader({
    title,
    location,
    year,
    status
}) {

    return (

        <header className="project-header">

            <Link href="/" className="back-link">
                ← Back to Projects
            </Link>

            <div>
                <h1>{title}</h1>

                <p>
                    {location} | {year} | {status}
                </p>

            </div>

        </header>

    );

}