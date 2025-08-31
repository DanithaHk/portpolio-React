import mdg from '../../assets/project/1.png'
import ani from "../../assets/project/2.png"
import bookShop from "../../assets/project/3.png"
import spms from  "../../assets/project/4.png"
import vio from "../../assets/project/5.png"
import travel from "../../assets/project/6.png"
import "./Project.css"
import Tilt from 'react-parallax-tilt';
import ShinyText from "../../common/shinyText/ShinyText.tsx";
import AnimatedContent from "../../common/Animated/Animated.tsx";



const project = [
    {
        image: mdg,
        label: "JavaFX , Java , MySQL",
        title: "Desktop Management App",
        description: "Application with database integration",
        url: "https://github.com/DanithaHk/MDG-GARMENTS-SYSTEM--LayerdArchiteure-.git"
    },
    {
        image: ani,
        label: "HTML , Bootstrap 5",
        title: "Ani Villa Website",
        description: "Interactive web experience ",
        url: "https://github.com/DanithaHk/Hotel-project---Boostrap-5.git"
    },
    {
        image: bookShop,
        label: "React JS , Tailwind CSS , Express JS",
        title: "BookShop E-commerce",
        description: "Modern full-stack e-commerce platform",
        url: "https://github.com/DanithaHk/pavithra-online-booking-store-frontend.git"
    },
    {
        image: spms,
        label: "Spring Boot , Microservices",
        title: "SPMS System",
        description: "Scalable microservices architecture",
        url: "https://github.com/DanithaHk/spms-backend.git"
    },
    {
        image: vio,
        label: "Spring Boot , HTML , Bootstrap 5 , CSS",
        title: "VIO Aesthetics",
        description: "Enterprise web application with modern UI",
        url: "https://github.com/DanithaHk/VO-Aesthetic-Lounge-SpringBoot-API.git"
    },
    {
        image: travel,
        label: "HTML , CSS",
        title: "Travel Website",
        description: "Responsive travel booking interface",
        url: "https://github.com/DanithaHk/website-travel-Assingment-Html-Css.git"
    }
];


export function Project() {
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
        <section id="project" className=" py-16 lg:px-20 min-h-screen bg-gray-100 ">
            <div className="service-header text-center pt-10 mb-8 ">
                <h1 className="text-3xl font-extrabold text-gray-800 mb-3 mt-[50px]">
                    Browse My Recent
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Projects
                </p>
            </div>

            <div className="project-grid ">
                {project.map((projects, index) => (
                    <Tilt
                        key={index}
                        tiltMaxAngleX={8}
                        tiltMaxAngleY={8}
                        tiltReverse={true}
                        glareEnable={false}
                        transitionSpeed={400}
                        scale={1.05}
                    >
                        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                            <img
                                src={projects.image}
                                alt={projects.title}
                                className="w-60 h-28 object-cover rounded-lg mb-4"
                            />
                            <h2 className="text-lg font-bold text-gray-800 mb-2">{projects.title}</h2>
                            <p className="text-gray-600 text-sm mb-4">{projects.description}</p>
                            <p className="text-xs text-indigo-600 font-medium">{projects.label}</p>
                            <div className="bg-[#00C897] text-white px-4 py-2 rounded-full hover:[#00A67D] mt-4">
                                <a
                                    href={projects.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-100 hover:text-indigo-200"
                                >
                                    <ShinyText text="View GitHub" speed={6} />
                                </a>
                            </div>
                        </div>
                    </Tilt>
                ))}
            </div>
        </section>
        </AnimatedContent>

    );
}
