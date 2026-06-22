import { useEffect, useState } from 'react';
import { FiMail, FiCheck, FiAlertCircle, FiEye } from 'react-icons/fi';
import { MainLayout } from '../layouts/MainLayout';
import { contactService } from '../services/contactService';

export const Dashboard = () => {
    const [stats, setStats] = useState({
        total: 0,
        new: 0,
        read: 0,
        replied: 0,
        spam: 0,
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await contactService.getStats();
                setStats(response.stats);
            } catch (error) {
                console.error('Failed to fetch stats:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchStats();
    }, []);

    const statCards = [
        {
            title: 'Total Contacts',
            value: stats.total,
            icon: FiMail,
            bgColor: 'bg-blue-50',
            textColor: 'text-blue-600',
            borderColor: 'border-blue-200',
        },
        {
            title: 'New',
            value: stats.new,
            icon: FiAlertCircle,
            bgColor: 'bg-yellow-50',
            textColor: 'text-yellow-600',
            borderColor: 'border-yellow-200',
        },
        {
            title: 'Read',
            value: stats.read,
            icon: FiEye,
            bgColor: 'bg-purple-50',
            textColor: 'text-purple-600',
            borderColor: 'border-purple-200',
        },
        {
            title: 'Replied',
            value: stats.replied,
            icon: FiCheck,
            bgColor: 'bg-green-50',
            textColor: 'text-green-600',
            borderColor: 'border-green-200',
        },
    ];

    return (
        <MainLayout>
            <div className="p-4 md:p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

                {isLoading ? (
                    <div className="flex items-center justify-center h-screen">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {statCards.map((card, index) => {
                                const Icon = card.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`${card.bgColor} border-l-4 ${card.borderColor} rounded-lg p-6 shadow-sm`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-gray-600 text-sm font-medium">
                                                    {card.title}
                                                </p>
                                                <p className={`${card.textColor} text-3xl font-bold mt-2`}>
                                                    {card.value}
                                                </p>
                                            </div>
                                            <Icon className={`${card.textColor} text-4xl opacity-20`} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">
                                Quick Stats
                            </h2>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center pb-3 border-b">
                                    <span className="text-gray-600">Total Contacts:</span>
                                    <span className="font-bold text-gray-900">{stats.total}</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b">
                                    <span className="text-gray-600">Spam Messages:</span>
                                    <span className="font-bold text-red-600">{stats.spam}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Response Rate:</span>
                                    <span className="font-bold text-green-600">
                                        {stats.total > 0
                                            ? (((stats.read + stats.replied) / stats.total) * 100).toFixed(2)
                                            : 0}
                                        %
                                    </span>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </MainLayout>
    );
};
