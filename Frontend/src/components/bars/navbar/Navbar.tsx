import './Navbar.css';

import React from "react";
import { Button, Input} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LogOutIcon from '@mui/icons-material/Logout';
import GroupIcon from '@mui/icons-material/Group';
import { useAuth } from '../../../api/AuthContext';

import { useNavigate } from 'react-router-dom';



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
    const navigate = useNavigate();
    const isAuth = localStorage.getItem('is_authenticated');
    const userId = localStorage.getItem('userId');
    const { logout } = useAuth();



    return (
        <nav className="navbar">
            <div className="navbar-left">
                {isAuth == 'true' ? (
                    <NavButton icon={<GroupIcon />} onClick={() => navigate('/chat')} />
                ) : (
                    <></>
                )}
                
                <NavButton  icon={<HomeIcon />} onClick={() => navigate('/')} />
            </div>
            <div className="navbar-right">
                {isAuth == 'true' ? (
                    userId ? (
                        `My Id: ${userId}`
                    ) : ( '' )) : null}

                {isAuth == 'true' ? (
                    <NavButton icon={<LogOutIcon />} onClick={logout} 
                    />
                ) : null}
            </div>
        </nav>
    );
};


export default Navbar;