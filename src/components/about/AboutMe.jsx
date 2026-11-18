import "./AboutMe.css";
import aboutMePic from "../../assets/aboutMePic.webp";
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
              width="720"
              height="720"
              loading="lazy"
              decoding="async"
              src={aboutMePic}
              alt="Shivam Chaudhary"
            />
          </div>
        </div>
        <div className="aboutme_content">
          <p id="user-detail-intro">
            MERN Stack Developer with a proven track record of delivering
            robust, scalable, and user-centric web applications. Experienced in
            building full-stack solutions using React, Node.js, Express, and
            MongoDB, with a strong focus on performance, security, and clean
            architecture. Adept at integrating AI capabilities to enhance
            product functionality and deploying production-ready applications on
            AWS. Committed to writing maintainable code and creating seamless
            digital experiences across platforms.
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
