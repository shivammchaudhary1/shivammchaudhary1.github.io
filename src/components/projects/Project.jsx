import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Project = (props) => {
  const { name, description, images, skills, githubLink, liveLink } = props;

  return (
    <div className="singleProject">
      <Carousel>
        {images.map((image, index) => (
          <div key={index} className="img">
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
      <h3>{name}</h3>
      <p className="discription_p">{description}</p>
      <div className="tech_used">
        {/* Tech Stacks: */}
        {skills.map((SkillIcon, index) => (
          <div key={index} className="skill_icon">
            <SkillIcon size="30" />
          </div>
        ))}
      </div>
      <div className="project_button_card">
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          <button className="live_button">Live</button>
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <button className="github_button">Github</button>
        </a>
      </div>
    </div>
  );
};

export default Project;
