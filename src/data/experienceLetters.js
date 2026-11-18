import americanChase from "../assets/experience/american-chase.jpg";
import americanChasePreview from "../assets/experience/american-chase-preview.jpg";
import askus from "../assets/experience/askus-studio.jpg";
import askusPreview from "../assets/experience/askus-studio-preview.jpg";
import wlc from "../assets/experience/wlc-technology.jpg";
import wlcPreview from "../assets/experience/wlc-technology-preview.jpg";

export const experienceLetters = [
  {
    companyId: "american-chase",
    company: "American Chase",
    role: "Full Stack Developer",
    type: "Relieving & Experience Letter",
    start: "2026-01-26",
    startLabel: "26 Jan 2026",
    end: "2026-08-27",
    endLabel: "27 Aug 2026",
    issued: "2026-10-08",
    issuedLabel: "8 October 2026",
    summary:
      "Recognizes my work as a Full Stack Developer and confirms the completion of my tenure with American Chase LLP.",
    image: {
      src: americanChase,
      previewSrc: americanChasePreview,
      width: 1414,
      height: 2000,
    },
  },
  {
    companyId: "askus-studio",
    company: "Askus Studio",
    role: "Full Stack Developer · Contract",
    type: "Experience Letter",
    start: "2025-07-15",
    startLabel: "15 Jul 2025",
    end: "2026-01-15",
    endLabel: "15 Jan 2026",
    issued: "2026-01-18",
    issuedLabel: "18 January 2026",
    summary:
      "Documents my project-based engagement across frontend and backend development, technical problem solving, and delivery of web applications.",
    image: {
      src: askus,
      previewSrc: askusPreview,
      width: 1415,
      height: 2000,
    },
  },
  {
    companyId: "wlc-technology",
    company: "WLC Technology",
    role: "Software Developer",
    type: "Experience Letter",
    start: "2023-08-28",
    startLabel: "28 Aug 2023",
    end: "2025-07-08",
    endLabel: "8 Jul 2025",
    issued: "2025-07-16",
    issuedLabel: "16 July 2025",
    summary:
      "Highlights frontend and backend product development, testing, AWS EC2 deployments, debugging, Git practices, and client communication.",
    image: {
      src: wlc,
      previewSrc: wlcPreview,
      width: 1416,
      height: 2000,
    },
  },
];
