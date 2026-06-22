import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LottieHero from "./LottieHero";

export default function Hero() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/contact");
    };

    return (
        <section
            className="
      min-h-screen
      grid
      lg:grid-cols-2
      items-center
      max-w-7xl
      mx-auto
      px-6
      "
        >

            <div>

                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 80
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 1
                    }}
                    className="
          text-7xl
          font-black
          gradient-text
          "
                >
                    WE BUILD.
                    <br />
                    WE TEST.
                    <br />
                    WE DELIVER.
                </motion.h1>

                <p
                    className="
          mt-8
          text-gray-300
          text-xl
          "
                >
                    Premium Web Development &
                    Testing Solutions
                </p>

                <button
                    onClick={handleGetStarted}
                    className="
          mt-10
          px-8
          py-4
          rounded-xl
          bg-yellow-500
          text-black
          font-semibold
          hover:bg-yellow-600
          transition-all
          cursor-pointer
          "
                >
                    Get Started
                </button>

            </div>

            <LottieHero />

        </section>
    );
}
