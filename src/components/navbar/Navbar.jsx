// import React from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <div className="paa">
//       <div className="navbar_container">
//         <div className="navbar_container_logo">SKC</div>
//         <div className="navbar_container_navItems">
//           <a href="">HOME</a>
//           <a href="">ABOUT</a>
//           <a href="">SKILLS</a>
//           <a href="">PROJECTS</a>
//           <a href="">GITHUB</a>
//           <a href="">CONTACT</a>
//           <a href="">RESUME</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// navbar.jsx;
import React, { useState } from "react";
import "./Navbar.css";
import Resume from "../../assets/Shivam_Chaudhary_Resume.pdf";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#");

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar_container ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="navbar_container_logo">SKC</div>
      <div
        className={`navbar_container_navItems ${isMenuOpen ? "menu-open" : ""}`}
      >
        <a href="#" onClick={() => setActiveNav("#")}>
          HOME
        </a>
        <a href="#about" onClick={() => setActiveNav("#about")}>
          ABOUT
        </a>
        <a href="#skills" onClick={() => setActiveNav("#skills")}>
          SKILLS
        </a>
        <a href="#projects" onClick={() => setActiveNav("#projects")}>
          PROJECTS
        </a>
        <a href="#github" onClick={() => setActiveNav("#github")}>
          GITHUB
        </a>
        <a href="#contact" onClick={() => setActiveNav("#contact")}>
          CONTACT
        </a>
        <a onClick={openPDFInNewTab}>RESUME</a>
      </div>
      <div
        className={`navbar_hamburger ${isMenuOpen ? "menu-open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="navbar_hamburger_line"></div>
        <div className="navbar_hamburger_line"></div>
        <div className="navbar_hamburger_line"></div>
      </div>
    </div>
  );
};

export default Navbar;
