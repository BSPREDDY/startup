import { Helmet } from "react-helmet-async";

import {
    FaGlobe,
    FaShoppingCart,
    FaUserShield,
    FaServer,
    FaMobileAlt,
    FaRocket
} from "react-icons/fa";

import ServiceCard from "../components/ServiceCard";
import ScrollReveal from "../components/ScrollReveal";

const services = [
    {
        title: "Business Websites",
        icon: <FaGlobe />,
        description: "Modern responsive websites."
    },

    {
        title: "eCommerce",
        icon: <FaShoppingCart />,
        description: "Online stores with payments."
    },

    {
        title: "Authentication Systems",
        icon: <FaUserShield />,
        description: "Secure login systems."
    },

    {
        title: "Admin Dashboards",
        icon: <FaServer />,
        description: "Powerful analytics dashboards."
    },

    {
        title: "Real Time Apps",
        icon: <FaMobileAlt />,
        description: "Live chat and notifications."
    },

    {
        title: "SaaS MVP",
        icon: <FaRocket />,
        description: "Launch your startup quickly."
    }
];

export default function Services() {
    return (
        <>
            <Helmet>
                <title>
                    Services | Bhavana Technology's
                </title>
            </Helmet>

            <section className="max-w-7xl mx-auto py-24 px-6">

                <ScrollReveal>

                    <h1 className="text-6xl font-bold mb-12">
                        Our Services
                    </h1>

                </ScrollReveal>

                <div
                    className="
          grid
          md:grid-cols-3
          gap-8
          "
                >
                    {services.map((item, index) => (
                        <ScrollReveal
                            key={index}
                            delay={index * 0.1}
                        >
                            <ServiceCard {...item} />
                        </ScrollReveal>
                    ))}
                </div>

            </section>
        </>
    );
}