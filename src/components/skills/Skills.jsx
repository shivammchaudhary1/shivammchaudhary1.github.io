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
  SiAdobephotoshop,
  SiTypescript,
  SiRedux,
  SiChakraui,
  SiMui,
  SiNextdotjs,
  SiGoogle,
  SiOpenai,
  SiVisualstudio,
  SiFigma,
} from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="skills_container" id="skills">
      <h1> What skills I have?</h1>
      {/* frontend and backend container  */}
      <div className="skills_core_continer">
        {/* forntend container  */}
        <div className="skills-card">
          <h3>Frontend Development</h3>

          <div className="skills_icons">
            <div>
              <FaHtml5 class="skills-card-img" size={40} />
              <p class="skills-card-name">HTML</p>
            </div>
            {/*  */}
            <div>
              <FaCss3Alt class="skills-card-img" size={40} />
              <p class="skills-card-name">CSS</p>
            </div>
            {/*  */}
            <div>
              <FaJsSquare class="skills-card-img" size={40} />
              <p class="skills-card-name">JavaScript</p>
            </div>
            {/*  */}
            <div>
              <FaReact class="skills-card-img" size={40} />
              <p class="skills-card-name">React</p>
            </div>
            {/*  */}
            <div>
              <SiRedux class="skills-card-img" size={40} />
              <p class="skills-card-name">Redux</p>
            </div>
            {/*  */}
            <div>
              <SiTypescript class="skills-card-img" size={40} />
              <p class="skills-card-name">TypeScript</p>
            </div>
            {/*  */}
            <div>
              <SiMui class="skills-card-img" size={40} />
              <p class="skills-card-name">Material UI</p>
            </div>
            <div>
              <SiChakraui class="skills-card-img" size={40} />
              <p class="skills-card-name">Chakra UI</p>
            </div>
            {/*  */}
            <div>
              <SiTailwindcss class="skills-card-img" size={40} />
              <p class="skills-card-name">Tailwind</p>
            </div>
            <div>
              <SiBootstrap class="skills-card-img" size={40} />
              <p class="skills-card-name">Bootstrap</p>
            </div>

            <div>
              <FaReact class="skills-card-img" size={40} />
              <p class="skills-card-name">React Native</p>
            </div>
            <div>
              <SiNextdotjs class="skills-card-img" size={40} />
              <p class="skills-card-name">Next.js</p>
            </div>
            {/* <div>
              <SiAdobephotoshop class="skills-card-img" size={40} />
              <p class="skills-card-name">Photoshop</p>
            </div> */}
          </div>
        </div>
        {/* backend container  */}
        <div className="skills_backend">
          <h3 class="skills-card-name">Backend Development</h3>
          <div className="skills_icons">
            <div>
              <SiNodedotjs class="skills-card-img" size={40} />
              <p class="skills-card-name">Node Js</p>
            </div>
            {/*  */}
            <div>
              <SiExpress class="skills-card-img" size={40} />
              <p class="skills-card-name">express Js</p>
            </div>
            {/*  */}
            <div>
              <SiMongodb class="skills-card-img" size={40} />
              <p class="skills-card-name">MongoDB</p>
            </div>

            <div>
              <FaAws class="skills-card-img" size={40} />
              <p class="skills-card-name">AWS</p>
            </div>
            {/*  */}
            <div>
              <VscJson class="skills-card-img" size={40} />
              <p class="skills-card-name">JSON</p>
            </div>
            {/*  */}
            <div>
              <SiNpm class="skills-card-img" size={40} />
              <p class="skills-card-name">NPM</p>
            </div>
            <div>
              <SiFirebase class="skills-card-img" size={40} />
              <p class="skills-card-name">Firebase</p>
            </div>
            <div>
              <SiGoogle class="skills-card-img" size={40} />
              <p class="skills-card-name">Google Gemini AI</p>
            </div>
            <div>
              <SiOpenai class="skills-card-img" size={40} />
              <p class="skills-card-name">OpenAI</p>
            </div>
          </div>
        </div>
      </div>
      {/* frontend and backend container  */}

      <div className="skills_tools_container">
        <h3>Tools</h3>
        <div className="skills_icons">
          <div>
            <SiVercel class="skills-card-img" size={40} />
            <p class="skills-card-name">Vercel</p>
          </div>
          {/*  */}
          <div>
            <SiNetlify class="skills-card-img" size={40} />
            <p class="skills-card-name">Netlify</p>
          </div>
          {/*  */}
          <div>
            <SiGithub class="skills-card-img" size={40} />
            <p class="skills-card-name">Github</p>
          </div>
          {/*  */}
          <div>
            <SiPostman class="skills-card-img" size={40} />
            <p class="skills-card-name">Postman</p>
          </div>
          {/*  */}
          <div>
            <TbBrandVscode class="skills-card-img" size={40} />
            <p class="skills-card-name">Visual Studio</p>
          </div>
          <div>
            <SiFigma class="skills-card-img" size={40} />
            <p class="skills-card-name">Figma</p>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
