import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaCalendar,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaArrowLeft,
} from 'react-icons/fa';
import { getAllEvents } from '../../data/eventsData';
import './EventDetails.css';

const EventDetails = () => {
  const { id } = useParams();
  const event = getAllEvents().find((e) => e.id === parseInt(id));

  if (!event) {
    return <div className="error-page">Event not found</div>;
  }

  // 🔽 Map each event ID or name to its unique Google Form URL
  const formLinks = {
    1: "https://forms.gle/4aTLTdXzYZvHevS18",
    2: "https://forms.gle/QMqpP4red1gLtR4K8",
    3: "https://forms.gle/YTgYRaraj1J6cQ9q6",
    4: "https://forms.gle/UNP8wBgcrF7b7yfZA",
    5: "https://forms.gle/quQZe2ExEaX2TEwR9",
  };

  // fallback form (optional)
  const handleRegisterClick = () => {
    const targetForm = formLinks[event.id] || "https://forms.gle/default_form";
    window.open(targetForm, "_blank");
  };

  return (
    <div className="event-details-page">
      <Link
        to={event.type === 'Technical' ? '/tech-events' : '/non-tech-events'}
        className="back-button"
      >
        <FaArrowLeft /> Back to Events
      </Link>

      <motion.div
        className="event-details-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="event-header">
          <h1 className="event-title">{event.name}</h1>
          <span className={`event-badge ${event.type.toLowerCase()}`}>
            {event.type}
          </span>
        </div>

        <div className="event-info-grid">
          <div className="info-card" data-aos="fade-up">
            <FaCalendar className="info-icon" />
            <div>
              <h3>Date</h3>
              <p>{event.date || 'Coming Soon'}</p>
            </div>
          </div>

          <div className="info-card" data-aos="fade-up" data-aos-delay="100">
            <FaClock className="info-icon" />
            <div>
              <h3>Time</h3>
              <p>{event.time || '10:00 AM'}</p>
            </div>
          </div>

          {/* <div className="info-card" data-aos="fade-up" data-aos-delay="200">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Venue</h3>
              <p>{event.venue || 'Main Auditorium'}</p>
            </div>
          </div> */}

          <div className="info-card" data-aos="fade-up" data-aos-delay="300">
            <FaUsers className="info-icon" />
            <div>
              <h3>Team Size</h3>
              <p>{event.teamSize || '1–4 Members'}</p>
            </div>
          </div>
        </div>

        <div className="event-content">
          <section className="content-section" data-aos="fade-up">
            <h2>About the Event</h2>
            <p>{event.fullDescription || event.description}</p>
          </section>

          <section className="content-section" data-aos="fade-up">
            <h2>Rules & Regulations</h2>
            <ul className="rules-list">
              {(event.rules &&
                event.rules.map((rule, index) => <li key={index}>{rule}</li>)) || (
                <>
                  <li>Participants must register before the deadline.</li>
                  <li>College ID card is mandatory.</li>
                  <li>Follow the code of conduct.</li>
                  <li>Decision of judges will be final.</li>
                </>
              )}
            </ul>
          </section>

          <section className="content-section" data-aos="fade-up">
            <h2>Contact</h2>
            <div className="contact-cards">
              <div className="contact-card">
                <h4>{event.coordinator1?.name || 'John Doe'}</h4>
                <p>{event.coordinator1?.phone || '+91 98765 43210'}</p>
              </div>
              <div className="contact-card">
                <h4>{event.coordinator2?.name || 'Jane Smith'}</h4>
                <p>{event.coordinator2?.phone || '+91 87654 32109'}</p>
              </div>
            </div>
          </section>

          {/* 🔽 Register Now → event-specific Google Form */}
          <motion.button
            className="register-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRegisterClick}
          >
            Register Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default EventDetails;
