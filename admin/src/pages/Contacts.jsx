import { useEffect, useState } from 'react';
import {
    FiSearch,
    FiFilter,
    FiTrash2,
    FiEye,
    FiCheck,
    FiX,
    FiAlertTriangle,
} from 'react-icons/fi';
import { MainLayout } from '../layouts/MainLayout';
import { contactService } from '../services/contactService';

export const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [selectedContact, setSelectedContact] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchContacts();
    }, [currentPage, statusFilter]);

    const fetchContacts = async () => {
        setIsLoading(true);
        try {
            const params = {
                page: currentPage,
                limit: 10,
                ...(statusFilter && { status: statusFilter }),
            };
            const response = await contactService.getAllContacts(params);
            setContacts(response.contacts);
            setFilteredContacts(response.contacts);
            setTotalPages(response.totalPages);
        } catch (error) {
            console.error('Failed to fetch contacts:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        const filtered = contacts.filter(
            (contact) =>
                contact.name.toLowerCase().includes(value) ||
                contact.email.toLowerCase().includes(value) ||
                contact.message.toLowerCase().includes(value)
        );
        setFilteredContacts(filtered);
    };

    const handleStatusChange = async (contactId, newStatus) => {
        try {
            await contactService.updateContactStatus(contactId, newStatus);
            fetchContacts();
        } catch (error) {
            console.error('Failed to update status:', error);
        }
    };

    const handleMarkSpam = async (contactId, isSpam) => {
        try {
            await contactService.markAsSpam(contactId, isSpam);
            fetchContacts();
        } catch (error) {
            console.error('Failed to mark spam:', error);
        }
    };

    const handleDelete = async (contactId) => {
        if (window.confirm('Are you sure you want to delete this contact?')) {
            try {
                await contactService.deleteContact(contactId);
                fetchContacts();
            } catch (error) {
                console.error('Failed to delete contact:', error);
            }
        }
    };

    const getStatusBadge = (status) => {
        const statusConfig = {
            new: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'New' },
            read: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Read' },
            replied: { bg: 'bg-green-100', text: 'text-green-800', label: 'Replied' },
        };
        const config = statusConfig[status] || statusConfig.new;
        return (
            <span className={`${config.bg} ${config.text} px-3 py-1 rounded-full text-xs font-medium`}>
                {config.label}
            </span>
        );
    };

    return (
        <MainLayout>
            <div className="p-4 md:p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Contacts</h1>

                {/* Filters */}
                <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                        <FiSearch className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by name, email, or message..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                        />
                    </div>

                    <div className="flex items-center space-x-2">
                        <FiFilter className="text-gray-400" />
                        <select
                            value={statusFilter}
                            onChange={(e) => {
                                setStatusFilter(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                        >
                            <option value="">All Status</option>
                            <option value="new">New</option>
                            <option value="read">Read</option>
                            <option value="replied">Replied</option>
                        </select>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                    {isLoading ? (
                        <div className="flex items-center justify-center h-64">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                        </div>
                    ) : filteredContacts.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-600">No contacts found</p>
                        </div>
                    ) : (
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                        Email
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                        Message
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredContacts.map((contact) => (
                                    <tr key={contact._id} className="table-row-hover border-b">
                                        <td className="px-6 py-4 text-sm text-gray-900">{contact.name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{contact.email}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                                            {contact.message}
                                        </td>
                                        <td className="px-6 py-4 text-sm">{getStatusBadge(contact.status)}</td>
                                        <td className="px-6 py-4 text-sm space-x-2 flex items-center">
                                            <button
                                                onClick={() => {
                                                    setSelectedContact(contact);
                                                    setShowModal(true);
                                                }}
                                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                                                title="View details"
                                            >
                                                <FiEye size={18} />
                                            </button>
                                            {contact.status !== 'read' && (
                                                <button
                                                    onClick={() => handleStatusChange(contact._id, 'read')}
                                                    className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg"
                                                    title="Mark as read"
                                                >
                                                    <FiCheck size={18} />
                                                </button>
                                            )}
                                            {!contact.isSpam ? (
                                                <button
                                                    onClick={() => handleMarkSpam(contact._id, true)}
                                                    className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg"
                                                    title="Mark as spam"
                                                >
                                                    <FiAlertTriangle size={18} />
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => handleMarkSpam(contact._id, false)}
                                                    className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg"
                                                    title="Unmark spam"
                                                >
                                                    <FiX size={18} />
                                                </button>
                                            )}
                                            <button
                                                onClick={() => handleDelete(contact._id)}
                                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                                title="Delete"
                                            >
                                                <FiTrash2 size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                {/* Pagination */}
                {!isLoading && totalPages > 1 && (
                    <div className="mt-6 flex items-center justify-between">
                        <button
                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <span className="text-gray-600">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                )}

                {/* Modal */}
                {showModal && selectedContact && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-2xl font-bold text-gray-900">Contact Details</h2>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <FiX size={24} />
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Name</label>
                                    <p className="text-gray-900 mt-1">{selectedContact.name}</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <p className="text-gray-900 mt-1">{selectedContact.email}</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Message</label>
                                    <p className="text-gray-900 mt-1 p-3 bg-gray-50 rounded-lg">
                                        {selectedContact.message}
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Status</label>
                                    <div className="mt-2 flex space-x-2">
                                        {['new', 'read', 'replied'].map((status) => (
                                            <button
                                                key={status}
                                                onClick={() => {
                                                    handleStatusChange(selectedContact._id, status);
                                                    setShowModal(false);
                                                }}
                                                className={`px-3 py-1 rounded-lg text-sm font-medium transition ${selectedContact.status === status
                                                    ? 'bg-blue-600 text-white'
                                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                    }`}
                                            >
                                                {status.charAt(0).toUpperCase() + status.slice(1)}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Received Date
                                    </label>
                                    <p className="text-gray-900 mt-1">
                                        {new Date(selectedContact.createdAt).toLocaleString()}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 flex space-x-3">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                                >
                                    Close
                                </button>
                                <button
                                    onClick={() => {
                                        handleDelete(selectedContact._id);
                                        setShowModal(false);
                                    }}
                                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};
