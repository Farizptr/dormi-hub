'use client'

import { createContext, useState, ReactNode } from 'react';

interface AuthData {
    id: string;
    username: string;
    role: number;
};

export interface AuthContextProps {
    auth: AuthData;
    setAuth: React.Dispatch<React.SetStateAction<AuthData>>
}

export const AuthContext = createContext<AuthContextProps>({
    auth: {
        id: '',
        username: '',
        role: 0
    },
    setAuth: () => {}
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [auth, setAuth] = useState<AuthData>({
        id: '',
        username: '',
        role: 0
    });

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}