import Hero from "../components/Hero";
import { Helmet } from "react-helmet-async";

export default function Home() {
    return (
        <>
            <Helmet>

                <title>
                    Bhavana Technology's
                </title>

                <meta
                    name="description"
                    content="
          Premium Web Development,
          Testing,
          Automation Testing,
          SaaS MVP Development.
          "
                />

            </Helmet>

            <Hero />

        </>
    );
}