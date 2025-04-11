import React, { useRef, useState } from 'react';
import { Share2, User, AtSign, MessageSquareMore, Mail, Smartphone } from 'lucide-react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Sending...',
      html: 'Please wait while we send your message',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    emailjs
      .sendForm('service_272gaat', 'template_i3z4bv3', form.current, {
        publicKey: 'buOi1Jgl7vKM4jKdE',
      })
      .then(
        () => {
          Swal.fire({
            title: 'Message Sent...',
            icon: 'success',
            text: 'Your message has been sent successfully',
            timer: 2000,
            timerProgressBar: true,
          });

          form.current.reset();
        },
        (error) => {
          Swal.fire({
            title: 'Error!!!',
            icon: 'error',
            text: "We couldn't send your message, please try again...",
            timer: 2000,
            timerProgressBar: true,
          });
        }
      );
  };

  return (
    <section className='flex-center site__contact' id='Contact'>
      <article className='flex-column container'>
        <div
          className='flex-column section__subtitle'
          data-aos='fade-up'
          data-aos-duration='700'
        >
          <h2 className='subtitle'>Contact Me</h2>
          <p>Got a question? Send a message and I'll get back to you soon.</p>
        </div>
        <div className='flex-column contact__content' data-aos='fade-up'>
          <div
            className='flex-center contact__title'
            data-aos='fade-up'
            data-aos-delay='50'
            data-aos-duration='900'
          >
            <h3>Get In Touch</h3>
            <Share2 className='contact__title-icon' />
          </div>
          <div className='flex-center form__content'>
            <div className='flex-center form__container'>
              <form ref={form} onSubmit={sendEmail} className='flex-column form'>
                <div
                  className='flex-center input-field'
                  data-aos='fade-up'
                  data-aos-duration='900'
                >
                  <User className='input__icon' />
                  <input
                    type='text'
                    name='user_name'
                    placeholder='Your Name'
                    autoComplete='off'
                    required
                  />
                </div>
                <div
                  className='flex-center input-field'
                  data-aos='fade-up'
                  data-aos-duration='900'
                >
                  <AtSign className='input__icon' />
                  <input
                    type='email'
                    name='user_email'
                    placeholder='Your Email'
                    autoComplete='off'
                    required
                  />
                </div>
                <div
                  className='flex-center input-field'
                  data-aos='fade-up'
                  data-aos-duration='900'
                >
                  <MessageSquareMore className='input__icon' />
                  <textarea
                    placeholder='Your Message'
                    rows='6'
                    name='message'
                    required
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='form__btn'
                  data-aos='fade-up'
                  data-aos-duration='900'
                  data-aos-anchor='bottom-bottom'
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className='separator'></div>
            <div className='social__container'>
              <h5>Connect with Me</h5>
              <div
                className='flex-center input-field'
                data-aos='fade-up'
                data-aos-duration='900'
              >
                <Mail className='social__icon' />
                <h6>michaelvega46@gmail.com</h6>
              </div>
              <div className='flex-center social__content'>
                <div
                  className='flex-center input-field'
                  data-aos='fade-up'
                  data-aos-duration='900'
                >
                  <Smartphone className='social__icon' />
                  <h6>+50660488396</h6>
                </div>
                <a
                  href='https://www.behance.net/michaelvega12'
                  target='_blank'
                  className='flex-center input-field'
                  data-aos='fade-up'
                  data-aos-duration='900'
                >
                  <img src='./Benhance.png' alt='' className='social__icon' />
                  <h6>Behance</h6>
                </a>
                <a
                  href='https://www.linkedin.com/in/mikequeve/'
                  target='_blank'
                  className='flex-center input-field'
                  data-aos='fade-up'
                  data-aos-duration='900'
                >
                  <img src='./Linkedin.png' alt='' className='social__icon' />
                  <h6>Linkedin</h6>
                </a>
                <a
                  href='https://github.com/mikequeve'
                  target='_blank'
                  className='flex-center input-field'
                  data-aos='fade-up'
                  data-aos-duration='900'
                >
                  <img src='./Github.png' alt='' className='social__icon' />
                  <h6>Github</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contact;
