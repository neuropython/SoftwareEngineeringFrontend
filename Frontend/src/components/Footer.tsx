import '../styles/Footer.css';

import React from 'react';

interface FooterLinkProps {
    text: string;
    href: string;
}


const FooterLink: React.FC<FooterLinkProps> = ({ text, href }) => {
    return (
        <a
        href={href}
        className="footer-link"
        >
            {text}
        </a>
    );
}

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <FooterLink text="About" href="/about" />
                <FooterLink text="How to Use" href="/terms" />
                <FooterLink text="Privacy Policy" href="/privacy" />
            </div>
            <div className="footer-text">
                {new Date().getFullYear()} CalmSpectrum. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;