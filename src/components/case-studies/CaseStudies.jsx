import "./CaseStudies.css";

const studies = [
  {
    id: "mdadu-case-study",
    title: "M. Dadu Films",
    label: "Client platform · Full-stack delivery",
    link: "https://mdadufilms.com/",
    challenge: "Bring talent discovery, casting applications and public content management into one platform for a film-production business.",
    approach: "Built the public experience with Next.js and the backend with NestJS, and implemented talent profiles, casting workflows and an admin-facing CMS.",
    architecture: ["Next.js frontend", "NestJS APIs", "MongoDB", "AWS Lightsail", "Amazon S3 media storage"],
    delivery: "Delivered the web platform and managed its AWS-based deployment and media integrations.",
  },
  {
    id: "devsangam-case-study",
    title: "Devsangam",
    label: "Product engineering · Progressive web app",
    link: "https://devsangam.me/",
    challenge: "Create a consistent, mobile-friendly digital mala practice experience that supports user sessions and progress tracking.",
    approach: "Developed an installable React and TypeScript PWA, including the digital counter, session flows and an Express/MongoDB backend.",
    architecture: ["React + Vite", "TypeScript", "Express APIs", "MongoDB", "Installable PWA"],
    delivery: "Implemented the end-to-end application and its responsive practice experience.",
  },
];

export default function CaseStudies() {
  return (
    <section className="case-studies" id="case-studies" aria-labelledby="case-studies-title">
      <p className="section-eyebrow">How I build</p>
      <h2 id="case-studies-title">Engineering Case Studies</h2>
      <p className="case-studies-intro">
        More than a screenshot: the problem, my approach and the architecture behind selected work.
      </p>
      <div className="case-studies-grid">
        {studies.map((study) => (
          <article className="case-study" key={study.id} id={study.id}>
            <p className="case-study-label">{study.label}</p>
            <h3>{study.title}</h3>
            <h4>Challenge</h4>
            <p>{study.challenge}</p>
            <h4>My approach</h4>
            <p>{study.approach}</p>
            <h4>Architecture &amp; tools</h4>
            <ul className="case-study-tech">
              {study.architecture.map((part) => <li key={part}>{part}</li>)}
            </ul>
            <h4>Delivery</h4>
            <p>{study.delivery}</p>
            <a href={study.link} target="_blank" rel="noopener noreferrer">Visit live project ↗</a>
          </article>
        ))}
      </div>
      <p className="case-studies-note">
        Metrics and architecture details can be expanded as verified project information becomes available.
      </p>
    </section>
  );
}
