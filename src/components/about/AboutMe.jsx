import React from "react";
import "./AboutMe.css";
import aboutMePic from "../../assets/aboutMePic.jpg";
import Resume from "../../assets/Shivam_Chaudhary_Resume.pdf";

const AboutMe = () => {
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
    <div className="aboutme_container" id="about">
      <h4>Get to know</h4>
      <h1>About Me</h1>
      <div className="aboutme_details">
        <div className="about__me">
          <div className="aboutme_image">
            <img width="100%" src={aboutMePic} alt="Shivam Chaudhary" />
          </div>
        </div>
        <div className="aboutme_content">
          <p>
            As a front-end developer, creating engaging, responsive, and
            accessible user interfaces using modern web technologies. Good
            knowledge of HTML, CSS, JavaScript, and frameworks such as React.
            Ensuring compatibility with different browsers and devices, and
            staying up-to-date with the latest front- end development trends and
            techniques.
          </p>
          <div className="about_button_container">
            <a href="#contact">
              <button className="primary_button_two ">Let's Connect</button>
            </a>
            <a onClick={openPDFInNewTab}>
              <button className="primary_button_one">Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

// import React from "react";
// import "./AboutMe.css";
// import aboutMePic from "../../assets/aboutMePic.jpg";

// const AboutMe = () => {
//   return (
//     <div className="aboutme-container">
//       <h4>Get to know</h4>
//       <h1>About Me</h1>
//       <div className="aboutme-details">
//         <div className="aboutme-image">
//           <img width="100%" src={aboutMePic} alt="Shivam Chaudhary" />
//         </div>
//         <div className="aboutme-content">
//           <p>
//             As a front-end developer, creating engaging, responsive, and
//             accessible user interfaces using modern web technologies. Good
//             knowledge of HTML, CSS, JavaScript, and frameworks such as React.
//             Ensuring compatibility with different browsers and devices, and
//             staying up-to-date with the latest front-end development trends and
//             techniques.
//           </p>
//           <div className="about-button-container">
//             <button className="primary-button-two">Let's Connect</button>
//             <button className="primary-button-one">Resume</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;
// export default AboutMe;
