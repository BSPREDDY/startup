import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <>
            <Helmet>
                <title>
                    Contact | Bhavana Technology's
                </title>
            </Helmet>

            <section
                className="
        max-w-4xl
        mx-auto
        py-24
        px-6
        "
            >

                <h1 className="text-6xl font-bold mb-10">
                    Let's Connect
                </h1>

                <ContactForm />

            </section>
        </>
    );
}