import React from 'react';
import './VideoBackground.css';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <div className="video-overlay"></div>
      <video autoPlay loop muted playsInline className="background-video">
        {/* Use your local video file */}
        <source src="/videos/background.mp4" type="video/mp4" />
        
        {/* Add multiple formats for better browser compatibility */}
        <source src="/videos/background.webm" type="video/webm" />
        <source src="/videos/background.ogv" type="video/ogg" />
        
        {/* Fallback text */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
