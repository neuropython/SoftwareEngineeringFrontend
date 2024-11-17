import '../styles/Navbar.css';

import React from 'react';
import { Button, Input} from '@mui/material';
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

const NavButton: React.FC<NavButtonProps> = ({ text, icon, onClick, profilePicture, variant = 'text'}) => {
    return (
        <Button
            variant={variant}
            onClick={onClick}
            id="nav-button"

        >
            <span className="nav-button-icon">
            {profilePicture ? <img src={profilePicture} alt="Profile" style={{ width: 36, height: 36, borderRadius: '50%' }} /> : icon}
            </span>
            {text}
        </Button>
    );
};

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <NavButton  icon={<HomeIcon />} onClick={() => console.log('Home')} />
            </div>
            <div  className="navbar-center">
                <Input placeholder="Search..." className="search-bar" />
                <NavButton  icon={<SearchIcon />} onClick={() => console.log('Search')} />
            </div>
            <div className="navbar-right">
                <NavButton  icon={<NotificationsIcon />} onClick={() => console.log('Notifications')} />
                <NavButton  icon={<SettingsIcon />} onClick={() => console.log('Settings')} />
                <NavButton  profilePicture='https://avatars.githubusercontent.com/u/128989743?s=96&v=4' onClick={() => console.log('Home')} />
            </div>
        </nav>
    );
};


export default Navbar;