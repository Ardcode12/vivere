import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress simulation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1.5;
      });
    }, 40);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className="loading-screen">
      {/* 🔥 Background Video */}
      <video
        className="loading-video"
        src="/videos/backgroundload.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Overlay gradient */}
      <div className="video-overlay"></div>

      {/* Content */}
      <div className="loading-content">
        <h1 className="loading-title">VIVERE</h1>
        <h2 className="loading-year">2026</h2>

        <div className="loading-bar">
          <div
            className="loading-progress"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="loading-percentage">{Math.floor(progress)}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
