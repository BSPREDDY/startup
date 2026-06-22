import { useState, useEffect, useCallback } from 'react';
import { authService } from '../services/authService';

export const useAuth = () => {
    const [admin, setAdmin] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const verifyAuth = async () => {
            try {
                if (authService.isLoggedIn()) {
                    const currentAdmin = authService.getCurrentAdmin();
                    setAdmin(currentAdmin);
                    setIsAuthenticated(true);
                }
            } catch {
                console.log('Auth verification failed');
                authService.logout();
            } finally {
                setIsLoading(false);
            }
        };

        verifyAuth();
    }, []);

    const login = useCallback(async (email, password) => {
        setIsLoading(true);
        try {
            const result = await authService.login(email, password);
            setAdmin(result.admin);
            setIsAuthenticated(true);
            return result;
        } finally {
            setIsLoading(false);
        }
    }, []);

    const logout = useCallback(() => {
        authService.logout();
        setAdmin(null);
        setIsAuthenticated(false);
    }, []);

    const register = useCallback(async (email, password, name) => {
        setIsLoading(true);
        try {
            const result = await authService.register(email, password, name);
            setAdmin(result.admin);
            setIsAuthenticated(true);
            return result;
        } finally {
            setIsLoading(false);
        }
    }, []);

    return {
        admin,
        isLoading,
        isAuthenticated,
        login,
        logout,
        register,
    };
};
