import { FiArrowUpRight, FiBriefcase, FiMail } from "react-icons/fi";
import { experienceTimeline } from "../../data/experienceTimeline";
import "./ExperienceLetters.css";

// Experience-letter images are deliberately not shown on the public page.
// Contact Shivam to request verification instead of publishing document scans.
export default function ExperienceLetters() {
  return (
    <section
      id="experience"
      className="experience-container"
      aria-labelledby="experience-heading"
    >
      <p className="section-eyebrow">Professional journey</p>
      <h2 id="experience-heading">Work Experience</h2>
      <p className="experience-intro">
        Hands-on engineering across client applications, product development,
        system modernization and cloud deployment.
      </p>
      <ol className="experience-timeline">
        {experienceTimeline.map((entry) => (
          <li key={entry.id} className="experience-timeline-item" id={`${entry.id}-experience`}>
            <span className="experience-timeline-dot" aria-hidden="true"><FiBriefcase /></span>
            <article className="experience-timeline-card">
              <div className="experience-timeline-heading">
                <div>
                  <h3>{entry.company}</h3>
                  <p className="experience-role">{entry.title}</p>
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
            </article>
          </li>
        ))}
      </ol>
      <p className="experience-verification">
        <FiMail aria-hidden="true" /> Employment verification documents are available on request.
        <a href="mailto:shivamchaudhary75@gmail.com?subject=Experience%20verification%20request"> Request verification</a>
      </p>
    </section>
  );
}
