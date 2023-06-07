// import React from "react";
// import { BsLinkedin, BsGithub } from "react-icons/bs";
// import { CgMail } from "react-icons/cg";

// const SocialLink = () => {
//   return (
//     <div className="social_links_container">
//       <a
//         href="https://www.linkedin.com/in/shivammchaudhary/"
//         target="blank"
//         id="contact-linkedin"
//       >
//         <BsLinkedin size={30} />
//       </a>
//       <a
//         href="https://github.com/shivammchaudhary1"
//         target="blank"
//         id="contact-github"
//       >
//         <BsGithub size={30} />
//       </a>
//       <a
//         href="mailto:shivamchaudhary75@gmail.com"
//         target="blank"
//         id="contact-email"
//       >
//         <CgMail size={40} />
//       </a>
//     </div>
//   );
// };

// export default SocialLink;

import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

const SocialLink = () => {
  return (
    <div className="social-links-container">
      <a
        href="https://www.linkedin.com/in/shivammchaudhary/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-linkedin"
      >
        <BsLinkedin size={30} />
      </a>
      <a
        href="https://github.com/shivammchaudhary1"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-github"
      >
        <BsGithub size={30} />
      </a>
      <a
        href="mailto:shivamchaudhary75@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-email"
      >
        <CgMail size={40} />
      </a>
    </div>
  );
};

export default SocialLink;
