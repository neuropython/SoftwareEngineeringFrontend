import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';

import './LandingPageHero.css';


const LandingPageHero = () => {
    return (
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
    )
}

export default LandingPageHero;