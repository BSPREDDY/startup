import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export default function TestingAnimation() {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        const loadAnimation = async () => {
            try {
                const response = await fetch("../assets/lottie/testing.json");
                const data = await response.json();
                setAnimationData(data);
            } catch (error) {
                console.error("Error loading animation:", error);
            }
        };
        loadAnimation();
    }, []);

    if (!animationData) {
        return <div className="w-full max-w-[500px] h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg animate-pulse" />;
    }

    return (
        <Lottie
            animationData={animationData}
            loop={true}
            className="w-full max-w-[500px]"
        />
    );
}
