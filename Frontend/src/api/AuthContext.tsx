// AuthContext.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import  loginClient from '../api/auth/login';
import { useNavigate } from 'react-router-dom';


interface AuthContextType {
    isAuthenticated: boolean;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
    children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const authStatus = localStorage.getItem('is_authenticated') ?? 'false'; 
        setIsAuthenticated(authStatus === 'true');
    }, []);

    const login = async (username: string, password: string) => {
        const response = await loginClient(username, password);
        if (response.status === 200) {

          localStorage.setItem('is_authenticated', 'true');
          setIsAuthenticated(true);
          navigate('/');
    

        } else {
          throw new Error('Invalid credentials');
        }
      };

    const logout = () => {
        localStorage.removeItem('is_authenticated');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
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