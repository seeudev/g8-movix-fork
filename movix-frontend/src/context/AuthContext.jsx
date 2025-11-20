import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

// 1. Create the Context
const AuthContext = createContext(null);

// 2. Custom hook to use the Auth context
export const useAuth = () => {
    return useContext(AuthContext);
};

// 3. Auth Provider Component
export const AuthProvider = ({ children }) => {
    // State to track login status
    const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('userToken'));
    const navigate = useNavigate();

    // Function called by Login component on success
    const login = () => {
        setIsLoggedIn(true);
    };

    // Function called by Navbar or Logout component
    const logout = () => {
        localStorage.removeItem('userToken');
        localStorage.removeItem('userEmail');
        setIsLoggedIn(false);
        // Immediately redirect to login after logging out
        navigate('/login', { replace: true });
    };

    // UseMemo ensures the context value is stable
    const value = useMemo(() => ({
        isLoggedIn,
        login,
        logout,
    }), [isLoggedIn]);

    // Cleanup: Listen for storage changes in case of cross-tab sync
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