import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaNode } from "react-icons/fa";
import { SiSpringboot, SiHibernate, SiMongodb, SiTypescript, SiReact, SiSpring } from "react-icons/si";
import { GiDatabase } from "react-icons/gi";
import "./Learnt.css";
import AnimatedContent from "../../common/Animated/Animated.tsx";

const skills = [
    { icon: <FaJava />, label: "Java" },
    { icon: <FaPython />, label: "Python" },
    { icon: <GiDatabase />, label: "SQL" },
    { icon: <FaHtml5 />, label: "HTML" },
    { icon: <FaCss3Alt />, label: "CSS" },
    { icon: <FaJs />, label: "JavaScript" },
    { icon: <FaBootstrap />, label: "Bootstrap" },
    { icon: <SiHibernate />, label: "Hibernate" },
    { icon: <SiSpring />, label: "Spring" },
    { icon: <SiSpringboot />, label: "Spring Boot" },
    { icon: <FaReact />, label: "React" },
    { icon: <SiMongodb />, label: "MongoDB" },
    { icon: <FaNode />, label: "NodeJS" },
    { icon: <SiTypescript />, label: "TypeScript" },
    { icon: <SiReact />, label: "React Native" },
];

export default function Lernt() {
    return (
        <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            duration={1.5}
            ease="bounce.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
        >
        <section
            id="learn"
            className="py-16  text-gray-800 min-h-screen flex flex-col  ">

            {/* Section Header */}
            <div className="text-center pt-10 mb-8 mt-[50px]">
                <h2 className="text-3xl font-bold text-black mb-3">What I Learnt</h2>
                <p className="text-gray-600 max-w-3xl mb-8">
                    Skilled in full-stack development, database management, and problem-solving.
                </p>
            </div>

            {/* Skills Grid */}
            <div className="skill-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="text-center">
                        <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-[#00C897] text-3xl shadow-md hover:scale-110 transition-transform duration-300">
                            {skill.icon}
                        </div>
                        <p className="mt-2 text-sm font-medium text-gray-700">{skill.label}</p>
                    </div>
                ))}
            </div>
        </section>
        </AnimatedContent>
    );
}
