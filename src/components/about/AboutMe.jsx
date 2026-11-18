import { aboutMePicNew } from "../../assets/assets";
import "./AboutMe.css";
import ResumeLink from "../shared/ResumeLink";

const AboutMe = () => {
  return (
    <div className="aboutme_container about section" id="about">
      <p className="section-eyebrow">Get to know</p>
      <h2>About Me</h2>
      <div className="aboutme_details">
        <div className="about__me">
          <div className="aboutme_image">
            <img
              width="400"
              height="400"
              loading="lazy"
              decoding="async"
              src={aboutMePicNew}
              alt="Shivam Chaudhary"
            />
          </div>
        </div>
        <div className="aboutme_content">
          <p id="user-detail-intro">
            I'm a full-stack developer with professional experience building
            production web applications, client platforms and practical AI
            integrations. My work spans React and Next.js frontends, Node.js
            backends, PHP application modernization, MongoDB, cloud deployment
            and responsive user interfaces. I enjoy translating complex
            requirements into maintainable software — from architecture through
            delivery.
          </p>
          <div className="about_button_container">
            <a href="#contact" className="primary-button-two">
              Let's Connect
            </a>

            <ResumeLink id="resume-button-2" className="primary-button-one" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
