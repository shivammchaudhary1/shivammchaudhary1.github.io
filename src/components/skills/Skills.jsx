import { RiOpenaiFill } from "react-icons/ri";
import { FiLayers } from "react-icons/fi";
import "./skills.css";
import { VscJson } from "react-icons/vsc";
import { TbBrandVscode } from "react-icons/tb";
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";
import {
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNpm,
  SiVercel,
  SiNetlify,
  SiGithub,
  SiPostman,
  SiFirebase,
  SiTypescript,
  SiRedux,
  SiChakraui,
  SiMui,
  SiNextdotjs,
  SiGoogle,
  SiFigma,
  SiNestjs,
  SiReactquery,
  SiPwa,
  SiVite,
  SiWordpress,
  SiHostinger,
} from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const projectSkills = {
  frontend: [
    { name: "Zustand", Icon: FiLayers },
    { name: "TanStack Query", Icon: SiReactquery },
    { name: "Progressive Web Apps (PWA)", Icon: SiPwa },
  ],
  backend: [
    { name: "NestJS", Icon: SiNestjs },
    { name: "Amazon S3", Icon: FaAws },
    { name: "AWS Lightsail", Icon: FaAws },
    { name: "AWS EC2", Icon: FaAws },
  ],
  tools: [
    { name: "Vite", Icon: SiVite },
    { name: "WordPress", Icon: SiWordpress },
    { name: "Hostinger CDN", Icon: SiHostinger },
  ],
};

const SkillItems = ({ skills }) => skills.map(({ name, Icon }) => (
  <div key={name}>
    <Icon className="skills-card-img" aria-hidden="true" size={40} />
    <p className="skills-card-name">{name}</p>
  </div>
));

const Skills = () => {
  return (
    <div className="skills_container" id="skills">
      <p className="section-eyebrow">Tools of the trade</p>
      <h2>Technical Skills</h2>

      <div className="skills_core_continer">
        <div className="skills-card">
          <h3>Frontend Development</h3>

          <div className="skills_icons">
            <div>
              <FaHtml5
                className="skills-card-img"
                aria-hidden="true"
                size={40}
              />
              <p className="skills-card-name">HTML</p>
            </div>

            <div>
              <FaCss3Alt
                className="skills-card-img"
                aria-hidden="true"
                size={40}
              />
              <p className="skills-card-name">CSS</p>
            </div>

            <div>
              <FaJsSquare
                className="skills-card-img"
                aria-hidden="true"
                size={40}
              />
              <p className="skills-card-name">JavaScript</p>
            </div>

            <div>
              <FaReact
                className="skills-card-img"
                aria-hidden="true"
                size={40}
              />
              <p className="skills-card-name">React</p>
            </div>

            <div>
              <SiRedux
                className="skills-card-img"
                aria-hidden="true"
                size={40}
              />
              <p className="skills-card-name">Redux</p>
            </div>

            <div>
              <SiTypescript
                className="skills-card-img"
                aria-hidden="true"
                size={40}
              />
              <p className="skills-card-name">TypeScript</p>
            </div>

            <div>
              <SiMui className="skills-card-img" aria-hidden="true" size={40} />
              <p className="skills-card-name">Material UI</p>
            </div>
            <div>
              <SiChakraui
                className="skills-card-img"
                aria-hidden="true"
                size={40}
              />
              <p className="skills-card-name">Chakra UI</p>
            </div>

            <div>
              <SiTailwindcss
                className="skills-card-img"
                aria-hidden="true"
                size={40}
              />
              <p className="skills-card-name">Tailwind</p>
            </div>
            <div>
              <SiBootstrap
                className="skills-card-img"
                aria-hidden="true"
                size={40}
              />
              <p className="skills-card-name">Bootstrap</p>
            </div>

            <div>
              <FaReact
                className="skills-card-img"
                aria-hidden="true"
                size={40}
              />
              <p className="skills-card-name">React Native</p>
            </div>
            <div>
              <SiNextdotjs
                className="skills-card-img"
                aria-hidden="true"
                size={40}
              />
              <p className="skills-card-name">Next.js</p>
            </div>
            <SkillItems skills={projectSkills.frontend} />
          </div>
        </div>

        <div className="skills_backend">
          <h3 className="skills-card-name">Backend Development</h3>
          <div className="skills_icons">
            <div>
              <SiNodedotjs
                className="skills-card-img"
                aria-hidden="true"
                size={40}
              />
              <p className="skills-card-name">Node.js</p>
            </div>

            <div>
              <SiExpress
                className="skills-card-img"
                aria-hidden="true"
                size={40}
              />
              <p className="skills-card-name">Express.js</p>
            </div>

            <div>
              <SiMongodb
                className="skills-card-img"
                aria-hidden="true"
                size={40}
              />
              <p className="skills-card-name">MongoDB</p>
            </div>

            <div>
              <FaAws className="skills-card-img" aria-hidden="true" size={40} />
              <p className="skills-card-name">AWS</p>
            </div>

            <div>
              <VscJson
                className="skills-card-img"
                aria-hidden="true"
                size={40}
              />
              <p className="skills-card-name">JSON</p>
            </div>

            <div>
              <SiNpm className="skills-card-img" aria-hidden="true" size={40} />
              <p className="skills-card-name">NPM</p>
            </div>
            <div>
              <SiFirebase
                className="skills-card-img"
                aria-hidden="true"
                size={40}
              />
              <p className="skills-card-name">Firebase</p>
            </div>
            <div>
              <SiGoogle
                className="skills-card-img"
                aria-hidden="true"
                size={40}
              />
              <p className="skills-card-name">Google Gemini AI</p>
            </div>
            <div>
              <RiOpenaiFill
                className="skills-card-img"
                aria-hidden="true"
                size={40}
              />
              <p className="skills-card-name">OpenAI</p>
            </div>
            <SkillItems skills={projectSkills.backend} />
          </div>
        </div>
      </div>

      <div className="skills_tools_container">
        <h3>Tools</h3>
        <div className="skills_icons">
          <div>
            <SiVercel
              className="skills-card-img"
              aria-hidden="true"
              size={40}
            />
            <p className="skills-card-name">Vercel</p>
          </div>

          <div>
            <SiNetlify
              className="skills-card-img"
              aria-hidden="true"
              size={40}
            />
            <p className="skills-card-name">Netlify</p>
          </div>

          <div>
            <SiGithub
              className="skills-card-img"
              aria-hidden="true"
              size={40}
            />
            <p className="skills-card-name">Github</p>
          </div>

          <div>
            <SiPostman
              className="skills-card-img"
              aria-hidden="true"
              size={40}
            />
            <p className="skills-card-name">Postman</p>
          </div>

          <div>
            <TbBrandVscode
              className="skills-card-img"
              aria-hidden="true"
              size={40}
            />
            <p className="skills-card-name">Visual Studio</p>
          </div>
          <div>
            <SiFigma className="skills-card-img" aria-hidden="true" size={40} />
            <p className="skills-card-name">Figma</p>
          </div>
          <SkillItems skills={projectSkills.tools} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
