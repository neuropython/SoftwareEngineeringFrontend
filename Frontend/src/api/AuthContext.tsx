// AuthContext.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import  loginClient from '../api/auth/login';
import  registerClient from '../api/auth/register';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
 import { useError } from '../components/popups/ErrorContext';


interface AuthContextType {
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    register: (username: string, password: string, email: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
    children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const navigate = useNavigate();
    const UserInformation  = useContext(UserContext);
    const { showError } = useError();

    useEffect(() => {
        const isAuth = localStorage.getItem('is_authenticated');
        if (isAuth === 'true') {
          navigate('/');
        } else {
          localStorage.setItem('is_authenticated', 'false');
        }
    }, []);

    const login = async (username: string, password: string) => {
        const response = await loginClient(username, password);

        if (response.status === 200) {
          response.json()
          .then(data => {
            localStorage.setItem('accessToken', data.accessToken);
          });
          localStorage.setItem('is_authenticated', 'true');
          UserInformation?.getUser();
          navigate('/');
        } else {
          showError(response.statusText);
        }
      };

    const logout = () => {
        localStorage.setItem('is_authenticated', 'false');
        UserInformation?.logoutUser();
        navigate('/login');
    };

    const register = async (username: string, password: string, email: string) => {
      const response = await registerClient(username, password, email);
      console.log(response);
      if (response.ok) {
        navigate('/login');
      } else {
        const text = await response.text();
        console.log(text);
        showError(text);  
      }
  };
    return (
        <AuthContext.Provider value={{login, logout, register}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };