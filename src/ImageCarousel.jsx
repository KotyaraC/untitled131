import React, { useState } from 'react';
import './ImageCarousel.css';

const images = [
    'https://cdn3.riastatic.com/photosnew/auto/photo/dodge_challenger__554462399fx.jpg',
    'https://i.gaw.to/content/photos/52/56/525636-dodge-challenger-d-occasion-quelle-version-choisir.jpeg',
    'https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2023/challenger/gallery/exterior/MY23_Challenger_Gallery_01.jpg',
];

function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="carousel-container">
            <img src={images[currentIndex]} alt="Картинка" className="carousel-image" />
            <button onClick={nextImage} className="next-button">
                Наступне
            </button>
        </div>
    );
}

export default ImageCarousel;
