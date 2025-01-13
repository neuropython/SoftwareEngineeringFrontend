import '../styles/LandingPage.css';
import React, { useState, useEffect } from 'react';
import LandingPageCarousel from '../components/landing-page-components/LandingPageCarousel';
import Features from '../components/feature/Feature';
import logo from '../assets/LogoCalmSpectrum.svg';
import message from '../assets/message.png';
import rooms from '../assets/rooms.png';
import Ai from '../assets/Ai.png';

const featuresData = [
    {
        title: "Analize messages via AI",
        description: "Our AI will help you understand others and yourself better.",
        image: Ai
    },
    {
        title: "Message your friends",
        description: "Chat with your friends and family to stay connected.",
        image: message
    },
    {
        title: "Create groups",
        description: "Create groups to chat with multiple people at once.",
        image: rooms
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
            <div className="landing-page-header-text">
                <img src={logo} alt="logo" className='logo' />
                <h1 className="fancy-font">Calm Spectrum</h1>
                <h2 className="landing-page-subheader">AI can help you understand your friends better</h2>
            </div>          
        </div>
            <Features features={featuresData} />
    </div>

    );
};

export default LandingPage;