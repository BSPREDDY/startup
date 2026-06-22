import { motion } from "framer-motion";

export default function ServiceCard({
    title,
    description,
    icon,
}) {
    return (
        <motion.div
            whileHover={{
                scale: 1.05,
            }}
            className="
      glass
      rounded-3xl
      p-8
      transition-all
      "
        >
            <div className="text-5xl mb-5">
                {icon}
            </div>

            <h3 className="text-2xl font-bold mb-4">
                {title}
            </h3>

            <p className="text-gray-300">
                {description}
            </p>
        </motion.div>
    );
}