import React from 'react'
import './footer.css';
import {BsLinkedin} from 'react-icons/bs'
import {AiTwotoneMail,AiOutlineGithub} from 'react-icons/ai'


export const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer_logo'>Shivam Chaudhary</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a> </li>
        <li><a href="#about">About</a> </li>
        <li><a href="#skills">Skills</a> </li>
        <li><a href="#project">Projects</a> </li>
        <li><a href="#contact">Contact</a> </li>
      </ul>
      <div className='footer_socials'>
        <a href="https://www.linkedin.com/in/taniya-maurya/"><BsLinkedin/> </a>
        <a href="mailto:taniyamaurya09@gmail.com"><AiTwotoneMail/> </a>
        <a href="https://github.com/Taniya635"><AiOutlineGithub/> </a>
      </div>
    </footer>
  )
}
