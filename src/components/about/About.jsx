import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FaCertificate } from 'react-icons/fa'
import { AiFillProject } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className='about__me-image'>
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2 months working as intern</small>
            </article>
            <article className='about__card'>
              <FaCertificate className='about__icon' />
              <h5>Certificates</h5>
              <small>Certificate of completion in 3 different companies</small>
            </article>
            <article className='about__card'>
              <AiFillProject className='about__icon' />
              <h5>Projects</h5>
              <small>3 Projects Completed</small>
            </article>
          </div>
          <p>
            Hello my name is Abhinav Bhowmik . I reside in Kolkata. Hardworking and resourceful individual commended for
            first-rate collaboration, organizational and time management abilities. Committed to developing career
            path and expanding work experience. Strong knowledge of coding languages like Java and Python and also
            proficient in web development elements Javascript,Node.js,React and Express.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About