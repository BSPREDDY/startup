// import { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';

// export const Register = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//     });
//     const [error, setError] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const navigate = useNavigate();
//     const { register } = useAuth();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');

//         if (formData.password !== formData.confirmPassword) {
//             setError('Passwords do not match');
//             return;
//         }

//         setIsLoading(true);

//         try {
//             await register(formData.email, formData.password, formData.name);
//             navigate('/dashboard');
//         } catch (err) {
//             setError(err.response?.data?.message || 'Registration failed. Please try again.');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-4">
//             <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8">
//                 <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
//                     Bhavana Admin
//                 </h1>
//                 <p className="text-gray-600 text-center mb-8">Create a new account</p>

//                 {error && (
//                     <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
//                         {error}
//                     </div>
//                 )}

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Full Name
//                         </label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
//                             placeholder="John Doe"
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
//                             placeholder="admin@example.com"
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
//                             placeholder="••••••••"
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Confirm Password
//                         </label>
//                         <input
//                             type="password"
//                             name="confirmPassword"
//                             value={formData.confirmPassword}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
//                             placeholder="••••••••"
//                             required
//                         />
//                     </div>

//                     <button
//                         type="submit"
//                         disabled={isLoading}
//                         className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors disabled:opacity-50"
//                     >
//                         {isLoading ? 'Creating account...' : 'Register'}
//                     </button>
//                 </form>

//                 <p className="text-center text-gray-600 text-sm mt-6">
//                     Already have an account?{' '}
//                     <Link to="/login" className="text-blue-600 hover:underline">
//                         Login here
//                     </Link>
//                 </p>
//             </div>
//         </div>
//     );
// };


import { useState, Suspense } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { AdminBackground3D } from '../components/3D/AdminBackground3D';
import { FiUser, FiMail, FiLock, FiCheck } from 'react-icons/fi';

export const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { register } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setIsLoading(true);

        try {
            await register(formData.email, formData.password, formData.name);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 -z-10 h-full w-full">
                <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800" />}>
                    <AdminBackground3D />
                </Suspense>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/50 to-slate-900/80"></div>

            {/* Register Form */}
            <div className="relative z-10 flex items-center justify-center min-h-screen p-4 py-8">
                <div className="w-full max-w-md">
                    <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md rounded-lg shadow-2xl p-8 border border-blue-500/20">
                        <div className="text-center mb-8">
                            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400 mb-2">
                                Bhavana Admin
                            </h1>
                            <p className="text-slate-300">Create your admin account</p>
                        </div>

                        {error && (
                            <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg mb-6">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-blue-300 mb-2">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <FiUser className="absolute left-3 top-3 text-blue-400" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-700/50 border border-blue-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-blue-300 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <FiMail className="absolute left-3 top-3 text-blue-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-700/50 border border-blue-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                        placeholder="admin@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-blue-300 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <FiLock className="absolute left-3 top-3 text-blue-400" />
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-700/50 border border-blue-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-blue-300 mb-2">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <FiCheck className="absolute left-3 top-3 text-blue-400" />
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-700/50 border border-blue-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                            >
                                {isLoading ? 'Creating account...' : 'Register'}
                            </button>
                        </form>

                        <p className="text-center text-slate-400 text-sm mt-6">
                            Already have an account?{' '}
                            <Link to="/login" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                                Login here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
