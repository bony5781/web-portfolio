import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Abhinav Bhowmik</a>

      <ul className='permalinks'>
        <li> <a href='#'>Home</a></li>
        <li> <a href='#about'>About</a></li>
        <li> <a href='#experience'>Experience</a></li>
        <li> <a href='#services'>Services</a></li>
        <li> <a href='#testimonials'>Testimonials</a></li>
        <li> <a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https://twitter.com"><BsTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Abhinav Bhowmik. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer