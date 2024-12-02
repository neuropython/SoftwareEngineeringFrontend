import React, { useState, useEffect } from 'react';
import '../styles/AboutPage.css';
import Features from '../components/feature/Feature';
import { Slide } from '@mui/material';

const AboutUs = [
    {
        title: "Our Mission",
        description: "Our mission is to provide a platform for people to connect with mental health professionals and receive the help they need.",
        image: "https://via.placeholder.com/250"
    },
    {
        title: "Our Team",
        description: "Our team is composed of dedicated individuals who are passionate about mental health and helping others. We are committed to providing a safe and supportive environment for our users.",
        image: "https://via.placeholder.com/250"
    },
    {
        title: "Contact Us",
        description: "If you have any questions or concerns, please feel free to contact us at",
        image: "https://via.placeholder.com/250"
    }
];


const AboutPage: React.FC = () => {
    return (
        <div>
            <div className = 'fancy-font about-page-header'>Calm spectrum</div>        
            <Slide 
                direction="right" 
                in={true} 
                timeout={2000} 
                mountOnEnter 
                unmountOnExit
            >
                <div>
                    <Features features={AboutUs} />
                </div>
            </Slide>
        </div>

    );
};

export default AboutPage;

