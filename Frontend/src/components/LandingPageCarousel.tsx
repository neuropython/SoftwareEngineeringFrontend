import '../styles/Chat.css';
import React, { useState, useEffect } from 'react';
import { Fade , Button } from '@mui/material';

interface CarouselProps {
    images: string[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
}

const LandingPageCarousel: React.FC<CarouselProps> = ({ images, autoPlay = true, autoPlayInterval = 4000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };


    useEffect(() => {
        if (autoPlay) {
            const interval = setInterval(nextSlide, autoPlayInterval);
            return () => clearInterval(interval);
        }
    }, [autoPlay, autoPlayInterval]);
    return (
        <div className="carousel" >
            {images.map((image, index) => (
                <Fade  key={index} in={index === currentIndex} timeout={1000}>
                    <img src={image} alt="carousel" style={{ display: index === currentIndex ? 'block' : 'none' }} />
                </Fade >
            ))}
        </div>
    );
};

export default LandingPageCarousel;