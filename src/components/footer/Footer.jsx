import SocialLink from "../header/SocialLink";
import "./footer.css";

const Footer = () => (
  <footer className="footer_container">
    <div className="semi_container">
      <p>© {new Date().getFullYear()} Shivam Chaudhary | All Rights Reserved</p>
      <SocialLink />
    </div>
  </footer>
);

export default Footer;
