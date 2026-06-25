// import { motion } from "framer-motion";

// export default function AnimatedBackground() {
//     return (
//         <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
//             {/* Deep Navy Blue Gradient Base */}
//             <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#1a2e4a] to-[#0f1d2d]" />

//             {/* Animated Digital Wave Lines 1 */}
//             <motion.div
//                 animate={{
//                     x: [0, 100, -100, 0],
//                     y: [0, 50, -30, 0],
//                     opacity: [0.1, 0.3, 0.15, 0.1]
//                 }}
//                 transition={{
//                     repeat: Infinity,
//                     duration: 15,
//                     ease: "easeInOut"
//                 }}
//                 className="absolute top-1/4 left-1/4 w-[500px] h-[300px] opacity-20"
//             >
//                 <svg viewBox="0 0 500 300" className="w-full h-full">
//                     <defs>
//                         <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                             <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
//                             <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
//                             <stop offset="100%" stopColor="#1e293b" stopOpacity="0.3" />
//                         </linearGradient>
//                     </defs>
//                     <path d="M0,100 Q125,50 250,100 T500,100" stroke="url(#waveGradient1)" strokeWidth="3" fill="none" />
//                     <path d="M0,150 Q125,100 250,150 T500,150" stroke="url(#waveGradient1)" strokeWidth="2" fill="none" opacity="0.6" />
//                     <path d="M0,200 Q125,150 250,200 T500,200" stroke="url(#waveGradient1)" strokeWidth="2" fill="none" opacity="0.4" />
//                 </svg>
//             </motion.div>

//             {/* Animated Digital Wave Lines 2 */}
//             <motion.div
//                 animate={{
//                     x: [-100, 100, -50, 0],
//                     y: [0, -50, 30, 0],
//                     opacity: [0.15, 0.25, 0.1, 0.15]
//                 }}
//                 transition={{
//                     repeat: Infinity,
//                     duration: 18,
//                     ease: "easeInOut",
//                     delay: 2
//                 }}
//                 className="absolute top-1/3 right-1/4 w-[600px] h-[350px] opacity-15"
//             >
//                 <svg viewBox="0 0 600 350" className="w-full h-full">
//                     <defs>
//                         <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
//                             <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.7" />
//                             <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.3" />
//                         </linearGradient>
//                     </defs>
//                     <path d="M0,150 Q150,100 300,150 T600,150" stroke="url(#waveGradient2)" strokeWidth="3" fill="none" />
//                     <path d="M0,200 Q150,150 300,200 T600,200" stroke="url(#waveGradient2)" strokeWidth="2" fill="none" opacity="0.5" />
//                     <path d="M0,250 Q150,200 300,250 T600,250" stroke="url(#waveGradient2)" strokeWidth="2" fill="none" opacity="0.3" />
//                 </svg>
//             </motion.div>

//             {/* Soft Gradient Accent 1 - Teal */}
//             <motion.div
//                 animate={{
//                     x: [0, 80, 0],
//                     y: [0, -60, 0]
//                 }}
//                 transition={{
//                     repeat: Infinity,
//                     duration: 20,
//                     ease: "easeInOut"
//                 }}
//                 className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-teal-500 opacity-5 rounded-full blur-[100px]"
//             />

//             {/* Soft Gradient Accent 2 - Navy */}
//             <motion.div
//                 animate={{
//                     x: [0, -100, 0],
//                     y: [0, 80, 0]
//                 }}
//                 transition={{
//                     repeat: Infinity,
//                     duration: 22,
//                     ease: "easeInOut",
//                     delay: 1
//                 }}
//                 className="absolute top-1/2 right-1/3 w-96 h-96 bg-blue-900 opacity-5 rounded-full blur-[100px]"
//             />

//             {/* Soft Gradient Accent 3 - Charcoal */}
//             <motion.div
//                 animate={{
//                     x: [0, 60, -40, 0],
//                     y: [0, 40, -60, 0]
//                 }}
//                 transition={{
//                     repeat: Infinity,
//                     duration: 25,
//                     ease: "easeInOut",
//                     delay: 2
//                 }}
//                 className="absolute top-1/4 right-1/4 w-72 h-72 bg-slate-700 opacity-5 rounded-full blur-[80px]"
//             />

//             {/* Animated Grid Pattern - Subtle */}
//             <motion.div
//                 animate={{
//                     opacity: [0.03, 0.08, 0.03]
//                 }}
//                 transition={{
//                     repeat: Infinity,
//                     duration: 8,
//                     ease: "easeInOut"
//                 }}
//                 className="absolute inset-0"
//                 style={{
//                     backgroundImage: `linear-gradient(
//                         0deg,
//                         transparent 24%,
//                         rgba(14, 165, 233, 0.05) 25%,
//                         rgba(14, 165, 233, 0.05) 26%,
//                         transparent 27%,
//                         transparent 74%,
//                         rgba(14, 165, 233, 0.05) 75%,
//                         rgba(14, 165, 233, 0.05) 76%,
//                         transparent 77%,
//                         transparent
//                     ),
//                     linear-gradient(
//                         90deg,
//                         transparent 24%,
//                         rgba(6, 182, 212, 0.05) 25%,
//                         rgba(6, 182, 212, 0.05) 26%,
//                         transparent 27%,
//                         transparent 74%,
//                         rgba(6, 182, 212, 0.05) 75%,
//                         rgba(6, 182, 212, 0.05) 76%,
//                         transparent 77%,
//                         transparent
//                     )`,
//                     backgroundSize: '50px 50px'
//                 }}
//             />
//         </div>
//     );
// }


import { motion } from "framer-motion";

export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
            {/* Deep Navy Blue Gradient Base */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#1a2e4a] to-[#0f1d2d]" />

            {/* Animated Digital Wave Lines 1 */}
            <motion.div
                animate={{
                    x: [0, 100, -100, 0],
                    y: [0, 50, -30, 0],
                    opacity: [0.35, 0.65, 0.45, 0.35]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 left-1/4 w-[500px] h-[300px]"
            >
                <svg viewBox="0 0 500 300" className="w-full h-full">
                    <defs>
                        <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="1" />
                            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.6" />
                        </linearGradient>
                    </defs>
                    <path d="M0,100 Q125,50 250,100 T500,100" stroke="url(#waveGradient1)" strokeWidth="3" fill="none" />
                    <path d="M0,150 Q125,100 250,150 T500,150" stroke="url(#waveGradient1)" strokeWidth="2" fill="none" opacity="0.8" />
                    <path d="M0,200 Q125,150 250,200 T500,200" stroke="url(#waveGradient1)" strokeWidth="2" fill="none" opacity="0.6" />
                </svg>
            </motion.div>

            {/* Animated Digital Wave Lines 2 */}
            <motion.div
                animate={{
                    x: [-100, 100, -50, 0],
                    y: [0, -50, 30, 0],
                    opacity: [0.3, 0.6, 0.4, 0.3]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 18,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute top-1/3 right-1/4 w-[600px] h-[350px]"
            >
                <svg viewBox="0 0 600 350" className="w-full h-full">
                    <defs>
                        <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#14b8a6" stopOpacity="1" />
                            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.8" />
                        </linearGradient>
                    </defs>
                    <path d="M0,150 Q150,100 300,150 T600,150" stroke="url(#waveGradient2)" strokeWidth="3" fill="none" />
                    <path d="M0,200 Q150,150 300,200 T600,200" stroke="url(#waveGradient2)" strokeWidth="2" fill="none" opacity="0.8" />
                    <path d="M0,250 Q150,200 300,250 T600,250" stroke="url(#waveGradient2)" strokeWidth="2" fill="none" opacity="0.6" />
                </svg>
            </motion.div>

            {/* Soft Gradient Accent 1 - Teal */}
            <motion.div
                animate={{
                    x: [0, 80, 0],
                    y: [0, -60, 0]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "easeInOut"
                }}
                className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-teal-500 opacity-5 rounded-full blur-[100px]"
            />

            {/* Soft Gradient Accent 2 - Navy */}
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 80, 0]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 22,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute top-1/2 right-1/3 w-96 h-96 bg-blue-900 opacity-5 rounded-full blur-[100px]"
            />

            {/* Soft Gradient Accent 3 - Charcoal */}
            <motion.div
                animate={{
                    x: [0, 60, -40, 0],
                    y: [0, 40, -60, 0]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 25,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute top-1/4 right-1/4 w-72 h-72 bg-slate-700 opacity-5 rounded-full blur-[80px]"
            />

            {/* Animated Grid Pattern - Subtle */}
            <motion.div
                animate={{
                    opacity: [0.03, 0.08, 0.03]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "easeInOut"
                }}
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(
                        0deg,
                        transparent 24%,
                        rgba(14, 165, 233, 0.05) 25%,
                        rgba(14, 165, 233, 0.05) 26%,
                        transparent 27%,
                        transparent 74%,
                        rgba(14, 165, 233, 0.05) 75%,
                        rgba(14, 165, 233, 0.05) 76%,
                        transparent 77%,
                        transparent
                    ),
                    linear-gradient(
                        90deg,
                        transparent 24%,
                        rgba(6, 182, 212, 0.05) 25%,
                        rgba(6, 182, 212, 0.05) 26%,
                        transparent 27%,
                        transparent 74%,
                        rgba(6, 182, 212, 0.05) 75%,
                        rgba(6, 182, 212, 0.05) 76%,
                        transparent 77%,
                        transparent
                    )`,
                    backgroundSize: '50px 50px'
                }}
            />
        </div>
    );
}
