import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { RiMessengerFill } from 'react-icons/ri'
import { IoLogoWhatsapp } from 'react-icons/io'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_869efkh', 'template_swtqgwz', form.current, '-GilX-qS0X8Vuv-LI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>bhowmikabhinav@gmail.com</h5>
            <a href='mailto:bhowmikabhinav@gmail.com' target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerFill className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Abhinav Bhowmik</h5>
            <a href='https://m.me/bonybhownik' target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91-82406365450</h5>
            <a href='https://api.whatsapp.com/send?phone=8240635450' target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>


        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows={7} placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact