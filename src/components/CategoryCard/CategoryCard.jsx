import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import './CategoryCard.css';

const CategoryCard = ({ title, description, link, type, delay }) => {
  return (
    <motion.div
      className={`category-card ${type}`}
      data-aos="fade-up"
      data-aos-delay={delay}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <Link to={link} className="card-link">
          Explore <FaArrowRight />
        </Link>
      </div>
      <div className="card-background"></div>
    </motion.div>
  );
};

export default CategoryCard;
