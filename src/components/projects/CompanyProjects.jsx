import { FiArrowUpRight, FiFileText, FiGithub } from "react-icons/fi";
import { companyProjects } from "../../data/companyProjects";
import ProjectGallery from "../shared/ProjectGallery";
import "./CompanyProjects.css";

const CompanyProjects = ({ showMore = true }) => (
  <div className="company-projects">
    <p className="company-projects-intro">
      A selection of client and product work, grouped by company.
    </p>
    <nav className="company-projects-nav" aria-label="Project groups">
      {companyProjects.map((company) => (
        <a key={company.id} href={`#${company.id}-projects`}>
          {company.name}
        </a>
      ))}
      {showMore && <a href="#existing-projects">More projects</a>}
    </nav>

    {companyProjects.map((company, index) => (
      <section
        key={company.id}
        id={`${company.id}-projects`}
        className="company-project-group"
        aria-labelledby={`${company.id}-heading`}
      >
        <header className="company-project-group-header">
          <span className="company-project-number" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="company-project-company">
            <p>Professional work</p>
            <h3 id={`${company.id}-heading`}>{company.name}</h3>
          </div>
          <div className="company-project-header-actions">
            {(
              <a
                className="company-experience-link"
                href={`#${company.id}-experience`}
                aria-label={`View ${company.name} experience`}
              >
                <FiFileText aria-hidden="true" /> View role details
              </a>
            )}
            <span className="company-project-count">
              {company.projects.length} projects
            </span>
          </div>
        </header>
        <div className="company-project-grid">
          {company.projects.map((project) => (
            <article
              key={project.id}
              className="company-project-card"
              aria-labelledby={`${company.id}-${project.id}-title`}
            >
              <ProjectGallery
                name={project.name}
                images={project.images}
                aspectRatio="16 / 10"
              />
              <p className="company-project-category">{project.category}</p>
              <h4 id={`${company.id}-${project.id}-title`}>{project.name}</h4>
              <p className="company-project-description">
                {project.description}
              </p>
              <ul
                className="company-project-focus"
                aria-label={`${project.name} contribution areas`}
              >
                {project.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="company-project-details">
                <h5>Roles &amp; Responsibilities</h5>
                <ul className="company-project-responsibilities">
                  {project.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </div>
              <div className="company-project-details">
                <h5>Tech Stack</h5>
                <ul
                  className="company-project-stack"
                  aria-label={`${project.name} tech stack`}
                >
                  {project.techStack.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
              <div className="company-project-actions">
                {project.url && (
                  <a
                    className="company-project-link"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.linkLabel || "Visit website"}: ${project.name} (opens in a new tab)`}
                  >
                    {project.linkLabel || "Visit website"}
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    className="company-project-link"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub source: ${project.name} (opens in a new tab)`}
                  >
                    <FiGithub aria-hidden="true" /> GitHub
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    ))}
  </div>
);

export default CompanyProjects;
