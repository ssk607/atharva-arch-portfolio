export default function ProjectHeader({ project }) {
  return (
    <section className="project-header">
      <div className="project-header-inner">

        <p className="project-category">
          {project.category.title.toUpperCase()}
        </p>

        <h1 className="project-title">
          {project.title}
        </h1>

        <div className="project-meta">

          <div>
            <h4>Client</h4>
            <p>{project.client}</p>
          </div>

          <div>
            <h4>Location</h4>
            <p>{project.location}</p>
          </div>

          <div>
            <h4>Area</h4>
            <p>{project.area}</p>
          </div>

          <div>
            <h4>Year</h4>
            <p>{project.year}</p>
          </div>

          <div>
            <h4>Status</h4>
            <p>{project.status}</p>
          </div>

          <div>
            <h4>Services</h4>
            <p>{project.services.join(", ")}</p>
          </div>

        </div>

      </div>
    </section>
  );
}