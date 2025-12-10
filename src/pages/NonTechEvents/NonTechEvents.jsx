import React from 'react';
import { motion } from 'framer-motion';
import EventCard from '../../components/EventCard/EventCard';
import { nonTechEventsData } from '../../data/eventsData';
import './NonTechEvents.css';

const NonTechEvents = () => {
  return (
    <div className="non-tech-events-page">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="page-title">Non-Technical Events</h1>
        <p className="page-subtitle">Survive the Games of the Upside Down</p>
      </motion.div>

      <div className="events-container">
        <div className="events-grid">
          {nonTechEventsData.map((event, index) => (
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

export default NonTechEvents;
