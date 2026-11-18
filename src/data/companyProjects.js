import { companyMedia } from "./companyMedia";

// Contributions and stacks confirmed by Shivam; MDF and Devsangam manifests were also inspected.
// No employment or project dates were provided.
export const companyProjects = [
  {
    id: "american-chase",
    name: "American Chase",
    projects: [
      {
        id: "flightsafety",
        name: "FlightSafety International",
        category: "Legacy application modernization",
        description: "Worked on FlightSafety International applications on behalf of American Chase, modernizing legacy code and supporting an upgrade from PHP 7 to PHP 8.4. The project used PHP, Laravel, AS400, and PHPUnit.",
        focus: [
          "Legacy modernization",
          "PHP 7 → PHP 8.4",
          "Unit testing",
        ],
        url: "https://www.flightsafety.com/",
        linkLabel: "Client website",
        techStack: [
          "PHP",
          "Laravel",
          "AS400",
          "PHPUnit",
        ],
        responsibilities: [
          "Modernized legacy application code while maintaining existing functionality.",
          "Supported migration from PHP 7 to PHP 8.4 and alignment with modern framework practices.",
          "Worked with the PHP/Laravel codebase, AS400, and PHPUnit testing.",
        ],
        images: companyMedia["flightsafety"],
      },
      {
        id: "mount-sinai",
        name: "Mount Sinai",
        category: "StrataJazz · Data & payroll",
        description: "Worked on Mount Sinai's StrataJazz data workflows through American Chase, cleansing and standardizing records from attendance systems and other cloud sources before ingestion. Also addressed payroll processing differences between weekly and biweekly cycles.",
        focus: [
          "Data cleansing",
          "Standardization",
          "Payroll reconciliation",
        ],
        url: "https://www.mountsinai.org/",
        linkLabel: "Client website",
        techStack: [
          "StrataJazz",
        ],
        responsibilities: [
          "Cleaned and normalized attendance records and other cloud-sourced data into a consistent format before transferring them to StrataJazz.",
          "Standardized incoming records to support more reliable downstream StrataJazz processing.",
          "Investigated and corrected payroll-processing differences across weekly and biweekly pay cycles.",
        ],
        images: companyMedia["mount-sinai"],
      },
    ],
  },
  {
    id: "askus-studio",
    name: "Askus Studio",
    projects: [
      {
        id: "dream-country-visas",
        name: "Dream Country Visas",
        category: "Frontend website development",
        description: "Completed the Dream Country Visas website by adapting pre-existing templates and customizing the design and functionality to the client's requirements with HTML, CSS, and vanilla JavaScript.",
        focus: [
          "Template adaptation",
          "Client customization",
          "Frontend development",
        ],
        url: "https://dreamcountryvisas.com/",
        techStack: [
          "HTML",
          "CSS",
          "Vanilla JavaScript",
        ],
        responsibilities: [
          "Adapted existing website templates to meet the client's layout, content, and functionality requirements.",
          "Customized pages, styles, and frontend behavior using HTML, CSS, and vanilla JavaScript.",
          "Applied client-requested refinements to complete the website.",
        ],
        images: companyMedia["dream-country-visas"],
      },
      {
        id: "m-dadu-films",
        name: "M. Dadu Films",
        category: "Website development",
        description:
          "Built a full-stack platform for M. Dadu Films with Next.js and NestJS, bringing together the public website, talent profiles, casting workflows, and an administrative content system. Deployed the platform on AWS with Amazon S3 media storage.",
        focus: ["Built from scratch", "Web development"],
        url: "https://mdadufilms.com/",
        techStack: [
          "Next.js",
          "NestJS",
          "React",
          "TypeScript",
          "MongoDB",
          "Zustand",
          "Tailwind CSS",
          "AWS Lightsail",
          "Amazon S3",
          "Hostinger CDN",
        ],
        responsibilities: [
          "Developed the Next.js frontend and NestJS backend from scratch.",
          "Implemented talent profiles, casting and application workflows, and an administrative CMS.",
          "Deployed on AWS Lightsail, integrated Amazon S3 media storage, and configured Hostinger domain and CDN services.",
        ],
        githubLink: "https://github.com/shivammchaudhary1/mdf",
        images: companyMedia["m-dadu-films"],
      },
      {
        id: "devsangam",
        name: "Devsangam",
        category: "Digital mala counter",
        description:
          "Built Devsangam, a React progressive web app for mantra practice and digital mala counting, backed by Express and MongoDB. The experience combines practice sessions, progress tracking, and a responsive interface for desktop and mobile.",
        focus: ["Built from scratch", "Digital mala counter"],
        url: "https://devsangam.me/",
        techStack: [
          "React",
          "TypeScript",
          "Vite",
          "Node.js",
          "Express",
          "MongoDB",
          "Tailwind CSS",
          "TanStack Query",
          "PWA",
        ],
        responsibilities: [
          "Developed the React and TypeScript application from scratch, including the digital mala counter.",
          "Implemented mantra practice sessions, progress tracking, and installable PWA workflows.",
          "Built Express APIs and connected the application to MongoDB.",
        ],
        githubLink: "https://github.com/shivammchaudhary1/devsangam",
        images: companyMedia["devsangam"],
      },
      {
        id: "the-golden-wasp",
        name: "The Golden Wasp",
        category: "Migration & maintenance",
        description:
          "Managed WordPress hosting migration and website maintenance for The Golden Wasp, moving the site from GoDaddy to Hostinger and supporting its continued operation after the transition.",
        focus: ["WordPress", "Hosting migration", "Maintenance"],
        url: "https://thegoldenwasp.com/",
        techStack: ["WordPress", "GoDaddy", "Hostinger"],
        responsibilities: [
          "Migrated the existing WordPress website from GoDaddy to Hostinger.",
          "Maintained the website after migration and supported its day-to-day operation.",
        ],
        images: companyMedia["the-golden-wasp"],
      },
      {
        id: "keystroke-consulting",
        name: "Keystroke Consulting",
        category: "WordPress development",
        description:
          "Developed a WordPress website from scratch for Keystroke Consulting, creating a dedicated online presence for its recruitment and workforce consulting services.",
        focus: ["WordPress", "Built from scratch"],
        url: "https://keystrokeconsulting.in/",
        techStack: ["WordPress"],
        responsibilities: [
          "Built the company’s website from the ground up using WordPress.",
          "Created the website pages and content structure for its recruitment and consulting services.",
        ],
        images: companyMedia["keystroke-consulting"],
      },
      {
        id: "dr-kumkum-gupta",
        name: "Dr. Kumkum Gupta",
        category: "WordPress development",
        description:
          "Built a WordPress website from scratch for Dr. Kumkum Gupta’s mental wellness and life-coaching practice, presenting her professional profile and coaching services through a dedicated online presence.",
        focus: ["WordPress", "Built from scratch"],
        url: "https://drkumkumgupta.com/",
        techStack: ["WordPress"],
        responsibilities: [
          "Developed the complete WordPress website from scratch.",
          "Organized the website around the professional profile and coaching services.",
        ],
        images: companyMedia["dr-kumkum-gupta"],
      },
      {
        id: "the-logic-machines",
        name: "The Logic Machines",
        category: "WordPress development",
        description:
          "Developed The Logic Machines’ WordPress website from scratch, bringing the company’s digital marketing, website development, and creative services together in a dedicated business website.",
        focus: ["WordPress", "Built from scratch"],
        url: "https://thelogicmachines.com/",
        techStack: ["WordPress"],
        responsibilities: [
          "Built the WordPress website from the ground up.",
          "Created website pages for the company’s digital and creative service offerings.",
        ],
        images: companyMedia["the-logic-machines"],
      },
    ],
  },
  {
    id: "wlc-technology",
    name: "WLC Technology",
    projects: [
      {
        id: "trackify",
        name: "Trackify.ai",
        category: "Frontend & backend development",
        description:
          "Contributed to full-stack development for Trackify.ai using MongoDB, Express, React, and Node.js. The primary focus was the leave management system and the frontend and backend workflows supporting it.",
        focus: ["Frontend", "Backend", "Leave management"],
        url: "https://trackify.ai/",
        techStack: ["MongoDB", "Express", "React", "Node.js"],
        responsibilities: [
          "Developed and enhanced React interfaces and Node.js/Express backend functionality.",
          "Worked on leave management workflows across the frontend, backend services, and MongoDB.",
        ],
        images: companyMedia["trackify"],
      },
      {
        id: "career-explorer",
        name: "Career Explorer",
        category: "Planning through deployment",
        description:
          "Built Career Explorer from the ground up, taking ownership from product planning and full-stack implementation through deployment. The platform combines personality and interest assessments with AI-powered career guidance.",
        focus: ["Built from scratch", "Full-stack development", "Deployment"],
        url: "https://careerexplorer.me/",
        techStack: [
          "React",
          "Redux",
          "Node.js",
          "MongoDB",
          "Python",
          "OpenAI",
          "Material UI",
        ],
        responsibilities: [
          "Planned and built the application from scratch, covering frontend and backend development.",
          "Implemented assessment-driven, AI-powered career guidance.",
          "Managed deployment of the completed platform.",
        ],
        githubLink: "https://github.com/shivammchaudhary1/career_explorer",
        images: companyMedia["career-explorer"],
      },
      {
        id: "magnolia-home",
        name: "Magnolia Home",
        category: "WordPress upgrades & maintenance",
        description:
          "Contributed to WordPress upgrades and e-commerce website maintenance for Magnolia Home, including variable-product pricing, WhatsApp contact options, scrolling interactions, and routine website backups.",
        focus: [
          "WordPress",
          "Variable-product pricing",
          "Backups & maintenance",
        ],
        url: "https://magnoliahome.co.in/",
        techStack: ["WordPress"],
        responsibilities: [
          "Upgraded and maintained the WordPress website, including website backups.",
          "Added scrolling interactions and WhatsApp buttons to the customer-facing site.",
          "Configured pricing for variable products.",
        ],
        images: companyMedia["magnolia-home"],
      },
      {
        id: "evaluer",
        name: "eValuer",
        category: "Dashboards & graphical interfaces",
        description:
          "Enhanced eValuer’s existing Next.js and NestJS application with graphical data representations and dashboard interfaces, focusing on how application data is presented and understood.",
        focus: ["Dashboard UI", "Graphical interfaces"],
        url: "https://evaluer.online/",
        techStack: ["Next.js", "NestJS"],
        responsibilities: [
          "Enhanced the existing Next.js and NestJS application.",
          "Developed graphical representations and dashboard views to make application data easier to interpret.",
        ],
        images: companyMedia["evaluer"],
      },
      {
        id: "namo-grand-central-park",
        name: "Namo Grand Central Park",
        category: "Mobile application",
        description:
          "Contributing to the Namo Grand Central Park mobile application using React Native, Node.js, and Express, with responsibility for completing remaining mobile features and supporting backend functionality.",
        focus: ["Mobile application", "Feature completion"],
        techStack: ["React Native", "Node.js", "Express"],
        responsibilities: [
          "Complete and integrate remaining features in the React Native mobile application.",
          "Develop and update supporting Node.js and Express services.",
        ],
        url: "https://play.google.com/store/apps/details?id=com.kalpataru.gcp&hl=en_IN",
        linkLabel: "Google Play",
        images: companyMedia["namo-grand-central-park"],
      },
    ],
  },
];
