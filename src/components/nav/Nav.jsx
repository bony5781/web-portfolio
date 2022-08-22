import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {BsBookmarkCheckFill} from 'react-icons/bs'
import {FcSelfServiceKiosk} from 'react-icons/fc'
import {IoMdContact} from 'react-icons/io'
import { useState} from 'react'

const Nav = () => {
  const [activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href='#'  onClick={()=>setActiveNav('#')} className={activeNav === '#'?'active':''}><AiFillHome /></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav === '#about'?'active':''}><FaUserAlt /></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience'?'active':''}><BsBookmarkCheckFill /></a>
      <a href='#services' onClick={()=>setActiveNav('#services')} className={activeNav === '#services'?'active':''}><FcSelfServiceKiosk /></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact'?'active':''}><IoMdContact /></a>
    </nav>
  )
}

export default Nav