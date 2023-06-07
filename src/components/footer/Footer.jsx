import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="semi_container">
        <div>
          <span className="copyright">©</span> 2023 Shivam Chaudhary | All
          Rights Reserved
        </div>
        <div className="social_icons">
          <div>
            <a
              href="https://www.linkedin.com/in/shivammchaudhary/"
              target="blank"
            >
              <BsLinkedin size={30} />
            </a>
          </div>{" "}
          <div>
            <a href="https://github.com/shivammchaudhary1" target="blank">
              <BsGithub size={30} />
            </a>
          </div>{" "}
          <div>
            <a href="mailto:shivamchaudhary75@gmail.com" target="blank">
              <CgMail size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
