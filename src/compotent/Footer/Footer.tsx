import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-100 border-t h-[25vh] border-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col items-center justify-center h-full space-y-6">
                    <div className="flex items-center space-x-6">
                        <a
                            href="https://github.com/DanithaHk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-[#00C897] hover:bg-[#00B87F] hover:scale-110 transition-transform duration-200 group"
                        >
                            <Github className="w-5 h-5 text-white group-hover:text-gray-100" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/danitha-dinuwan-b79555319/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-[#00C897] hover:bg-[#00B87F] hover:scale-110 transition-transform duration-200 group"
                        >
                            <Linkedin className="w-5 h-5 text-white group-hover:text-gray-100" />
                        </a>
                        <a
                            href="mailto:danithahk@example.com"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-[#00C897] hover:bg-[#00B87F] hover:scale-110 transition-transform duration-200 group"
                        >
                            <Mail className="w-5 h-5 text-white group-hover:text-gray-100" />
                        </a>
                    </div>

                    <div className="w-24 h-px bg-gray-200"></div>

                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>© 2025 Danitha Dinuwan. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
