// AuthContext.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import  loginClient from '../api/auth/login';
import  registerClient from '../api/auth/register';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';


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
          throw response;
        }
      };

    const logout = () => {
        localStorage.removeItem('is_authenticated');
        UserInformation?.logoutUser();
    };

    const register = async (username: string, password: string, email: string) => {
        const response = await registerClient(username, password, email);
        if (response.status === 201) {
          navigate('/login');
        } else {
          throw response;
        }

    }
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