import React from 'react'
import './contact.css';
import {GrMail} from 'react-icons/gr'
import {FaWhatsappSquare} from 'react-icons/fa'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7tey2pj', 'template_pw37rqg', form.current, '9aympfDM8Uokwgzam')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className='container contact_container'>
        <div className='contact-options'>
          <article className='contact-option'>
            <GrMail className='icons'/>
          <h4>Email</h4>
          <h5>shivamchaudhary75@gmail.com</h5>
          <a href="mailto:shivamchaudhary75@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact-option'>
            <FaWhatsappSquare className='icons'/>
          <h4>WhatsApp</h4>
          <h5 id="contact-phone">+91 9169235786</h5>
          <a href="https://api.whatsapp.com/send?phone=9169235786" target='_blank'>Send a message</a>
          </article>


        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name='email' placeholder='Your email' required/>
          <textarea name="message" rows="7" placeholder='Your message here' required></textarea>
          <button type='submit' name='message' value="send" className='btn btn-primary'>Send Message</button>
          
        </form>
        
      </div>
    </section>
  )
}
