import api from './api';

export const contactService = {
    getAllContacts: async (params = {}) => {
        const response = await api.get('/admin/contacts', { params });
        return response.data;
    },

    getContactById: async (id) => {
        const response = await api.get(`/admin/contacts/${id}`);
        return response.data;
    },

    updateContactStatus: async (id, status) => {
        const response = await api.put(`/admin/contacts/${id}/status`, {
            status,
        });
        return response.data;
    },

    markAsSpam: async (id, isSpam) => {
        const response = await api.put(`/admin/contacts/${id}/spam`, {
            isSpam,
        });
        return response.data;
    },

    deleteContact: async (id) => {
        const response = await api.delete(`/admin/contacts/${id}`);
        return response.data;
    },

    getStats: async () => {
        const response = await api.get('/admin/contacts/stats');
        return response.data;
    },
};
