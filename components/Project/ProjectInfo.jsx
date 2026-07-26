import "./project.css";

export default function ProjectInfo({ project }) {

    return (

        <section className="project-info-section">

            <div className="project-description">

                <h2>Project Overview</h2>

                <p>{project.description}</p>

            </div>

            <aside className="project-information">

                <h3>Project Information</h3>

                <div className="info-row">
                    <span>Category</span>
                    <strong>{project.category}</strong>
                </div>

                <div className="info-row">
                    <span>Location</span>
                    <strong>{project.location}</strong>
                </div>

                <div className="info-row">
                    <span>Client</span>
                    <strong>{project.client}</strong>
                </div>

                <div className="info-row">
                    <span>Year</span>
                    <strong>{project.year}</strong>
                </div>

                <div className="info-row">
                    <span>Area</span>
                    <strong>{project.area}</strong>
                </div>

                <div className="info-row">
                    <span>Status</span>
                    <strong>{project.status}</strong>
                </div>

                <div className="info-row">
                    <span>Services</span>

                    <strong>
                        {project.services?.join(", ") || "-"}
                    </strong>

                </div>

            </aside>

        </section>

    );

}