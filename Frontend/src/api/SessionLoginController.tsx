import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useError } from '../components/popups/ErrorContext';
import me from "./user/me";

const SessionLoginController = () => {
    const { logout } = useAuth();
    const { showError } = useError();
    

    useEffect(() => {
        const checkUserSession = async () => {
            try {
                const response = await me();
                if (response.status !== 200) {
                    logout();
                    showError('Session expired');
                    
                }
            } catch (error) {
                console.error('Error during session check:', error);
                logout();
                showError('Session expired');
            }
        };

        checkUserSession();

        const intervalId = setInterval(checkUserSession, 60000);

        return () => clearInterval(intervalId);
    }, [logout]);

    return null;
};

export default SessionLoginController;