import ProjectGallery from "../shared/ProjectGallery";

const Project = (props) => {
  const { name, description, images, skills, githubLink, liveLink } = props;
  return (
    <article className="singleProject project-card">
      <ProjectGallery name={name} images={images} />
      <h4 className="project-title">{name}</h4>
      <p className="discription_p project-description">{description}</p>
      <div className="tech_used project-tech-stack">
        {/* Tech Stacks: */}
        {skills.map(({ icon: SkillIcon, label }) => (
          <div key={label} className="skill_icon" title={label}>
            <SkillIcon size="30" aria-hidden="true" />
            <span className="sr-only">{label}</span>
          </div>
        ))}
      </div>
      <div className="project_button_card">
        <a
          className="project-deployed-link live_button"
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live
        </a>
        <a
          className="project-github-link github_button"
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </article>
  );
};

export default Project;
