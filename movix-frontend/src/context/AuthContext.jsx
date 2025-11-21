import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('userToken'));
    const navigate = useNavigate();

    const login = (token, email) => {
        localStorage.setItem('userToken', token);
        if (email) localStorage.setItem('userEmail', email);
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem('userToken');
        localStorage.removeItem('userEmail');
        setIsLoggedIn(false);
        navigate('/login', { replace: true });
    };

    const value = useMemo(() => ({
        isLoggedIn,
        login,
        logout,
    }), [isLoggedIn]);

    useEffect(() => {
        const handleStorageChange = () => {
            setIsLoggedIn(!!localStorage.getItem('userToken'));
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};