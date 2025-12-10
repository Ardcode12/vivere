import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './EventCard.css';

const EventCard = ({ event, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={`event-card ${event.type.toLowerCase()}`}
      data-aos="fade-up"
      data-aos-delay={delay}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      {/* 🔽 New Image Section Added */}
      {event.image && (
        <div className="event-image-container">
          <img src={event.image} alt={event.name} className="event-image" />
        </div>
      )}

      <div className="event-card-header">
        <span className="event-type-badge">{event.type}</span>
      </div>
      
      <div className="event-card-body">
        <h3 className="event-name">{event.name}</h3>
        <p className="event-description">{event.description}</p>
        
        <div className="event-meta">
          <div className="meta-item">
            <FaCalendar />
            <span>{event.date || 'Coming Soon'}</span>
          </div>
          <div className="meta-item">
            <FaMapMarkerAlt />
            <span>{event.venue || 'TBA'}</span>
          </div>
        </div>
        
        <Link to={`/event/${event.id}`} className="event-link">
          View Details <FaArrowRight />
        </Link>
      </div>
      
      {isHovered && <div className="hover-effect"></div>}
    </motion.div>
  );
};

export default EventCard;
