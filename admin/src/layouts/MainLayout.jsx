import { Sidebar } from '../components/Sidebar';

export const MainLayout = ({ children }) => {
    return (
        <div className="flex h-screen w-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Sidebar - Fixed Width */}
            <aside className="w-64 border-r border-blue-500/20 overflow-y-auto bg-gradient-to-b from-slate-900 to-slate-800 shadow-lg">
                <Sidebar />
            </aside>

            {/* Main Content Area - Flexible */}
            <main className="flex-1 overflow-auto">
                <div className="min-h-screen w-full">
                    <div className="px-6 py-6 md:px-8 md:py-8 lg:px-12 lg:py-10 h-full">
                        <div className="w-full h-full">
                            {children}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
