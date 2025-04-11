import React, { useEffect, useState } from 'react';
import './Hero.css';
import { SquareArrowOutUpRight, MailIcon } from 'lucide-react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    let timeOut;

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        timeOut = setTimeout(() => {
          setScrolled(false);
        }, 4000);
      }
    };

    timeOut = setTimeout(() => {
      setScrolled(false);
    }, 4000);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeOut);
    };
  }, []);

  useEffect(() => {
    const initAOS = () => {
      Aos.init({
        once: false,
        offset: 10,
      });
    };
    initAOS();
    window.addEventListener('resize', initAOS);
    return () => window.removeEventListener('resize', initAOS);
  }, []);

  return (
    <section className='flex-center hero__section' id='Home'>
      <article className='flex-center container'>
        <div className='flex-column hero__text-container'>
          <h1 className='hero__title' data-aos='fade-down' data-aos-duration='600'>
            web{' '}
            <span>
              Devel
              <img src='./banner-img.png' alt='' className='profile__img' />
              per
            </span>
            <br />
            UI Designer <div className='hero__separator'></div> Tech Enthusiast
          </h1>
          <p className='hero__paragraph' data-aos='fade-up' data-aos-duration='1000'>
            Commited to creating innovative, functional and easy-to-use products to help
            people turning their ideas into digital experiences.
          </p>
          <aside
            className='flex-center hero__btns-container'
            data-aos='fade-up'
            data-aos-duration='1200'
          >
            <a href='#Portfolio' className='primary__btn'>
              Projects <SquareArrowOutUpRight className='icon' />
            </a>
            <a href='#Contact' className='flex-center primary__btn'>
              Contact <MailIcon className='icon' />
            </a>
          </aside>
          <div className={`flex-column scroll__down ${scrolled ? 'disable' : ''}`}>
            <img src='./scroll-down.gif' alt='' />
            <p>Scroll Down</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
