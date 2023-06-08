import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Project = (props) => {
  const { name, description, images, skills, githubLink, liveLink } = props;

  return (
    <div className="singleProject project-card">
      <Carousel>
        {images.map((image, index) => (
          <div key={index} className="img">
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
      <h3 class="project-title">{name}</h3>
      <p className="discription_p project-description">{description}</p>
      <div className="tech_used project-tech-stack">
        {/* Tech Stacks: */}
        {skills.map((SkillIcon, index) => (
          <div key={index} className="skill_icon">
            <SkillIcon size="30" />
          </div>
        ))}
      </div>
      <div className="project_button_card">
        <a
          className="project-deployed-link"
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="live_button">Live</button>
        </a>
        <a
          className="project-github-link"
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="github_button">Github</button>
        </a>
      </div>
    </div>
  );
};

export default Project;
