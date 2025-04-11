import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { AlignJustify, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: '#Home', label: 'Home' },
    { href: '#About', label: 'About' },
    { href: '#Portfolio', label: 'Portfolio' },
    { href: '#Contact', label: 'Contact' },
    { href: '#Certificates', label: 'Certificates' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      const top = section.offsetTop - 100;
      window.scrollTo({
        top: top,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`flex-center navbar ${scrolled ? 'scrolled' : ''}`}>
        <article className='flex-center container'>
          <a href='/' className='navbar__logo'>
            <img src='./logo-white.svg' alt='mike.vega logo' />
          </a>
          <nav className={`flex-center navbar__nav ${isOpen ? 'active' : ''}`}>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className='navbar__nav-item'
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div
            className='flex-center menu__btn-container'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <AlignJustify />}
          </div>
        </article>
      </header>
    </>
  );
};

export default Navbar;
