import React, { useRef } from 'react';
import './contact.css';
import walmart from '../../assets/walmart.png';
import adobe from '../../assets/adobe.png';
import microsoft from '../../assets/microsoft.png';
import facebook from '../../assets/facebook.png';
import facebook_icon from '../../assets/facebook-icon.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';
import instagram from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm('service_koa76xk', 'template_bu9oikh', form.current, 'FU9LrsL9mlINbXU--6xrM');
      console.log(result.text);
      e.target.reset();
      alert('Email Sent!');
    } catch (error) {
      console.log(error.text);
      alert('Error sending email. Please try again later.');
    }
  };

  return (
    <section className='contactPage'>
      <div id="clients">
        <h1 className="myClientTittle">My Clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked with include
        </p>
        <div className="clientImgs">
          <img src={walmart} alt="walmart" className="clientImg" />
          <img src={adobe} alt="adobe" className="clientImg" />
          <img src={microsoft} alt="microsoft" className="clientImg" />
          <img src={facebook} alt="facebook" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTittle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your Name' name='your_name' required />
          <input type="email" className="email" placeholder='Your Email' name='your_email' required />
          <textarea className='msg' name="message" rows="5" placeholder='Your Message' required></textarea>
          <button type='submit' className="submitBtn">Submit</button>
          <div className="links">
            <img src={facebook_icon} alt="facebook_icon" className="link" />
            <img src={twitter} alt="twitter" className="link" />
            <img src={youtube} alt="youtube" className="link" />
            <img src={instagram} alt="instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
