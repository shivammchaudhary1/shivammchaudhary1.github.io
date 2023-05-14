import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

export const HeaderSocial = () => {
  return (
    <div>
      <div className="header__social">
        <a
          href="https://www.linkedin.com/in/shivammchaudhary/"
          target="blank"
          id="contact-linkedin"
        >
          <BsLinkedin size={30} />
        </a>
        <a
          href="https://github.com/shivammchaudhary1"
          target="blank"
          id="contact-github"
        >
          {" "}
          <BsGithub size={30} />{" "}
        </a>
        <a
          href="mailto:shivamchaudhary75@gmail.com"
          target="blank"
          id="contact-email"
        >
          {" "}
          <CgMail size={40} />{" "}
        </a>
      </div>
    </div>
  );
};
