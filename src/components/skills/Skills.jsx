import React from 'react'
import './skills.css';
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3,DiJava,DiMongodb} from 'react-icons/di'
import {RiReactjsLine} from 'react-icons/ri'
import {IoLogoNodejs} from 'react-icons/io'
import {TbBrandMysql,TbBrandPython,TbBrandTypescript} from 'react-icons/tb'
import {BsGithub} from 'react-icons/bs'
import {SiNetlify,SiChakraui,SiVercel,SiExpress} from 'react-icons/si'
import {VscJson} from 'react-icons/vsc'



export const Skills = () => {
  return (
    <section id='skills'>
      <h2>What skills I have?</h2>
      <div className='container experience_container'>
        <div className='experience_frontend'>
            <h2>Frontend Development</h2>
            <div className='experience_content'>
              <article className='skills-card' >
                <AiFillHtml5 className='skills-card-img' />
                <div>
                <h3 class="skills-card-name">HTML</h3>
                </div>
              </article>
              <article className='skills-card'>
                <DiCss3 className='skills-card-img'/>
                <div>
                <h3 class="skills-card-name">CSS</h3>
                </div>
              </article>
              <article className='skills-card'>
                <DiJava className='skills-card-img'/>
                <div>
                <h3 class="skills-card-name">JavaScript</h3>
                </div>
              </article>
              <article className='skills-card'>
                <RiReactjsLine className='skills-card-img'/>
                <div>
                <h3 class="skills-card-name">React </h3>
                </div>
              </article>
              <article className='skills-card'>
                <RiReactjsLine className='skills-card-img'/>
                <div>
                <h3 class="skills-card-name">React Redux</h3>
                </div>
              </article>
              <article className='skills-card'>
                <SiChakraui className='skills-card-img'/>
                <div>
                <h3 class="skills-card-name">Chakra UI</h3>
                </div>
              </article>
              <article className='skills-card'>
                <BsGithub className='skills-card-img'/>
                <div>
                <h3 class="skills-card-name">GitHub</h3>
                </div>
              </article>
              <article className='skills-card'>
                <SiNetlify className='skills-card-img'/>
                <div>
                <h3 class="skills-card-name">Netlify</h3>
                </div>
              </article>
              <article className='skills-card'>
                <SiVercel className='skills-card-img'/>
                <div>
                <h3 class="skills-card-name">Vercel</h3>
                </div>
              </article>
              <article className='skills-card'>
                <VscJson className='skills-card-img'/>
                <div>
                <h3 class="skills-card-name">JSON server</h3>
                </div>
              </article>
            </div>
        </div>
        <div className='experience_backend'>
          <h2>Backend Development</h2>
          <div className='experience_content'>
              <article className='skills-card'>
                <IoLogoNodejs className='skills-card-img'/>
                <div>
                <h3 class="skills-card-name">Node js</h3>
                </div>
              </article>
              <article className='skills-card'>
                <SiExpress className='skills-card-img'/>
                <div>
                <h3 class="skills-card-name">Express</h3>
                </div>
              </article>
              <article className='skills-card'>
                <TbBrandPython className='skills-card-img'/>
                <div>
                <h3 class="skills-card-name">Python</h3>
                </div>
              </article>
              <article className='skills-card'>
                <TbBrandTypescript className='skills-card-img'/>
                <div>
                <h3 class="skills-card-name">TypeScript</h3>
                </div>
              </article>
              <article className='skills-card'>
                <DiMongodb className='skills-card-img'/>
                <div>
                <h3 class="skills-card-name">MongoDB</h3>
                </div>
              </article>
              <article className='skills-card'>
                <DiMongodb className='skills-card-img'/>
                <div>
                <h3 class="skills-card-name">Mongoose</h3>
                </div>
              </article>
            </div>

        </div>

        {/* <div className='experience_tools'>
          <h2>Tools</h2>
          <div className='experience_content'>
              
              
            </div>

        </div> */}

      </div>
    </section>
  )
}
