import { RiOpenaiFill } from "react-icons/ri";
import {
  tripToHeaven_Image1,
  tripToHeaven_Image2,
  tripToHeaven_Image3,
  tripToHeaven_Image4,
  tripToHeaven_Image5,
  skinCare_Image1,
  skinCare_Image2,
  skinCare_Image3,
  skinCare_Image4,
  skinCare_Image5,
  flawless_Image1,
  flawless_Image2,
  flawless_Image3,
  flawless_Image4,
  flawless_Image5,
  sparkAmerica_Image1,
  sparkAmerica_Image2,
  sparkAmerica_Image3,
  sparkAmerica_Image4,
  sparkAmerica_Image5,
  enterpriseNotion_Image1,
  enterpriseNotion_Image2,
  enterpriseNotion_Image3,
  enterpriseNotion_Image4,
  enterpriseNotion_Image5,
  careerExplorer_Image1,
  careerExplorer_Image2,
  careerExplorer_Image3,
  careerExplorer_Image4,
  careerExplorer_Image5,
} from "../../data/projectMedia";
import "./Projects.css";
import Project from "./Project";
import CompanyProjects from "./CompanyProjects";

import { VscJson } from "react-icons/vsc";
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";
import {
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiRedux,
  SiChakraui,
  SiPython,
  SiMui,
  SiGoogle,
} from "react-icons/si";

const technologyNames = new Map([
  [VscJson, "JSON"],
  [FaCss3Alt, "CSS"],
  [FaHtml5, "HTML"],
  [FaJsSquare, "JavaScript"],
  [FaReact, "React"],
  [SiBootstrap, "Bootstrap"],
  [SiNodedotjs, "Node.js"],
  [SiExpress, "Express"],
  [SiMongodb, "MongoDB"],
  [SiFirebase, "Firebase"],
  [SiRedux, "Redux"],
  [SiChakraui, "Chakra UI"],
  [RiOpenaiFill, "OpenAI"],
  [SiPython, "Python"],
  [SiMui, "Material UI"],
  [SiGoogle, "Google"],
]);

const ProjectsDetails = [
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
      RiOpenaiFill,
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
      <h2>Projects</h2>
      <CompanyProjects />
      <div className="existing-projects-header" id="existing-projects">
        <h3>More projects</h3>
      </div>
      <div className="project_sub-container">
        {ProjectsDetails.map((e) => (
          <Project
            key={e.githubLink}
            name={e.name}
            description={e.description}
            images={e.images}
            skills={e.skills.map((icon) => ({
              icon,
              label: technologyNames.get(icon),
            }))}
            githubLink={e.githubLink}
            liveLink={e.liveLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
