import '../styles/LandingPage.css';
import React, { useState, useEffect } from 'react';
import LandingPageCarousel from '../components/landing-page-components/LandingPageCarousel';
import LandingPageHero from '../components/landing-page-components/LandingPageHero';

const LandingPage: React.FC = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1400);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); 

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="landing-page">
        <div className="landing-page-intro">
            {!isSmallScreen && (
                <div className="landing-page-carousel">
                    <LandingPageCarousel images={["https://via.placeholder.com/750", "https://via.placeholder.com/750", "https://via.placeholder.com/750"]} />
                </div>
            )}
            <div className="landing-page-header-text">
                <img src="https://via.placeholder.com/100" alt="logo" />
                <h1 className="landing-page-header">Calm Spectrum</h1>
                <h2 className="landing-page-subheader">Your mental health companion</h2>
            </div>          
        </div>
        <LandingPageHero />
    </div>

    );
};

export default LandingPage;