// import React from "react";
// import Resume from "../../assets/Shivam_Chaudhary_Resume.pdf";

// const HeaderButton = () => {
//   return (
//     <div className="header_button_container">
//       <button className="primary_button_one">Resume</button>
//       <button className="primary_button_two">Let's Connect</button>
//     </div>
//   );
// };

// export default HeaderButton;

// import React from "react";
// import Resume from "../../assets/Shivam_Chaudhary_Resume.pdf";

// const HeaderButton = () => {
//   return (
//     <div className="header-button-container">
//       <a href={Resume} download target="_blank">
//         <button className="primary-button-one">Resume</button>
//       </a>
//       <a href="#contact">
//         <button className="primary-button-two">Let's Connect</button>
//       </a>
//     </div>
//   );
// };

// export default HeaderButton;

import React from "react";
import Resume from "../../assets/Shivam_Chaudhary_Resume.pdf";

const HeaderButton = () => {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Shivam_Chaudhary_Resume.pdf";
    link.click();
  };

  const openPDFInNewTab = (event) => {
    event.preventDefault();
    window.open(Resume, "_blank");
    downloadPDF();
  };

  return (
    <div className="header-button-container">
      <button
        id="resume-button-1"
        className="primary-button-one"
        onClick={openPDFInNewTab}
      >
        Resume
      </button>
      <a href="#contact">
        <button className="primary-button-two">Let's Connect</button>
      </a>
    </div>
  );
};

export default HeaderButton;
