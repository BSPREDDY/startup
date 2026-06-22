import { Helmet } from "react-helmet-async";
import ScrollReveal from "../components/ScrollReveal";
import "../../src/index.css";


export default function About() {
    return (
        <>
            <Helmet>
                <title>
                    About | Bhavana Technology's
                </title>

                <meta
                    name="description"
                    content="Learn more about Bhavana Technology's."
                />
            </Helmet>

            <section className="max-w-7xl mx-auto py-24 px-6">

                <ScrollReveal>

                    <h1 className="text-6xl font-bold mb-8">
                        About Us
                    </h1>

                    <p className="text-lg text-gray-300 leading-9">

                        Bhavana Technology's delivers
                        premium web development,
                        automation testing,
                        manual testing,
                        SaaS MVP solutions,
                        authentication systems,
                        and enterprise dashboards.

                        We focus on quality,
                        scalability,
                        security,
                        and performance.

                    </p>

                </ScrollReveal>

            </section>
        </>
    );
}