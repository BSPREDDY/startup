import { Sidebar } from '../components/Sidebar';

export const MainLayout = ({ children }) => {
    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar />
            <main className="flex-1 md:ml-0 overflow-auto">
                <div className="pt-16 md:pt-0">
                    {children}
                </div>
            </main>
        </div>
    );
};
