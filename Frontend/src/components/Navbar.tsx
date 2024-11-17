import '../styles/Navbar.css';

import React from 'react';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';

interface NavButtonProps {
    text: string;
    icon?: React.ReactNode;
    profilePicture?: string; 
    onClick: () => void;
    variant?: 'text' | 'outlined' | 'contained';
}

const NavButton: React.FC<NavButtonProps> = ({ text, icon, onClick, profilePicture, variant = 'text' }) => {
    return (
        <Button
            variant={variant}
            startIcon={profilePicture ? <img src={profilePicture} alt="Profile" style={{ width: 24, height: 24, borderRadius: '50%' }} /> : icon}
            onClick={onClick}
            id="nav-button"
        >
             {text && text}
        </Button>
    );
};

const Navbar: React.FC = () => {
    return (
        <nav>
            <NavButton text="Home" icon={<HomeIcon />} onClick={() => console.log('Home')} />
            <NavButton text="Search" icon={<SearchIcon />} onClick={() => console.log('Search')} />
            <NavButton text="Notifications" icon={<NotificationsIcon />} onClick={() => console.log('Notifications')} />
            <NavButton text="Settings" icon={<SettingsIcon />} onClick={() => console.log('Settings')} />
            <NavButton text="Damian" profilePicture='https://avatars.githubusercontent.com/u/128989743?s=96&v=4' onClick={() => console.log('Home')} />
        </nav>
    );
};


export default Navbar;