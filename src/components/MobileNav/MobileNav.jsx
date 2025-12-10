import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTimes, FaHome, FaLaptopCode, FaGamepad, FaInfoCircle, FaPhone } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './MobileNav.css';

const MobileNav = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleNavClick = (path, hash) => {
    if (hash) {
      // If there's a hash, navigate to home first then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    onClose();
  };

  const menuItems = [
    { path: '/', label: 'Home', icon: <FaHome />, isLink: true },
    { path: '/tech-events', label: 'Tech Events', icon: <FaLaptopCode />, isLink: true },
    { path: '/non-tech-events', label: 'Non-Tech Events', icon: <FaGamepad />, isLink: true },
    { path: '/', label: 'About', icon: <FaInfoCircle />, hash: '#about' },
    { path: '/', label: 'Contact', icon: <FaPhone />, hash: '#contact' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="mobile-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.nav 
            className="mobile-nav"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <button className="close-btn" onClick={onClose}>
              <FaTimes />
            </button>
            
            <div className="mobile-nav-header">
              <h2>MENU</h2>
            </div>
            
            <ul className="mobile-nav-links">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.path + item.label}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.hash ? (
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.path, item.hash);
                      }}
                    >
                      <span className="nav-icon">{item.icon}</span>
                      <span className="nav-label">{item.label}</span>
                    </a>
                  ) : (
                    <Link to={item.path} onClick={onClose}>
                      <span className="nav-icon">{item.icon}</span>
                      <span className="nav-label">{item.label}</span>
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
