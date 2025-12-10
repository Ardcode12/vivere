import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import TechEvents from './pages/TechEvents/TechEvents';
import NonTechEvents from './pages/NonTechEvents/NonTechEvents';
import EventDetails from './pages/EventDetails/EventDetails';
import Footer from './components/Footer/Footer';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';

import { shouldShowLoading, setLastVisit } from './utils/storage';

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100
    });

    // Always show loading screen for now
    const shouldShow = shouldShowLoading();
    if (shouldShow) {
      setLastVisit();
      setTimeout(() => setShowLoading(false), 4000); // 4 seconds loading time
    } else {
      setShowLoading(false);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        {showLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <ParticlesBackground />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tech-events" element={<TechEvents />} />
              <Route path="/non-tech-events" element={<NonTechEvents />} />
              <Route path="/event/:id" element={<EventDetails />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
