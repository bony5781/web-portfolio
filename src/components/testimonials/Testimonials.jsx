import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Employers</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials__container'>
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar 1" />
          </div>
          <h5 className='client__name'>Personal Recommendation</h5>
          <small className='client__review'>
            The student has been a pivotal member of the Marketing Internship Program in the year of Dec’2020.
            Abhinav Bhowmik has been among the top cream students in this program,
            he is not only useful in leadership skills, but he tops in the group as well. Being
            a student leader, he leads by an example and in the absence of the
            motivation among the group, Abhinav Bhowmik assumes the role of peer
            motivator, and he guides the group especially in sales and marketing work.
            He is all rounded student as he is also a star in doing the sales in our team.
          </small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials