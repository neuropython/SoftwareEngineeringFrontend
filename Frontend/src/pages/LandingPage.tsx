import '../styles/Navbar.css';
import React from 'react';
import  LandingPageCarousel  from '../components/LandingPageCarousel';

const LandingPage: React.FC = () => {
    return (
        <div className="landing-page">
                <LandingPageCarousel images={["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"]} />
                <div className="landing-page-header-text">
                </div>          
        </div>
    );
};

export default LandingPage;