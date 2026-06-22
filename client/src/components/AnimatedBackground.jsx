import { motion } from "framer-motion";

export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-10">

            <motion.div
                animate={{
                    x: [0, 150, 0],
                    y: [0, 80, 0]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 20
                }}
                className="
        absolute
        top-20
        left-20
        w-96
        h-96
        bg-yellow-500
        opacity-20
        rounded-full
        blur-[140px]
        "
            />

            <motion.div
                animate={{
                    x: [0, -120, 0],
                    y: [0, -100, 0]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 18
                }}
                className="
        absolute
        bottom-20
        right-20
        w-96
        h-96
        bg-purple-500
        opacity-20
        rounded-full
        blur-[140px]
        "
            />
        </div>
    );
}