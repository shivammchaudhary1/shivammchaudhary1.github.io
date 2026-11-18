import { profileImage } from "../../assets/assets";
import "./header.css";
import HeaderButton from "./HeaderButton";
import SocialLink from "./SocialLink";

const Header = () => (
  <header className="header-container" id="home">
    <div className="hero-content">
      <p className="hero-eyebrow">FULL STACK DEVELOPER · PRODUCTION APPLICATIONS</p>
      <p className="header-hello">Hello, I'm</p>
      <h1 className="header-name" id="user-detail-name">Shivam Kumar Chaudhary</h1>
      <p className="header-designation">Full Stack Developer <span className="hero-designation-separator">·</span> React, Node.js, Express, MongoDB and AI</p>
      <p className="hero-description">
        I build scalable web applications and practical AI-powered products —
        from frontend experiences and backend APIs to cloud deployment and
        application modernization.
      </p>
      <HeaderButton />
      <SocialLink withIds />
    </div>
    <div className="hero-visual">
      <div className="hero-image-frame">
        <img
          className="home-img"
          width="510"
          height="510"
          fetchPriority="high"
          decoding="async"
          src={profileImage}
          alt="Portrait of Shivam Kumar Chaudhary"
        />
      </div>
      <p className="hero-caption">Turning ideas into reliable software.</p>
    </div>
  </header>
);

export default Header;
