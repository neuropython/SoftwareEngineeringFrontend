import '../styles/LandingPage.css';
import React, { useState, useEffect } from 'react';
import LandingPageCarousel from '../components/landing-page-components/LandingPageCarousel';
import Features from '../components/feature/Feature';

const featuresData = [
    {
        title: "Mood Tracking",
        description: "Track your mood and emotions to understand how you feel over time.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Journaling",
        description: "Write about your day and reflect on your thoughts and feelings.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Meditation",
        description: "Practice mindfulness and meditation to help reduce stress and anxiety.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Community",
        description: "Connect with others who are going through similar experiences.",
        image: "https://via.placeholder.com/150"
    }
];


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
                <h1 className="fancy-font">Calm Spectrum</h1>
                <h2 className="landing-page-subheader">Your mental health companion</h2>
            </div>          
        </div>
            <Features features={featuresData} />
    </div>

    );
};

export default LandingPage;