import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiHome, FiMail, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../hooks/useAuth';

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { logout, admin } = useAuth();

    const isActive = (path) => location.pathname === path;

    const menuItems = [
        { path: '/dashboard', label: 'Dashboard', icon: FiHome },
        { path: '/contacts', label: 'Contacts', icon: FiMail },
    ];

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                className="md:hidden fixed top-4 left-4 z-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Sidebar */}
            <aside
                className={`fixed left-0 top-0 h-screen w-64 bg-gray-900 text-white transition-transform duration-300 z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
                    }`}
            >
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-8">Bhavana Admin</h1>

                    <nav className="space-y-2">
                        {menuItems.map(({ path, label, icon: Icon }) => (
                            <Link
                                key={path}
                                to={path}
                                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${isActive(path)
                                    ? 'sidebar-active bg-blue-600'
                                    : 'hover:bg-gray-800'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                <Icon size={20} />
                                <span>{label}</span>
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="absolute bottom-6 left-6 right-6 border-t border-gray-700 pt-6">
                    <div className="mb-4 text-sm text-gray-400">
                        <p>{admin?.name}</p>
                        <p className="text-xs">{admin?.email}</p>
                    </div>
                    <button
                        onClick={logout}
                        className="w-full flex items-center space-x-2 px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                    >
                        <FiLogOut size={20} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};
