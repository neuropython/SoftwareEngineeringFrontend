import '../styles/Chat.css';
import React from 'react';
import { Slide } from '@mui/material';


interface CarouselProps {
    images: string[];
}

const LandingPageCarousel: React.FC<CarouselProps> = ({ images }) => {
    return (
        <div className="carousel">
            {images.map((image, index) => (
                <Slide key={index} in={true} direction="right" timeout={500}>
                    <img src={image} alt="carousel" />
                </Slide>
            ))}
        </div>
    );
};

export default LandingPageCarousel;