import "./header.css";
import HeaderButton from "./HeaderButton";
import SocialLink from "./SocialLink";
import ProfileImage from "../../assets/Shivam_Chaudhary.webp";

const Header = () => {
  return (
    <div className="header-container" id="home">
      <p className="header-hello">Hello, I'm</p>
      <h1 className="header-name" id="user-detail-name">
        Shivam Kumar Chaudhary
      </h1>
      <p className="header-designation">Full Stack Developer</p>
      <HeaderButton />
      <SocialLink withIds />
      <div>
        <img
          className="home-img"
          width="510"
          height="510"
          fetchPriority="high"
          decoding="async"
          src={ProfileImage}
          alt="Shivam Chaudhary"
        />
      </div>
    </div>
  );
};

export default Header;
