import api from './api';

export const authService = {
    register: async (email, password, name) => {
        const response = await api.post('/admin/auth/register', {
            email,
            password,
            name,
        });
        if (response.data.token) {
            localStorage.setItem('adminToken', response.data.token);
            localStorage.setItem('admin', JSON.stringify(response.data.admin));
        }
        return response.data;
    },

    login: async (email, password) => {
        const response = await api.post('/admin/auth/login', {
            email,
            password,
        });
        if (response.data.token) {
            localStorage.setItem('adminToken', response.data.token);
            localStorage.setItem('admin', JSON.stringify(response.data.admin));
        }
        return response.data;
    },

    logout: () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('admin');
    },

    verifyToken: async () => {
        const response = await api.get('/admin/auth/verify');
        return response.data;
    },

    getCurrentAdmin: () => {
        const admin = localStorage.getItem('admin');
        return admin ? JSON.parse(admin) : null;
    },

    isLoggedIn: () => {
        return !!localStorage.getItem('adminToken');
    },
};
