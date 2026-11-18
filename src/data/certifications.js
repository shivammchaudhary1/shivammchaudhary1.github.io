import foundations from "../assets/certifications/full-stack-foundations.webp";
import promptEngineer from "../assets/certifications/prompt-engineer.webp";
import webDevelopment from "../assets/certifications/web-development.webp";
import zoomMarathon from "../assets/certifications/zoom-marathon.webp";

export const certifications = [
  {
    id: "full-stack-foundations",
    title: "Full Stack Development Foundations",
    issuer: "American Chase",
    date: "2026-07-31",
    dateLabel: "31 July 2026",
    description:
      "Completed the Full Stack Development Foundations course, strengthening the foundations behind my frontend and backend development work.",
    url: "https://drive.google.com/file/d/1-LD1egRKQIL4wwrpJ1UjBlw3secijFhL/view",
    image: { src: foundations, width: 1600, height: 1131 },
  },
  {
    id: "prompt-engineer",
    title: "Certified Prompt Engineer",
    issuer: "Masai",
    description:
      "Earned Masai’s Prompt Engineering accreditation through its Generative AI course, covering the use of prompts to learn new technologies, build projects, and add generative AI capabilities to web applications.",
    url: "https://drive.google.com/file/d/1QBz1-iZ0IBK_I7Mtb1HJbzhTr2uB3EBs/view",
    image: { src: promptEngineer, width: 1600, height: 972 },
  },
  {
    id: "web-development",
    title: "Full Time Web Development Program",
    issuer: "Masai · NSDC",
    date: "2023-07-28",
    dateLabel: "28 July 2023",
    description:
      "Completed Masai’s full-time Web Development Program with 2,160 hours of practical learning, focused on applying industry standards and development methods.",
    url: "https://drive.google.com/file/d/1MJyq3gH85DUnvA5MgtT34Vs0UMlY7Ajk/view",
    image: { src: webDevelopment, width: 1600, height: 971 },
  },
  {
    id: "zoom-marathon",
    title: "Zoom Marathon Challenge · Season V",
    issuer: "Masai · English Fluency Marathon",
    date: "2023-03-26",
    dateLabel: "1–26 March 2023",
    description:
      "Completed all 26 sprints of the English Fluency Marathon’s Zoom challenge, demonstrating sustained commitment, focus, and participation throughout the program.",
    url: "https://drive.google.com/file/d/12HNJYVFrqpXZD9fcGKyKF_3jt8tEX5HB/view",
    image: { src: zoomMarathon, width: 1600, height: 1119 },
  },
];
