import {useState} from "react";
import type { JSX } from "react";
import { FaCodeBranch, FaCode, FaMobile, FaUser, FaLaptopCode } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import "../service/service.css"
import AnimatedContent from "../../common/Animated/Animated.tsx";
function Service() {
    interface GridItemProps {
        icon: JSX.Element;
        title: string;
        shortDesc: string;
        points: string[];
    }

    const services: GridItemProps[] = [
        {
            icon: <FaCode className="w-10 h-10 mb-5 text-blue-600" />,
            title: "Web Development",
            shortDesc: "Let the whole world know about your brand with unique and performance driven website.",
            points: [
                "Full-Stack Development",
                "React, HTML, CSS, Tailwind, Bootstrap",
                "Java, Spring Boot, Express JS",
            ],
        },
        {
            icon: <FaCodeBranch className="w-10 h-10 mb-5 text-green-600" />,
            title: "Desktop Software Development",
            shortDesc: "Create Modern Enterprise Application that is reliable and consistent with awesome ideas.",
            points: ["C# .NET Applications", "Java Swing / JavaFX", "Electron.js Apps"],
        },
        {
            icon: <MdOutlinePayment className="w-10 h-10 mb-5 text-purple-600" />,
            title: "API & Integration Services",
            shortDesc: "I design RESTful APIs and integrate third-party services like payment gateways.",
            points: [
                "RESTful API Development",
                "Payment Gateway Integration",
                "Third-party Service Integration",
            ],
        },
        {
            icon: <FaMobile className="w-10 h-10 mb-5 text-red-600" />,
            title: "Mobile App Development",
            shortDesc: "I develop native and cross-platform mobile applications for Android, ensuring high performance, intuitive design, and smooth user experience.",
            points: [
                "Native Android Apps",
                "React Native Cross-Platform Apps",
                "Optimized UI & Performance",
            ],
        },
        {
            icon: <FaUser className="w-10 h-10 mb-5 text-yellow-600" />,
            title: "Freelancing",
            shortDesc: "Discover the next career move. Find worldwide job opportunities and work with foreigners.",
            points: ["Remote Projects", "Freelance Platforms", "International Clients"],
        },
        {
            icon: <FaLaptopCode className="w-10 h-10 mb-5 text-pink-600" />,
            title: "UI/UX Designing",
            shortDesc: "Using brilliant colors, fluid animations, and careful layouts, I create user-friendly, aesthetically pleasing interfaces that put accessibility and user experience first.",
            points: ["Wireframing & Prototyping", "Interactive UI Design", "User-Centered Design"],
        },
    ];

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={1.5}
            ease="bounce.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
        >
        <section id="service" className="py-16 px-6 lg:px-20 min-h-screen bg-gray-100 min-h-screen ">
            {/* Header */}
            <div className="service-header text-center pt-10 mb-8 mt-[50px]">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-3 mt-[50px]">
                    What I Do
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Obviously I am a Full stack developer. Experienced with all stages of the development
                </p>
            </div>


            {/* Services Grid */}
            <div className="service-grid">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center  hover:shadow-xl hover:scale-105 hover:bg-gray-50 transition-all duration-300 ease-in-out "
                    >
                        {/* Icon */}
                        {service.icon}

                        {/* Title */}
                        <h2 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h2>

                        {/* Short Description */}
                        <p className="text-gray-600 text-sm mb-4">{service.shortDesc}</p>

                        {/* Points */}
                        {expandedIndex === index && (
                            <ul className="text-gray-700 text-sm text-left mb-4 pl-5 list-disc transition-all duration-300 ease-in-out">
                                {service.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        )}

                        {/* Read More Button */}
                        <button
                            onClick={() => toggleExpand(index)}
                            className="text-blue-600 font-semibold text-sm cursor-pointer transition transform duration-300 hover:text-blue-800 hover:translate-x-1"
                        >
                            {expandedIndex === index ? "Show Less" : "Read More"}
                        </button>
                    </div>
                ))}
            </div>
        </section>
        </AnimatedContent>

    );
}

export default Service;
