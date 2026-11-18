import { RiOpenaiFill } from "react-icons/ri";
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
} from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="skills_container" id="skills">
      <h2> What skills I have?</h2>

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
              <p className="skills-card-name">Node Js</p>
            </div>

            <div>
              <SiExpress
                className="skills-card-img"
                aria-hidden="true"
                size={40}
              />
              <p className="skills-card-name">express Js</p>
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
        </div>
      </div>
    </div>
  );
};

export default Skills;
