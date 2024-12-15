import React, {useContext} from "react";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './LoginBar.css';
import { AuthContext } from '../../../api/AuthContext';

interface LoginButtonProps {
    text: string;
    onClick: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ text, onClick }) => {
    return (
        <Button
            variant="contained"
            onClick={onClick}
            id="login-button"
        >
            {text}
        </Button>
    );
};

const LoginBar: React.FC = () => {
    const navigate = useNavigate();
    const isAuth = localStorage.getItem('is_authenticated');
    return (
        <>
            {isAuth == 'false' ? (
                <div className="login-bar">
                    <LoginButton text="Login" onClick={() => navigate('/login')} />
                    <LoginButton text="Sign Up" onClick={() => navigate('/register')} />
                </div>
            ): (
                <></>
            )}
        </>
    );
};


export default LoginBar;