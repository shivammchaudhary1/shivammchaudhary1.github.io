import { companyProjects } from "../../data/companyProjects";
import {
  careerExplorer_Image1,
  enterpriseNotion_Image1,
} from "../../assets/assets";
import "./FeaturedWork.css";

const companyWork = companyProjects.flatMap((group) => group.projects);
const findWork = (id) => companyWork.find((project) => project.id === id);

const featured = [
  {
    id: "m-dadu-films",
    title: "M. Dadu Films",
    eyebrow: "Production platform · End-to-end build",
    description:
      "Built a full-stack film and talent platform, including casting applications, talent profiles, an administration system, and cloud media storage.",
    technologies: ["Next.js", "NestJS", "TypeScript", "MongoDB", "AWS S3"],
    project: findWork("m-dadu-films"),
    live: "https://mdadufilms.com/",
    caseStudy: "#mdadu-case-study",
  },
  {
    id: "devsangam",
    title: "Devsangam",
    eyebrow: "Full-stack PWA · Built from scratch",
    description:
      "Created a responsive mantra-practice application with a digital mala counter, session tracking, an Express API, and MongoDB persistence.",
    technologies: ["React", "TypeScript", "Express", "MongoDB", "PWA"],
    project: findWork("devsangam"),
    live: "https://devsangam.me/",
    caseStudy: "#devsangam-case-study",
  },
  {
    id: "career-explorer",
    title: "Career Explorer",
    eyebrow: "AI-powered career guidance",
    description:
      "A career-exploration product combining DISC and RAISEC assessments with personalized guidance. Explore the features and architecture in the full project listing.",
    technologies: ["React", "Node.js", "MongoDB", "AI"],
    preview: careerExplorer_Image1,
    live: "https://careerexplorer.me/",
    source: "https://github.com/shivammchaudhary1/career_explorer",
  },
  {
    id: "enterprise-notion",
    title: "Enterprise Notion",
    eyebrow: "AI document workspace",
    description:
      "Built an AI-assisted document workspace with rich editing, document organization, auto-tagging, and natural-language search.",
    technologies: ["React", "Express", "MongoDB", "Gemini AI"],
    preview: enterpriseNotion_Image1,
    live: "https://enterprise-notion.vercel.app/",
    source: "https://github.com/shivammchaudhary1/enterprise-notion",
  },
];

export default function FeaturedWork() {
  return (
    <section className="featured-section" id="featured" aria-labelledby="featured-title">
      <p className="section-eyebrow">Selected work</p>
      <h2 id="featured-title">Featured Projects</h2>
      <p className="featured-intro">
        A closer look at production applications and independent products — from
        full-stack platforms to practical AI integrations.
      </p>
      <div className="featured-grid">
        {featured.map((item) => {
          const media = item.project?.images?.[0] || item.preview;
          return (
            <article className="featured-card" key={item.id}>
              <a
                className="featured-media"
                href={item.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${item.title} website (opens in a new tab)`}
              >
                {media && (
                  <img
                    src={media.src}
                    alt={`${item.title} application preview`}
                    width={media.width || 1280}
                    height={media.height || 800}
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <span aria-hidden="true" className="featured-media-arrow">↗</span>
              </a>
              <div className="featured-content">
                <p className="featured-eyebrow">{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p className="featured-description">{item.description}</p>
                <ul className="featured-tech" aria-label={`${item.title} technologies`}>
                  {item.technologies.map((tech) => <li key={tech}>{tech}</li>)}
                </ul>
                <div className="featured-actions">
                  <a href={item.live} target="_blank" rel="noopener noreferrer">Live project ↗</a>
                  {item.caseStudy && <a href={item.caseStudy}>Read case study →</a>}
                  {item.source && <a href={item.source} target="_blank" rel="noopener noreferrer">Source code ↗</a>}
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <a className="featured-more" href="#projects">Explore all projects →</a>
    </section>
  );
}
