import '../styles/Navbar.css';

import React from 'react';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';

interface NavButtonProps {
    text?: string;
    icon?: React.ReactNode;
    profilePicture?: string; 
    onClick: () => void;
    variant?: 'text' | 'outlined' | 'contained';
}

const NavButton: React.FC<NavButtonProps> = ({ text, icon, onClick, profilePicture, variant = 'text' }) => {
    return (
        <Button
            variant={variant}
            onClick={onClick}
            id="nav-button"

        >
            <span className="nav-button-icon">
            {profilePicture ? <img src={profilePicture} alt="Profile" style={{ width: 24, height: 24, borderRadius: '50%' }} /> : icon}
            </span>
            {text}
        </Button>
    );
};

const Navbar: React.FC = () => {
    return (
        <nav>
            <NavButton  icon={<HomeIcon />} onClick={() => console.log('Home')} />
            <NavButton  icon={<SearchIcon />} onClick={() => console.log('Search')} />
            <NavButton  icon={<NotificationsIcon />} onClick={() => console.log('Notifications')} />
            <NavButton  icon={<SettingsIcon />} onClick={() => console.log('Settings')} />
            <NavButton  profilePicture='https://avatars.githubusercontent.com/u/128989743?s=96&v=4' onClick={() => console.log('Home')} />
        </nav>
    );
};


export default Navbar;