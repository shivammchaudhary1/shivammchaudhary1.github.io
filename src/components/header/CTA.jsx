import React from "react";
import resume from "../../assets/Shivam_Chaudhary_Resume.pdf";

export const CTA = () => {
  return (
    <div class="nav-link resume">
      <div className="cta">
        <a href={resume} download target="_blank">
          <button id="resume-button-1"> Resume</button>
        </a>
        <a href="#contact" id="connect" className="btn-primary">
          Let's connect
        </a>
      </div>
    </div>
  );
};
