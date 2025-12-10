import React from 'react';
import { motion } from 'framer-motion';
import EventCard from '../../components/EventCard/EventCard';
import { techEventsData } from '../../data/eventsData';
import './TechEvents.css';

const TechEvents = () => {
  return (
    <div className="tech-events-page">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="page-title">Technical Events</h1>
        <p className="page-subtitle">Challenge Your Mind in the Digital Dimension</p>
      </motion.div>

      <div className="events-container">
        <div className="events-grid">
          {techEventsData.map((event, index) => (
            <EventCard 
              key={event.id} 
              event={event}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechEvents;
