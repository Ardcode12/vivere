import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import MobileNav from '../MobileNav/MobileNav';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="navbar">
          <Link to="/" className="logo">
          <img src="/images/college_logo.png" alt="College Logo" className="college-logo" />
            <span className="logo-text">VIVERE</span>
            <span className="logo-accent">2026</span>
          </Link>
          
          <ul className="nav-links desktop-nav">
            <li><Link to="/">Home</Link></li>
            <li><a onClick={() => scrollToSection('about')} style={{cursor: 'pointer'}}>About</a></li>
            <li className="dropdown">
              <span>Events</span>
              <div className="dropdown-menu">
                <Link to="/tech-events">Technical Events</Link>
                <Link to="/non-tech-events">Non-Technical Events</Link>
              </div>
            </li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            {mobileNavOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </header>
      
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  );
};

export default Header;
