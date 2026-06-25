import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav
            className="
      sticky
      top-0
      z-50
      glass
      "
        >
            <div
                className="
        max-w-7xl
        mx-auto
        flex
        justify-between
        items-center
        p-5
        "
            >
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white text-sm shadow-lg">
                        BTSS
                    </div>
                    <h2
                        className="
              font-bold
              text-xl
              gradient-text
              "
                    >
                        Bhavana Technology
                    </h2>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8">

                    <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>

                    <Link to="/about" className="hover:text-yellow-500 transition-colors">About</Link>

                    <Link to="/services" className="hover:text-yellow-500 transition-colors">Services</Link>

                    <Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>

                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-xl cursor-pointer"
                    onClick={toggleMenu}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black/50 backdrop-blur-xl border-t border-white/10">
                    <div className="flex flex-col gap-4 p-5">
                        <Link
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className="hover:text-yellow-500 transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            onClick={() => setIsOpen(false)}
                            className="hover:text-yellow-500 transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            to="/services"
                            onClick={() => setIsOpen(false)}
                            className="hover:text-yellow-500 transition-colors"
                        >
                            Services
                        </Link>
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="hover:text-yellow-500 transition-colors"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
