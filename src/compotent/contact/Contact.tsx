import { Github, Linkedin, Phone, Send } from "lucide-react";
import './Contact.css';
import AnimatedContent from "../../common/Animated/Animated.tsx";
import FadeContent from "../../common/FadeContent/FadeContent.tsx";

export default function Contact() {
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form) return; // safety check

        const formData = new FormData(form);

        formData.append("access_key", "61fc0a55-5cee-46aa-9b72-2b2483822391");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                alert(res.message);
                form.reset();
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred. Please try again.");
        }
    };


    return (
        <section id="contact" className="py-16 h-[92vh]">
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
                <div className="text-center pb-16 pt-16">
                    <h1 className="text-3xl font-bold text-gray-800">Get in touch</h1>
                    <p className="text-gray-600 mt-2">
                        Do you have a project in your mind, contact me here
                    </p>
                </div>
            </AnimatedContent>

            <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                <div className="contact-container">

                    <div className="contact-left flex flex-col justify-center items-center bg-gray-600 text-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-semibold mb-6">Find Me</h2>
                        <img
                            className="mb-6 rounded-xl"
                            alt="Coding"
                            width="350"
                            src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
                        />
                        <div className="flex flex-row items-center gap-3">
                            <a href="tel:0762639000" className="flex items-center gap-2 hover:text-[#00A67D]">
                                <Phone className="w-7 h-7"/>
                            </a>

                            <a
                                href="https://github.com/danithahk"
                                className="flex items-center gap-2 hover:text-[#00A67D]"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="w-7 h-7"/>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/danithahk/"
                                className="flex items-center gap-2 hover:text-yellow-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="w-7 h-7"/>
                            </a>
                        </div>
                    </div>

                    <form onSubmit={onSubmit} className="contact-right bg-gray-100 rounded-xl p-8 flex flex-col gap-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                                required
                            />
                        </div>

                        <textarea
                            name="message"
                            placeholder="Message"
                            rows={6}
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 resize-none"
                            required
                        ></textarea>

                        <button
                            type="submit"
                            className="flex items-center justify-center gap-2 bg-[#00A67D] text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                        >
                            Send <Send className="w-5 h-5 -rotate-45"/>
                        </button>
                    </form>
                </div>
            </FadeContent>
        </section>
    );
}
