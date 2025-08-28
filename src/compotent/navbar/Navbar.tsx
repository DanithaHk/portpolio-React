import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/mylogo.png";
import { Moon, Menu, X } from "lucide-react";
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

    const links = ["Home", "About", "Service", "Learn", "Project", "Contact"];

    return (
        <nav className="sticky top-0 z-50 w-full h-16  bg-[#fff] flex justify-between items-center p-6 shadow-md">

            <img
                src={logo}
                alt="Logo"
                className="h-12 w-30 mr-6  rounded cursor-pointer"
            />


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
                    <Moon className="cursor-pointer hover:text-[#00A67D] ml-6" />
                </div>
            )}


            {isDesktop && (
                <a
                    href="/resume.pdf"
                    className="cursor-pointer bg-[#00C897] hover:bg-[#00A67D]/90 hover:text-white py-2 px-4 lg:py-3 lg:px-6 bg-white rounded font-medium text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Resume
                </a>
            )}


            {!isDesktop && (
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            )}


            {!isDesktop && isMenuOpen && (
                <div className="fixed top-0 right-0 h-full w-1/2 bg-[#ced8ff] p-6 flex flex-col space-y-6 z-40 shadow-lg">
                    {links.map((link) => (
                        <ScrollLink
                            key={link}
                            to={link.toLowerCase()}
                            smooth={true}
                            duration={500}
                            spy={true}                 // << track scroll
                            offset={-64}               // << adjust for navbar height
                            activeClass="text[#00A67D] after:block after:h-1 after:w-1 after:rounded-full after:bg-[#00A67D] after:mt-1"
                            className="cursor-pointer text-gray-700 hover:text-blue-700 font-medium relative"
                        >
                            {link}
                        </ScrollLink>

                    ))}
                    <Moon className="cursor-pointer hover:text-blue-700" />
                </div>
            )}
        </nav>
    );
}

export default Navbar;
