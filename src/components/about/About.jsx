import React from 'react'
import './About.css'
import me from '../../assets/image1.png'
import resume from '../../assets/Shivam_Chaudhary_Resume.pdf'

export const About = () => {
  return (
    <section id='about'  class="about section">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={me} alt="about" /> 
          </div>
         
        </div>
        <p className='about__content' id="user-detail-intro"> 
          As a front-end developer, creating engaging, responsive, and accessible user interfaces using modern web technologies. Good knowledge of HTML, CSS, JavaScript, and frameworks such as React. Ensuring compatibility with different browsers and devices, and staying up-to-date with the latest front- end development trends and techniques.
          <br />
          <br />
          <br />
          
          </p>
          <div className='connect'>
          <a href="#contact" className='btn btn-primary'>Let's connect</a>
          <button><a href={resume} download  target='_blank' id="resume-button-1">Resume</a></button>
          </div>
          
      </div>
      

    </section>
  )
}
