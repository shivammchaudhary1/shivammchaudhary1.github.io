import { FiArrowUpRight, FiAward } from "react-icons/fi";
import { certifications } from "../../data/certifications";
import ProjectGallery from "../shared/ProjectGallery";
import "./Certifications.css";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="certifications-container"
      aria-labelledby="certifications-heading"
    >
      <p className="section-eyebrow">Learning &amp; professional development</p>
      <h2 id="certifications-heading">Certifications</h2>
      <p className="certifications-intro">
        A continuing investment in full stack development, generative AI, and
        communication. Explore the certificates behind my learning journey.
      </p>
      <div className="certifications-grid">
        {certifications.map((certificate) => (
          <article
            className="certification-card"
            key={certificate.id}
            aria-labelledby={`${certificate.id}-certificate-title`}
          >
            <ProjectGallery
              name={certificate.title}
              images={[
                {
                  ...certificate.image,
                  alt: `${certificate.title} certificate awarded to Shivam Chaudhary by ${certificate.issuer}`,
                  caption: "Certificate preview · Expand to read",
                },
              ]}
              aspectRatio="16 / 11"
            />
            <div className="certification-meta">
              <p><FiAward aria-hidden="true" /> {certificate.issuer}</p>
              {certificate.date && (
                <time dateTime={certificate.date}>{certificate.dateLabel}</time>
              )}
            </div>
            <h3 id={`${certificate.id}-certificate-title`}>{certificate.title}</h3>
            <p className="certification-description">{certificate.description}</p>
            <a
              className="certification-link"
              href={certificate.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View original certificate: ${certificate.title} (opens in a new tab)`}
            >
              View certificate <FiArrowUpRight aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
