import '../styles/Chat.css';
import React, { useState, useEffect } from 'react';
import { Fade , Button } from '@mui/material';

interface CarouselProps {
    images: string[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
}

const LandingPageCarousel: React.FC<CarouselProps> = ({ images, autoPlay = true, autoPlayInterval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        if (autoPlay) {
            const interval = setInterval(nextSlide, autoPlayInterval);
            return () => clearInterval(interval);
        }
    }, [autoPlay, autoPlayInterval]);
    return (
        <div className="carousel" >
            <Button onClick={prevSlide}>Previous</Button>
            {images.map((image, index) => (
                <Fade  key={index} in={index === currentIndex} timeout={500}>
                    <img src={image} alt="carousel" style={{ display: index === currentIndex ? 'block' : 'none' }} />
                </Fade >
            ))}
            <Button onClick={nextSlide}>Next</Button>
        </div>
    );
};

export default LandingPageCarousel;