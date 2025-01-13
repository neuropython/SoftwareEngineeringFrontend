import { createContext, ReactNode } from "react";
import currentUser from "./user/me";

interface UserContextType{
    logoutUser: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
    children: ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const logoutUser = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
    };
    return (
        <UserContext.Provider value={{logoutUser}}>
            {children}
        </UserContext.Provider>
    );
};

    