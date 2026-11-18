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
          <p className="about-experience-label">3 Years of Professional Experience</p>
          <p id="user-detail-intro">
            I have 3 years of experience as a MERN Stack Developer, building
            dependable, user-focused applications with MongoDB, Express.js,
            React and Node.js. I turn complex ideas into responsive interfaces,
            scalable backend APIs and production-ready web applications,
            from database design through deployment.
          </p>
          <p className="about-supporting-text">
            My professional work includes building full-stack web platforms,
            mobile experiences, AI-assisted products and content-managed client
            websites. I enjoy owning features end to end, collaborating with
            teams, and shipping clean, maintainable solutions that solve real
            problems.
          </p>
          <div className="about-specialties" aria-label="Primary areas of expertise">
            <span>MERN Stack Development</span>
            <span>AI Integrations</span>
            <span>Cloud & Deployment</span>
          </div>
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
