import { createContext, ReactNode } from "react";
import currentUser from "./user/me";

interface UserContextType{
    getUser: () => Promise<void>;
    logoutUser: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
    children: ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const getUser = async () => {
        const response = await currentUser();
        if (response.status === 200) {
            response.json()
            .then(data => {
                localStorage.setItem('userId', data.id);
                localStorage.setItem('userName', data.username);
                localStorage.setItem('userEmail', data.email);
            });
        } else {
            throw response;
        }
    };
    const logoutUser = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
    };
    return (
        <UserContext.Provider value={{getUser, logoutUser}}>
            {children}
        </UserContext.Provider>
    );
};

    