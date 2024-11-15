import React from 'react';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

interface NavButtonProps {
    text: string;
    icon?: React.ReactNode;
    onClick: () => void;
    variant?: 'text' | 'outlined' | 'contained';
}

const NavButton: React.FC<NavButtonProps> = ({ text, icon, onClick, variant = 'text' }) => {
    return (
        <Button
            variant={variant}
            startIcon={icon}
            onClick={onClick}
        >
            {text}
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
        </nav>
    );
};


export default Navbar;
    