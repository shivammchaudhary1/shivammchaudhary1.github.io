import { BsLinkedin, BsGithub } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

const SocialLink = ({ withIds = false }) => {
  return (
    <div className="social-links-container">
      <a
        href="https://www.linkedin.com/in/shivammchaudhary/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className="contact-linkedin"
        id={withIds ? "contact-linkedin" : undefined}
      >
        <BsLinkedin size={30} />
      </a>
      <a
        href="https://github.com/shivammchaudhary1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className="contact-github"
        id={withIds ? "contact-github" : undefined}
      >
        <BsGithub size={30} />
      </a>
      <a
        href="mailto:shivamchaudhary75@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email Shivam"
        className="contact-email"
      >
        <CgMail size={40} />
      </a>
    </div>
  );
};

export default SocialLink;
