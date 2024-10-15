import React, { useState } from 'react';
import './VideoGallery.css';

const videos = [
    { title: 'Resident Evil 7: Biohazard |№12| Став мамою і спробував підтримати геморойні пригоди Алана', url: 'https://youtu.be/jMgYOEuAP7g?si=PS1IwIRIPMABGNWg' },
    { title: 'Five Nights at Freddy\'s: Into The Pit |№7| Ми сьогодні тихі', url: 'https://youtu.be/O5NPJmFjbqM?si=wY-PTDmKEPzvgCd-' },
    { title: 'Five Nights at Freddy’s: Security Breach |№17| А голову ти дома не забув?', url: 'https://www.youtube.com/watch?v=lrUcrMm_EHc' },
];

const VideoGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    };

    return (
        <div className="video-gallery">
            <h2 className="video-title">{videos[currentIndex].title}</h2>
            <iframe
                className="video-frame"
                src={videos[currentIndex].url}
                title={videos[currentIndex].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <div className="video-controls">
                <button className="control-button" onClick={handlePrev}>Попереднє</button>
                <button className="control-button" onClick={handleNext}>Наступне</button>
            </div>
        </div>
    );
};

export default VideoGallery;
