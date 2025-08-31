import {  FaCodeBranch, FaCode,FaMobile } from "react-icons/fa";
import ap from "../../assets/488789292_2138520546586326_9209343360120903930_n.jpg";
import "./about.css";
import AnimatedContent from "../../common/Animated/Animated.tsx";
export default function About() {

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
        <section
            id="about"
        >
            {/* Left */}
            <div id="about_left-section"  className="flex-1 mt-5 gap-10 ">
                <h1 className="text-4xl font-bold mb-4 text-gray-800 ">
                    Overview
                </h1>

                <div className="about-img flex justify-center mb-4">
                    <img
                        src={ap}
                        alt="About me"
                        className="w-60 h-64 object-cover rounded-[10%] border-4 border-[#7d816a] shadow-md"
                    />
                </div>

                <p className="about_WorkFlowContent text-gray-600 text-base leading-relaxed mb-8">
                    I am a highly motivated and enthusiastic Software Engineering student
                    currently completing my third semester at the Institute of Software
                    Engineering (IJSE). I am eager to continue expanding my knowledge in
                    software engineering new technologies and always willing to innovate
                    the new things which can improve the existing technology. An
                    easy-going person with a positive attitude and good team working
                    ability.
                </p>
            </div>

            {/* Right  */}
            <div id="about_right-section" className="flex-1 n">
                <div className="about_grid-container flex flex-col sm:flex-row gap-6 flex-wrap justify-center mt-10 ">

                    <div className="about_grid-item bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 hover:bg-gray-50 transition-all duration-300 ease-in-out flex flex-col items-center text-center m-2">
                        <div className="about_Logo w-16 h-16 bg-[#00A67D] rounded-full flex items-center justify-center text-white text-2xl mb-4">
                            <FaCodeBranch />
                        </div>
                        <h1 className="about_WorkFlowTopic font-bold text-lg text-gray-800">
                            Backend Developer
                        </h1>
                    </div>


                    <div className="about_grid-item bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 hover:bg-gray-50 transition-all duration-300 ease-in-out flex flex-col items-center text-center m-2">
                        <div className="about_Logo w-16 h-16 bg-[#00A67D] rounded-full flex items-center justify-center text-white text-2xl mb-4">
                            <FaCode />
                        </div>
                        <h1 className="about_WorkFlowTopic font-bold text-lg text-gray-800">
                            Frontend Developer
                        </h1>
                    </div>


                    <div className="about_grid-item bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 hover:bg-gray-50 transition-all duration-300 ease-in-out flex flex-col items-center text-center m-2">
                        <div className="about_Logo w-16 h-16 bg-[#00A67D] rounded-full flex items-center justify-center text-white text-2xl mb-4">
                            <FaMobile />
                        </div>
                        <h1 className="about_WorkFlowTopic font-bold text-lg text-gray-800">
                            React Native Developer
                        </h1>
                    </div>
                </div>
            </div>
        </section>
        </AnimatedContent>
    );
}