import React, { useState } from "react";
import "./Navbar.css";
import Resume from "../../assets/Shivam_Chaudhary_Resume.pdf";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        id="nav-menu"
        className={`navbar_container_navItems ${isMenuOpen ? "menu-open" : ""}`}
      >
        <a href="#" class="nav-link home">
          HOME
        </a>
        <a href="#about" class="nav-link about">
          ABOUT
        </a>
        <a href="#skills" class="nav-link skills">
          SKILLS
        </a>
        <a href="#projects" class="nav-link projects">
          PROJECTS
        </a>
        <a href="#github">GITHUB</a>
        <a href="#contact" class="nav-link contact">
          CONTACT
        </a>
        <a onClick={openPDFInNewTab} class="nav-link resume">
          RESUME
        </a>
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
