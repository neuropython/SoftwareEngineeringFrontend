import '../styles/LandingPage.css';
import React, { useState, useEffect } from 'react';
import LandingPageCarousel from '../components/LandingPageCarousel';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const LandingPage: React.FC = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1000);
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
                    <LandingPageCarousel images={["https://via.placeholder.com/500", "https://via.placeholder.com/500", "https://via.placeholder.com/500"]} />
                </div>
            )}
            <div className="landing-page-header-text">
                <img src="https://via.placeholder.com/100" alt="logo" />
                <h1 className="landing-page-header">Calm Spectrum</h1>
                <h2 className="landing-page-subheader">Your mental health companion</h2>
            </div>          
        </div>
        <div className="landing-page-features">
            <div className="landing-page-feature">
                <img src="https://via.placeholder.com/200" alt="feature" />
                <Accordion >
                    <AccordionSummary
                    aria-controls="panel1a-content" 
                    >
                        <h3>Chat with your friends!</h3>
                    </AccordionSummary>
                    <AccordionActions>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </AccordionActions>
                </Accordion>
            </div>
            <div className="landing-page-feature">
                <img src="https://via.placeholder.com/200" alt="feature" />
                <Accordion>
                    <AccordionSummary
                    aria-controls="panel2a-content" 
                    >
                        <h3>AI-Powered Message Translation</h3>
                    </AccordionSummary>
                    <AccordionActions>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </AccordionActions>
                </Accordion>
            </div>
            <div className="landing-page-feature">
                <img src="https://via.placeholder.com/200" alt="feature" />
                <Accordion>
                    <AccordionSummary
                    aria-controls="panel3a-content" 
                    >
                        <h3>Enhanced Accessibility</h3>
                    </AccordionSummary>
                    <AccordionActions>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </AccordionActions>
                </Accordion>
            </div>
        </div>
    </div>

    );
};

export default LandingPage;