import ResumeLink from "../shared/ResumeLink";

const HeaderButton = () => (
  <div className="header-button-container">
    <ResumeLink id="resume-button-1" className="primary-button-one" />
    <a href="#contact" className="primary-button-two">
      Let's Connect
    </a>
  </div>
);

export default HeaderButton;
