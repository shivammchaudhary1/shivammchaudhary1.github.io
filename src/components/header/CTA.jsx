import React from 'react'
import resume from '../../assets/Taniya_Maurya_resume.pdf';

export const CTA = () => {
  return (
    <div class="nav-link resume">
        <div className="cta">
            <a href={resume} download className='btn'  id="resume-link-1">Resume</a>
            <a href="#contact" className='btn btn-primary'>Let's connect</a>
        </div>
    </div>
  )
}
//dhsjd