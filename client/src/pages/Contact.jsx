import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm";
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <>
            <Helmet>
                <title>
                    Contact | Bhavana Technology
                </title>
                <meta name="description" content="Get in touch with Bhavana Technology for your web development and testing needs." />
            </Helmet>

            {/* Gradient Background (lightweight alternative to 3D) */}
            <div className="fixed inset-0 -z-10"></div>

            <section
                className="
        relative
        z-10
        max-w-4xl
        mx-auto
        py-24
        px-6
        min-h-screen
        flex
        flex-col
        justify-center
        "
            >

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400">Connect</span>
                    </h1>
                    <p className="text-lg text-blue-200">
                        Have a groundbreaking project in mind? Let's collaborate to bring your vision to life.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-slate-700/10 border border-blue-500/30 p-8 md:p-12 rounded-lg backdrop-blur-sm shadow-xl"
                >
                    <ContactForm />
                </motion.div>

            </section>
        </>
    );
}
