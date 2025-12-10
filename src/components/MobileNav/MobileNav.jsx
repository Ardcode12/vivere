import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaHome, FaLaptopCode, FaGamepad, FaInfoCircle, FaPhone } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './MobileNav.css';

const MobileNav = ({ isOpen, onClose }) => {
  const menuItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/tech-events', label: 'Tech Events', icon: <FaLaptopCode /> },
    { path: '/non-tech-events', label: 'Non-Tech Events', icon: <FaGamepad /> },
    { path: '/about', label: 'About', icon: <FaInfoCircle /> },
    { path: '/contact', label: 'Contact', icon: <FaPhone /> }
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
                  key={item.path}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={item.path} onClick={onClose}>
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                  </Link>
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
