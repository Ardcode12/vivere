import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendar, FaMapMarkerAlt, FaTrophy, FaUsers } from 'react-icons/fa';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import VideoBackground from '../../components/VideoBackground/VideoBackground';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section with Video Background */}
      <section className="hero">
        <VideoBackground />
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="hero-title" data-aos="fade-up">
            <span className="title-line-1">WELCOME TO</span>
            <span className="title-line-2">VIVERE 2026</span>
            <span className="title-tagline">By Department of Information Technology</span>
          </h1>
          
          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
            The Ultimate College Technical Festival
          </p>

          <div className="hero-date" data-aos="fade-up" data-aos-delay="300">
            <FaCalendar /> JANUARY 3, 2026
          </div>
          
          <motion.div 
            className="hero-stats"
            data-aos="fade-up" 
            data-aos-delay="400"
          >
            <div className="stat">
              <span className="stat-number">5</span>
              <span className="stat-label">Events</span>
            </div>
            <div className="stat">
              <span className="stat-number">80+</span>
              <span className="stat-label">Participants</span>
            </div>
            {/* <div className="stat">
              <span className="stat-number">₹100K+</span>
              <span className="stat-label">Prize Pool</span>
            </div> */}
          </motion.div>

          <motion.div 
            className="hero-cta"
            data-aos="fade-up" 
            data-aos-delay="500"
          >
            <Link to="/tech-events" className="cta-button primary">
              Explore Events
            </Link>
            <a href="#about" className="cta-button secondary">
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <motion.div 
            className="about-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="section-title" data-aos="fade-up">
              <span>About</span>
              <span className="highlight"> VIVERE 2026</span>
            </h2>
          </motion.div>

          <div className="about-content">
            <motion.div 
              className="about-text"
              data-aos="fade-right"
            >
              <p className="about-description">
                VIVERE 2026 is not just an event; it's an experience that transcends the ordinary. 
                Inspired by the mysterious world of Stranger Things, our technical festival brings 
                together the brightest minds to compete, collaborate, and create in an atmosphere 
                where technology meets the supernatural.
              </p>
              <p className="about-description">
                Step into a realm where coding challenges become epic quests, and every competition is a journey into the unknown. 
                With cutting-edge technical events and thrilling non-technical activities, 
                VIVERE 2026 promises an unforgettable adventure.
              </p>
            </motion.div>

            <div className="about-features" data-aos="fade-left">
              <div className="feature-item">
                <div className="feature-icon">🚀</div>
                <h3>Innovation Hub</h3>
                <p>Showcase groundbreaking projects and ideas</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💡</div>
                <h3>Tech Workshops</h3>
                <p>Learn from industry experts and pioneers</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎮</div>
                <h3>Gaming Arena</h3>
                <p>Compete in esports and virtual reality experiences</p>
              </div>
              {/* <div className="feature-item">
                <div className="feature-icon">🏆</div>
                <h3>Grand Prizes</h3>
                <p>Win exciting prizes worth over ₹100,000</p>
              </div> */}
            </div>
          </div>

          
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2 className="section-title" data-aos="fade-up">
          <span>Choose Your</span>
          <span className="highlight">Dimension</span>
        </h2>
        
        <div className="categories-grid">
          <CategoryCard
            title="Technical Events"
            description="Enter the realm of code, and innovation"
            link="/tech-events"
            type="tech"
            delay={0}
          />
          <CategoryCard
            title="Non-Technical Events"
            description="Survive the games and challenges of the upside down"
            link="/non-tech-events"
            type="non-tech"
            delay={200}
          />
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section" data-aos="fade-up">
        <h2 className="section-title">Event Highlights</h2>
        <div className="highlights-grid">
          
          <div className="highlight-card" data-aos="zoom-in" data-aos-delay="200">
            <div className="highlight-icon">🤖</div>
            <h3>tech events</h3>
            <p>Bring your inovation ideas as paper and coding</p>
          </div>
          <div className="highlight-card" data-aos="zoom-in" data-aos-delay="300">
            <div className="highlight-icon">🎨</div>
            <h3>Design Sprint</h3>
            <p>Create a poster with prompts</p>
          </div>
          <div className="highlight-card" data-aos="zoom-in" data-aos-delay="400">
            <div className="highlight-icon">🎪</div>
            <h3>Fun non-tech events </h3>
            <p>A speech context and auction</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
