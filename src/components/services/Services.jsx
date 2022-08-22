import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design </h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Custom Web Design & Development</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Mobile app UX & UI design</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Visual Design</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>HTML5 Website Development</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Responsive Design</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Contentful Development</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Creating Blog posts</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Creating original graphics</p>
            </li>
            <li>
            </li>
            <li>
            </li>
            <li>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services