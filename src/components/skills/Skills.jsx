import "./Skills.css";
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
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="skills_container">
      <h1> What skills I have?</h1>
      {/* frontend and backend container  */}
      <div className="skills_core_continer">
        {/* forntend container  */}
        <div className="skills_frontend">
          <h3>Frontend Development</h3>

          <div className="skills_icons">
            <div>
              <FaHtml5 size={40} />
              <p>HTML</p>
            </div>
            {/*  */}
            <div>
              <FaCss3Alt size={40} />
              <p>CSS</p>
            </div>
            {/*  */}
            <div>
              <FaJsSquare size={40} />
              <p>JavaScript</p>
            </div>
            {/*  */}
            <div>
              <FaReact size={40} />
              <p>React</p>
            </div>
            {/*  */}
            <div>
              <SiRedux size={40} />
              <p>Redux</p>
            </div>
            {/*  */}
            <div>
              <SiTypescript size={40} />
              <p>TypeScript</p>
            </div>
            {/*  */}
            <div>
              <SiChakraui size={40} />
              <p>Chakra UI</p>
            </div>
            {/*  */}
            <div>
              <SiBootstrap size={40} />
              <p>Bootstrap</p>
            </div>
            <div>
              <SiAdobephotoshop size={40} />
              <p>Photoshop</p>
            </div>
          </div>
        </div>
        {/* backend container  */}
        <div className="skills_backend">
          <h3>Backend Development</h3>
          <div className="skills_icons">
            <div>
              <SiNodedotjs size={40} />
              <p>Node Js</p>
            </div>
            {/*  */}
            <div>
              <SiExpress size={40} />
              <p>express Js</p>
            </div>
            {/*  */}
            <div>
              <SiMongodb size={40} />
              <p>MongoDB</p>
            </div>
            {/*  */}
            <div>
              <VscJson size={40} />
              <p>JSON</p>
            </div>
            {/*  */}
            <div>
              <SiNpm size={40} />
              <p>NPM</p>
            </div>
            <div>
              <SiFirebase size={40} />
              <p>Firebase</p>
            </div>

            {/*  */}
          </div>
        </div>
      </div>
      {/* frontend and backend container  */}

      <div className="skills_tools_container">
        <h3>Tools</h3>
        <div className="skills_icons">
          <div>
            <SiVercel size={40} />
            <p>Vercel</p>
          </div>
          {/*  */}
          <div>
            <SiNetlify size={40} />
            <p>Netlify</p>
          </div>
          {/*  */}
          <div>
            <SiGithub size={40} />
            <p>Github</p>
          </div>
          {/*  */}
          <div>
            <SiPostman size={40} />
            <p>Postman</p>
          </div>
          {/*  */}
          <div>
            <TbBrandVscode size={40} />
            <p>VS Code</p>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
