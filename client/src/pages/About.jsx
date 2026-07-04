import { Helmet } from "react-helmet-async";
import ScrollReveal from "../components/ScrollReveal";
import MissionVision from "../components/MissionVision";
import "../../src/index.css";


export default function About() {
    return (
        <>
            <Helmet>
                <title>
                    About | Bhavana Technology
                </title>

                <meta
                    name="description"
                    content="Learn more about Bhavana Technology's premium web development and testing solutions."
                />
            </Helmet>

            {/* Hero Section with Gradient Background */}
            <section className="relative h-96 flex items-center justify-center overflow-hidden">
                <div className="text-center px-6">
                    <h1 className="text-5xl md:text-6xl font-bold text-white">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400">Bhavana Technology</span>
                    </h1>
                </div>
            </section>

            {/* Main Content */}
            <section className=" py-24 px-6">
                <div className="max-w-7xl mx-auto">

                    <ScrollReveal>
                        <div className="bg-slate-700/20 border border-blue-500/30 p-12 rounded-lg">
                            <h2 className="text-4xl font-bold mb-6 text-white">
                                Who We Are
                            </h2>

                            <p className="text-lg text-blue-100 leading-relaxed mb-6">
                                Bhavana Technology specializes in delivering premium web development, automation testing,
                                manual testing, robust SaaS MVP solutions, secure authentication systems,
                                and scalable enterprise dashboards.
                            </p>

                            <p className="text-lg text-blue-100 leading-relaxed">
                                We are committed to excellence, focusing on quality, scalability, security, and performance
                                to empower your business to thrive and succeed in the competitive digital landscape.
                            </p>
                        </div>
                    </ScrollReveal>

                    <MissionVision />

                </div>
            </section>
        </>
    );
}
