import React from "react";
import "./Projects.css";
import Project from "./Project";

//skills
import { VscJson } from "react-icons/vsc";
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";
import {
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNpm,
  SiVercel,
  SiNetlify,
  SiGithub,
  SiPostman,
  SiFirebase,
  SiAdobephotoshop,
  SiTypescript,
  SiRedux,
  SiChakraui,
  SiOpenai,
  SiPython,
  SiMui,
  SiGoogle,
} from "react-icons/si";

//skills

//trip to heaven images
import tripToHeaven_Image1 from "../../assets/tripToHeaven (1).png";
import tripToHeaven_Image2 from "../../assets/tripToHeaven (2).png";
import tripToHeaven_Image3 from "../../assets/tripToHeaven (3).png";
import tripToHeaven_Image4 from "../../assets/tripToHeaven (4).png";
import tripToHeaven_Image5 from "../../assets/tripToHeaven (5).png";

//skincare images

import skinCare_Image1 from "../../assets/skinCare (1).png";
import skinCare_Image2 from "../../assets/skinCare (2).png";
import skinCare_Image3 from "../../assets/skinCare (3).png";
import skinCare_Image4 from "../../assets/skinCare (4).png";
import skinCare_Image5 from "../../assets/skinCare (5).png";

//Flawless Images

import flawless_Image1 from "../../assets/flawless_Image (1).png";
import flawless_Image2 from "../../assets/flawless_Image (2).png";
import flawless_Image3 from "../../assets/flawless_Image (3).png";
import flawless_Image4 from "../../assets/flawless_Image (4).png";
import flawless_Image5 from "../../assets/flawless_Image (5).png";

//sparkAmerica
import sparkAmerica_Image1 from "../../assets/sparkAmerica (1).png";
import sparkAmerica_Image2 from "../../assets/sparkAmerica (2).png";
import sparkAmerica_Image3 from "../../assets/sparkAmerica (3).png";
import sparkAmerica_Image4 from "../../assets/sparkAmerica (4).png";
import sparkAmerica_Image5 from "../../assets/sparkAmerica (5).png";

//EnterPrise Notion
import enterpriseNotion_Image1 from "../../assets/enterprise-notion-1.png";
import enterpriseNotion_Image2 from "../../assets/enterprise-notion-2.png";
import enterpriseNotion_Image3 from "../../assets/enterprise-notion-3.png";
import enterpriseNotion_Image4 from "../../assets/enterprise-notion-4.png";
import enterpriseNotion_Image5 from "../../assets/enterprise-notion-5.png";

// Career Explorer
import careerExplorer_Image1 from "../../assets/career-explorer-1.png";
import careerExplorer_Image2 from "../../assets/career-explorer-2.png";
import careerExplorer_Image3 from "../../assets/career-explorer-3.png";
import careerExplorer_Image4 from "../../assets/career-explorer-4.png";
import careerExplorer_Image5 from "../../assets/career-explorer-5.png";

let ProjectsDetails = [
  {
    name: "Career Explorer",
    description:
      "Career Explorer is an AI-powered career guidance platform that helps students identify suitable career paths through DISC personality tests, RAISEC interest profiling, and educational surveys to deliver personalized, data-driven recommendations.",
    images: [
      careerExplorer_Image1,
      careerExplorer_Image2,
      careerExplorer_Image3,
      careerExplorer_Image4,
      careerExplorer_Image5,
    ],
    skills: [
      FaReact,
      SiRedux,
      SiNodedotjs,
      SiMongodb,
      SiMui,
      SiOpenai,
      SiPython,
    ],
    githubLink: "https://github.com/shivammchaudhary1/career_explorer",
    liveLink: "https://careerexplorer.me",
  },
  {
    name: "Enterprise Notion",
    description:
      "A modern Notion-style document workspace with advanced AI capabilities for smarter document management and knowledge organization, featuring intelligent linking, auto-tagging, natural language search, rich text editing, multi-user support, and hierarchical organization—independently developed  with complete frontend and backend integration.",
    images: [
      enterpriseNotion_Image1,
      enterpriseNotion_Image2,
      enterpriseNotion_Image3,
      enterpriseNotion_Image4,
      enterpriseNotion_Image5,
    ],
    skills: [FaReact, SiMongodb, SiExpress, SiNodedotjs, SiMui, SiGoogle],
    githubLink: "https://github.com/shivammchaudhary1/enterprise-notion",
    liveLink: "https://enterprise-notion.vercel.app",
  },
  {
    name: "Trip to Heaven",
    description:
      "Trip to Heaven is an online hotel and flight booking website that draws inspiration from the renowned platform, Make My Trip. Developed as a collaborative team project, it was successfully executed within a remarkable timeframe of just five days.",
    images: [
      tripToHeaven_Image1,
      tripToHeaven_Image2,
      tripToHeaven_Image3,
      tripToHeaven_Image4,
      tripToHeaven_Image5,
    ],
    skills: [FaJsSquare, FaReact, SiRedux, SiChakraui, VscJson, SiFirebase],
    githubLink: "https://github.com/shivammchaudhary1/trip-to-heaven",
    liveLink: "https://hesitant-river-6235-nine.vercel.app/",
  },

  {
    name: "FlawLess",
    description:
      "Flawless is a beautiful and professional online e-commerce website for selling beauty and cosmetic products. It is an individual project inspired by Nykaa, and it aims to provide a seamless shopping experience for users.",
    images: [
      flawless_Image1,
      flawless_Image2,
      flawless_Image3,
      flawless_Image4,
      flawless_Image5,
    ],
    skills: [FaHtml5, FaCss3Alt, FaJsSquare, FaReact, VscJson, SiChakraui],
    githubLink: "https://github.com/shivammchaudhary1/flawless",
    liveLink: "https://flawless-theta.vercel.app/",
  },

  {
    name: "Skin Care",
    description:
      "Skin-Care is an esteemed online retailer offering a wide range of premium skincare, beauty, and cosmetic products sourced from renowned brands. Our meticulously crafted website, developed collaboratively, faithfully replicates the esteemed SkinStore.com. Remarkably completed within just five days, this achievement showcases our talented team's exceptional proficiency and dedication.",
    images: [
      skinCare_Image1,
      skinCare_Image2,
      skinCare_Image3,
      skinCare_Image4,
      skinCare_Image5,
    ],
    skills: [FaHtml5, FaCss3Alt, FaJsSquare, SiBootstrap],
    githubLink: "https://github.com/shivammchaudhary1/skin-care",
    liveLink: "https://skinstore-lemon.vercel.app/",
  },

  {
    name: "Spark America",
    description:
      "SparkAmerica is a fitness and wellness website in which they work with companies and organizations to help keep their employees healthy. My project aimed to replicate SparkAmerica.com using HTML, CSS, and JavaScript. The goal was to create a static website that closely resembled the functionality and appearance. I completed the project individually, within a tight timeframe of just five days",
    images: [
      sparkAmerica_Image1,
      sparkAmerica_Image2,
      sparkAmerica_Image3,
      sparkAmerica_Image4,
      sparkAmerica_Image5,
    ],
    skills: [FaHtml5, FaCss3Alt, FaJsSquare],
    githubLink: "https://github.com/shivammchaudhary1/spark_america-clone",
    liveLink: "https://spark-america-website-clone.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="project_container" id="projects">
      <h1>Projects</h1>
      <div className="project_sub-container">
        {ProjectsDetails.map((e) => (
          <Project
            name={e.name}
            description={e.description}
            images={e.images}
            skills={e.skills}
            githubLink={e.githubLink}
            liveLink={e.liveLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
