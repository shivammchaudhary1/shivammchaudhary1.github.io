import { FiArrowUpRight, FiBriefcase, FiDownload } from "react-icons/fi";
import { experienceLetters } from "../../data/experienceLetters";
import ProjectGallery from "../shared/ProjectGallery";
import "./ExperienceLetters.css";

export default function ExperienceLetters() {
  return (
    <section
      id="experience"
      className="experience-container"
      aria-labelledby="experience-heading"
    >
      <p className="section-eyebrow">Professional journey</p>
      <h2 id="experience-heading">Experience Letters</h2>
      <p className="experience-intro">
        The roles, contributions, and milestones behind my professional work,
        documented by the companies I’ve worked with.
      </p>
      <div className="experience-grid">
        {experienceLetters.map((letter) => (
          <article
            key={letter.companyId}
            id={`${letter.companyId}-experience`}
            className="experience-card"
            aria-labelledby={`${letter.companyId}-experience-title`}
          >
            <div className="experience-card-heading">
              <span className="experience-icon"><FiBriefcase aria-hidden="true" /></span>
              <div>
                <h3 id={`${letter.companyId}-experience-title`}>{letter.company}</h3>
                <p className="experience-role">{letter.role}</p>
              </div>
            </div>
            <p className="experience-tenure">
              <time dateTime={letter.start}>{letter.startLabel}</time>
              <span aria-hidden="true"> — </span><span className="sr-only"> to </span>
              <time dateTime={letter.end}>{letter.endLabel}</time>
            </p>
            <ProjectGallery
              name={`${letter.company} experience letter`}
              mediaLabel="document"
              viewerClassName="experience-document-viewer"
              allowZoom
              aspectRatio={`${letter.image.width} / ${letter.image.height}`}
              images={[{
                ...letter.image,
                alt: `${letter.type} from ${letter.company} for Shivam Chaudhary`,
                caption: "JPG document · Expand to read the full letter",
              }]}
            />
            <p className="experience-letter-type">{letter.type}</p>
            <p className="experience-summary">{letter.summary}</p>
            <p className="experience-issued">
              Issued <time dateTime={letter.issued}>{letter.issuedLabel}</time>
            </p>
            <div className="experience-actions">
              <a href={letter.image.src} download={`${letter.companyId}-experience-letter.jpg`}>
                <FiDownload aria-hidden="true" /> Download JPG
              </a>
              <a href={`#${letter.companyId}-projects`}>
                Company projects <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
