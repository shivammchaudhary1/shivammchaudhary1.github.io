import React from 'react'
import resume from '../../assets/Taniya_Maurya_resume.pdf';

export const CTA = () => {
  return (
    <div class="nav-link resume">
        <div className="cta">
          <button id="resume-button-1" >  <a href={resume} download className='btn' target='_blank' id="resume-link-1" >Resume</a></button>
            <a href="#contact" className='btn btn-primary'>Let's connect</a>
        </div>
    </div>
  )
}
//dhsjd