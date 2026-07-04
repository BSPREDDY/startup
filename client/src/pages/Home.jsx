import Hero from "../components/Hero";
import { Helmet } from "react-helmet-async";
import { motion } from 'framer-motion';
import { FaCode, FaFlask, FaRocket, FaUsers, FaSync } from 'react-icons/fa';

export default function Home() {
    const services = [
        {
            icon: FaCode,
            title: 'Web Development',
            desc: 'We build modern, scalable, and responsive web applications utilizing cutting-edge technologies.'
        },
        {
            icon: FaFlask,
            title: 'Testing & QA',
            desc: 'We provide comprehensive testing and quality assurance services to ensure robust and reliable software.'
        },
        {
            icon: FaSync,
            title: 'DevOps & Cloud',
            desc: 'We implement automated CI/CD pipelines, containerization, and seamless cloud deployments.'
        },
        {
            icon: FaRocket,
            title: 'SaaS Development',
            desc: 'We deliver complete SaaS MVP development, taking your concept from ideation to successful market launch.'
        },
        {
            icon: FaUsers,
            title: 'Team Augmentation',
            desc: 'Integrate our highly skilled dedicated development teams to accelerate your software projects.'
        },
    ];

    return (
        <>
            <Helmet>
                <title>Bhavana Technology - Web Development & Testing</title>
                <meta
                    name="description"
                    content="Premium Web Development, Testing, Automation Testing, SaaS MVP Development."
                />
            </Helmet>

            <Hero />

            {/* Services Section */}
            <section className="py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
                        <p className="text-xl text-slate-400">Comprehensive tech solutions tailored to elevate your business</p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                                    whileHover={{
                                        scale: 1.05,
                                        y: -8,
                                        boxShadow: "0px 12px 24px rgba(59, 130, 246, 0.15)"
                                    }}
                                    className="bg-slate-700/10 border border-blue-500/20 rounded-xl p-6 md:p-8 transition-all duration-10"
                                >
                                    <Icon className="text-4xl text-blue-400 mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">{service.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="max-w-4xl mx-auto px-6 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
                    <p className="text-xl text-blue-50 mb-8">Partner with us to build extraordinary digital experiences.</p>
                    <a
                        href="/contact"
                        className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-lg hover:bg-blue-50 transition-all hover:shadow-lg"
                    >
                        Start Your Project Today
                    </a>
                </motion.div>
            </section>
        </>
    );
}
