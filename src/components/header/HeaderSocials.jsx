import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
       <a href="https://www.linkedin.com/in/abhinav-bhowmik-330347201/" target="_blank"><AiFillLinkedin /></a>
       <a href="https://github.com/bony5781" target="_blank"><AiFillGithub /></a>
       <a href="https://www.facebook.com/bonybhownik" target="_blank"><AiFillFacebook /></a>
    </div>
  )
}

export default HeaderSocials