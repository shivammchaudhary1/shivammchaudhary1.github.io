import ResumeLink from "../shared/ResumeLink";

const HeaderButton = () => (
  <div className="header-button-container">
    <a href="#featured" className="primary-button-one">View Featured Work</a>
    <a href="#contact" className="primary-button-two">Let's Connect</a>
    <ResumeLink id="resume-button-1" className="hero-resume-link">View Resume ↗</ResumeLink>
  </div>
);

export default HeaderButton;
