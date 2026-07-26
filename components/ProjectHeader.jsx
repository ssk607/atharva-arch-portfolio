export default function ProjectHeader({
  title,
  category,
  client,
  location,
  area,
  year,
  status,
  services,
}) {
  return (
    <section className="project-header">

      <div className="project-header-content">

        <p className="project-category">
          {category}
        </p>

        <h1>{title}</h1>

        <div className="project-grid">

          <div>
            <h4>Client</h4>
            <p>{client}</p>
          </div>

          <div>
            <h4>Location</h4>
            <p>{location}</p>
          </div>

          <div>
            <h4>Area</h4>
            <p>{area}</p>
          </div>

          <div>
            <h4>Year</h4>
            <p>{year}</p>
          </div>

          <div>
            <h4>Status</h4>
            <p>{status}</p>
          </div>

          <div>
            <h4>Services</h4>
            <p>{services?.join(", ") || "Architectural Design"}</p>
          </div>

        </div>

      </div>

    </section>
  );
}