import { FiArrowUpRight, FiBriefcase, FiMapPin } from "react-icons/fi";
import { experienceTimeline } from "../../data/experienceTimeline";
import { experienceLetters } from "../../data/experienceLetters";
import ProjectGallery from "../shared/ProjectGallery";
import "./ExperienceLetters.css";

const lettersByCompany = new Map(experienceLetters.map((letter) => [letter.companyId, letter]));

export default function ExperienceLetters() {
  return (
    <section id="experience" className="experience-container" aria-labelledby="experience-heading">
      <p className="section-eyebrow">Professional journey</p>
      <h2 id="experience-heading">Work Experience</h2>
      <p className="experience-intro">
        Three years of hands-on development across production platforms,
        full-stack applications, mobile experiences, and client delivery.
      </p>
      <ol className="experience-timeline">
        {experienceTimeline.map((entry) => {
          const letter = lettersByCompany.get(entry.id);
          return (
            <li key={entry.id} className="experience-timeline-item" id={`${entry.id}-experience`}>
              <span className="experience-timeline-dot" aria-hidden="true"><FiBriefcase /></span>
              <article className="experience-timeline-card">
                <div className="experience-timeline-main">
                  <div className="experience-timeline-heading">
                    <div>
                      <h3>{entry.company}</h3>
                      <p className="experience-role">{entry.title}</p>
                      <p className="experience-location"><FiMapPin aria-hidden="true" /> {entry.location}</p>
                    </div>
                    <p className="experience-tenure">
                      <time dateTime={entry.start}>{entry.period.split(" – ")[0]}</time>
                      {" – "}
                      <time dateTime={entry.end}>{entry.period.split(" – ")[1]}</time>
                    </p>
                  </div>
                  <ul className="experience-highlights">
                    {entry.highlights.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                  <ul className="experience-tags" aria-label={`${entry.company} technologies`}>
                    {entry.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <a className="experience-projects-link" href={`#${entry.id}-projects`}>
                    See related projects <FiArrowUpRight aria-hidden="true" />
                  </a>
                </div>
                {letter && (
                  <aside className="experience-letter-side" aria-label={`${entry.company} employment document`}>
                    <p className="experience-letter-label">Experience letter</p>
                    <ProjectGallery
                      name={`${entry.company} experience letter`}
                      images={[{
                        ...letter.image,
                        alt: `${letter.type} issued by ${entry.company}`,
                        caption: "Experience document · Expand to view the full page",
                      }]}
                      mediaLabel="document"
                      viewerClassName="experience-document-viewer"
                      allowZoom
                      aspectRatio={`${letter.image.width} / ${letter.image.height}`}
                    />
                    <p className="experience-letter-hint">Select Expand to read, then Zoom in for detail.</p>
                  </aside>
                )}
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
