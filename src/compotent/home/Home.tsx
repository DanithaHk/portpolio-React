import fp from "../../assets/me.jpg";
import FadeContent from "../../common/FadeContent/FadeContent.tsx";
import AnimatedContentUp from "../../common/Animated/AnimatedUp.tsx";

function Home() {
    return (

        <div
            id="home"
            className="relative w-full min-h-screen flex items-center justify-center bg-[#E5E7EB] overflow-hidden"

        >



            <div className="absolute z-10 flex flex-col items-center justify-center text-center px-5 gap-8">

                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                    <img
                        src={fp}
                        alt="Profile"
                        className="w-64 h-64 rounded-full object-cover border-4 border-[#7d816a] shadow-md"
                    />
                </FadeContent>

                <AnimatedContentUp
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="bounce.out"
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={0.3}
                >


                <div className="max-w-xl">
                    <p className="text-lg leading-relaxed">
                        <h2 className="text-4xl mb-4 md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00C897] via-[#2980b9] to-[#8e44ad] animate-text-glow">
                            Danitha Dinuwan
                        </h2>
                        <span className="block font-bold text-xl text-[#2c3e50] mb-2">
                            I work in software development.
                        </span>
                        I create dynamic web apps and user interfaces that are easy to use.
                        Creating intuitive digital experiences that skillfully combine
                        creativity and functionality is my main goal.
                        <span className="block mt-4 font-bold text-[#2980b9]">
                            Together, let us create something truly remarkable.
                        </span>
                    </p>
                </div>
                </AnimatedContentUp>
            </div>
        </div>
    );
}

export default Home;
