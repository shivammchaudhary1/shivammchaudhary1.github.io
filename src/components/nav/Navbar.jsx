import React, { useState } from 'react'
import './navbar.css'
import {HiHome} from 'react-icons/hi'
import {MdContactPage} from 'react-icons/md'
import {SiBookstack} from 'react-icons/si'
import {BsStack} from 'react-icons/bs'
import {RiMessage2Fill} from 'react-icons/ri'

export const Navbar = () => {
  const [activeNav,setActiveNav]=useState('#')

  return (
    <nav id="nav-menu">
      <a href="#" onClick={()=>setActiveNav("#")}  className={activeNav==='#'? "active" : ""} class="nav-link home"> <HiHome/> </a>
      <a href="#about" onClick={()=>setActiveNav("#about")}  className={activeNav==='#about'? "active" : ""} class="nav-link about"> <MdContactPage/> </a>
      <a href="#skills" onClick={()=>setActiveNav("#skills")}  className={activeNav==='#skills'? "active" : ""} class="nav-link skills"> <SiBookstack/> </a>
      <a href="#projects" onClick={()=>setActiveNav("#projects")}  className={activeNav==='#projects'? "active" : ""} class="nav-link projects"> <BsStack/> </a>
      <a href="#contact" onClick={()=>setActiveNav("#contact")}  className={activeNav==='#contact'? "active" : ""} class="nav-link contact"> <RiMessage2Fill/> </a>
    </nav>
  )
}
