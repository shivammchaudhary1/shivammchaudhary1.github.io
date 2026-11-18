import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import ResumeLink from "../shared/ResumeLink";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuButton = useRef(null);
  const navigation = useRef(null);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const handleOutsideClick = (event) => {
      if (!navigation.current?.contains(event.target)) setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    document.addEventListener("pointerdown", handleOutsideClick);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <nav
      ref={navigation}
      aria-label="Main navigation"
      className={`navbar_container ${isMenuOpen ? "menu-open" : ""}`}
    >
      <a
        href="#home"
        className="navbar_container_logo"
        aria-label="Shivam Chaudhary home"
        onClick={closeMenu}
      >
        SKC
      </a>
      <div
        id="nav-menu"
        className={`navbar_container_navItems ${isMenuOpen ? "menu-open" : ""}`}
        onClick={closeMenu}
      >
        <a href="#home" className="nav-link home">
          HOME
        </a>
        <a href="#featured" className="nav-link featured">
          FEATURED
        </a>
        <a href="#about" className="nav-link about">
          ABOUT
        </a>
        <a href="#experience" className="nav-link experience">
          EXPERIENCE
        </a>
        <a href="#skills" className="nav-link skills">
          SKILLS
        </a>
        <a href="#projects" className="nav-link projects">
          PROJECTS
        </a>
        <a href="#certifications" className="nav-link certifications">
          CERTIFICATIONS
        </a>
        <a href="#contact" className="nav-link contact">
          CONTACT
        </a>
        <ResumeLink className="nav-link resume">RESUME</ResumeLink>
      </div>
      <button
        type="button"
        ref={menuButton}
        aria-label={
          isMenuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        aria-expanded={isMenuOpen}
        aria-controls="nav-menu"
        className={`navbar_hamburger ${isMenuOpen ? "menu-open" : ""}`}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span className="navbar_hamburger_line" aria-hidden="true"></span>
        <span className="navbar_hamburger_line" aria-hidden="true"></span>
        <span className="navbar_hamburger_line" aria-hidden="true"></span>
      </button>
    </nav>
  );
};

export default Navbar;
