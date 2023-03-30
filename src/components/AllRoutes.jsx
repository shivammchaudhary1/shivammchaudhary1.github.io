import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import ContactMe from "../pages/ContactMe";
import Github from "../pages/Github";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="contact" element={<ContactMe />} />
        <Route path="github" element={<Github />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
