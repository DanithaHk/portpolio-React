import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/mylogo.png";
import {  X } from "lucide-react";
import resume from "../../assets/Danitha-Dinuwan-Resume.pdf";
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        function handleResize() {
            setIsDesktop(window.innerWidth >= 768);
            if (window.innerWidth >= 768) setIsMenuOpen(false);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    const links = ["Home", "About", "Service", "Learn", "Project", "Contact"];

    return (
        <nav className="sticky top-0 z-50 w-full h-16 bg-white flex justify-between items-center p-6 shadow-md navbar">

            <img
                src={logo}
                alt="Logo"
                className="h-12 w-30 mr-6 rounded cursor-pointer"
            />

            {/* Desktop Menu */}
            {isDesktop && (
                <div className="flex items-center space-x-6">
                    {links.map((link) => (
                        <ScrollLink
                            key={link}
                            to={link.toLowerCase()}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-64}
                            activeClass="text-[#00A67D] after:block after:h-1 after:w-1 after:rounded-full after:bg-[#00A67D] after:mt-1"
                            className="cursor-pointer text-gray-700 hover:text-[#00A67D] font-medium relative"
                        >
                            {link}
                        </ScrollLink>
                    ))}
                </div>
            )}

            {isDesktop && (
                <a
                    href={resume}
                    download="Danitha_Dinuwan_Resume.pdf"
                    className="cursor-pointer bg-[#00C897] hover:bg-[#00A67D]/90 hover:text-white py-2 px-4 lg:py-3 lg:px-6 rounded font-medium text-base"
                >
                    Resume
                </a>
            )}

            {!isDesktop && (
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="relative w-8 h-8 flex items-center justify-center focus:outline-none"
                >
                    <div className="w-6 h-6 relative">
                        <span
                            className={`absolute left-0 w-full h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
                                isMenuOpen ? "top-3 rotate-45" : "top-1"
                            }`}
                        ></span>
                        <span
                            className={`absolute left-0 top-3 w-full h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
                                isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                            }`}
                        ></span>
                        <span
                            className={`absolute left-0 w-full h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
                                isMenuOpen ? "top-3 -rotate-45" : "top-5"
                            }`}
                        ></span>
                    </div>
                </button>
            )}


            {!isDesktop && (
                <div
                    className={`fixed top-0 right-0 h-full w-1/2 sm:w-1/2 bg-gray-100 p-6 flex flex-col z-40 shadow-lg transform transition-transform duration-500 ease-in-out ${
                        isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="self-end mb-6 text-gray-700 hover:text-red-500 transition-colors duration-300"
                    >
                        <X size={28} />
                    </button>

                    {/* Links */}
                    <div className="flex flex-col space-y-6">
                        {links.map((link, index) => (
                            <ScrollLink
                                key={link}
                                to={link.toLowerCase()}
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-64}
                                activeClass="text-[#00A67D] after:block after:h-1 after:w-1 after:rounded-full after:bg-[#00A67D] after:mt-1"
                                className={`cursor-pointer text-gray-700 hover:text-blue-700 font-medium relative transform transition-all duration-300 ${
                                    isMenuOpen
                                        ? "translate-x-0 opacity-100"
                                        : "translate-x-4 opacity-0"
                                }`}
                                style={{
                                    transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                                }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link}
                            </ScrollLink>
                        ))}
                        <a
                            href={resume}
                            download="Danitha_Dinuwan_Resume.pdf"
                            className="cursor-pointer bg-[#00C897] w-[5rem] hover:bg-[#00A67D]/90 text-white py-2 px-4 sm:py-3 sm:px-6 rounded font-medium text-sm sm:text-base"
                        >
                            Resume
                        </a>

                    </div>
                </div>
            )}

            {!isDesktop && (
                <div
                    className={`fixed inset-0 bg-black transition-opacity duration-300 ${
                        isMenuOpen ? "opacity-25 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}
        </nav>
    );
}

export default Navbar;
