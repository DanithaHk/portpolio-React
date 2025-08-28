/*
// 1. MODERN HERO SECTION
function ModernHero() {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 overflow-hidden">
            {/!* Animated Background *!/}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900/10 to-transparent"></div>
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            </div>

            {/!* Content *!/}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
                {/!* Profile Image with Glow *!/}
                <div className="relative mb-8 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    <img
                        src="/path-to-image.jpg"
                        alt="Profile"
                        className="relative w-48 h-48 rounded-full object-cover border-2 border-white/20 shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/!* Animated Text *!/}
                <div className="space-y-4 max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent animate-fade-in-up">
                        Frontend Developer
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 leading-relaxed animate-fade-in-up animation-delay-300">
                        Crafting digital experiences that blend creativity with functionality
                    </p>

                    {/!* CTA Buttons *!/}
                    <div className="flex gap-4 justify-center mt-8 animate-fade-in-up animation-delay-500">
                        <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-indigo-500/25 hover:scale-105 transition-all duration-300">
                            View Projects
                        </button>
                        <button className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-white/10 hover:scale-105 transition-all duration-300">
                            Download Resume
                        </button>
                    </div>
                </div>

                {/!* Scroll Indicator *!/}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// 2. ANIMATED PROJECT CARD
function ProjectCard({ project, index }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/!* Project Image *!/}
            <div className="relative overflow-hidden h-48">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>

                {/!* Overlay on Hover *!/}
                <div className={`absolute inset-0 bg-indigo-600/90 flex items-center justify-center space-x-4 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <button className="px-4 py-2 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                        Live Demo
                    </button>
                    <button className="px-4 py-2 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                        Code
                    </button>
                </div>
            </div>

            {/!* Content *!/}
            <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                </p>

                {/!* Tech Stack *!/}
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 bg-slate-800 text-indigo-300 text-xs rounded-full border border-slate-600 hover:border-indigo-500 transition-colors"
                        >
              {tech}
            </span>
                    ))}
                </div>
            </div>

            {/!* Glow Effect *!/}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
    );
}

// 3. MODERN BUTTON VARIATIONS
function ModernButtons() {
    return (
        <div className="space-y-4">
            {/!* Primary Gradient Button *!/}
            <button className="relative px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Get Started</span>
            </button>

            {/!* Glass Morphism Button *!/}
            <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 shadow-lg">
                Learn More
            </button>

            {/!* Neon Border Button *!/}
            <button className="relative px-8 py-3 bg-transparent border-2 border-indigo-500 text-indigo-500 font-semibold rounded-lg overflow-hidden group hover:text-white transition-colors duration-300">
                <div className="absolute inset-0 bg-indigo-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <span className="relative z-10">Contact Me</span>
            </button>

            {/!* Animated Icon Button *!/}
            <button className="group flex items-center space-x-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-300">
                <span>Download Resume</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </button>
        </div>
    );
}

// 4. ANIMATED SKILL BAR
function SkillBar({ skill, percentage, index }) {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.3 }
        );

        const element = document.getElementById(`skill-${index}`);
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, [index]);

    return (
        <div id={`skill-${index}`} className="space-y-2">
            <div className="flex justify-between items-center">
                <span className="text-slate-300 font-medium">{skill}</span>
                <span className="text-indigo-400 text-sm font-semibold">{percentage}%</span>
            </div>

            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                    style={{
                        width: inView ? `${percentage}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                    }}
                ></div>
            </div>
        </div>
    );
}

// 5. MODERN NAVBAR (IMPROVED)
function ModernNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled
                ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-700/50'
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/!* Logo *!/}
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">JD</span>
                        </div>
                        <span className="text-white font-semibold text-xl">John Doe</span>
                    </div>

                    {/!* Navigation Links *!/}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                                    activeSection === item.toLowerCase()
                                        ? 'text-indigo-400'
                                        : 'text-slate-300 hover:text-white'
                                }`}
                            >
                                {item}
                                {activeSection === item.toLowerCase() && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-full"></div>
                                )}
                            </a>
                        ))}
                    </div>

                    {/!* CTA Button *!/}
                    <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                        Resume
                    </button>
                </div>
            </div>
        </nav>
    );
}

// 6. CUSTOM CSS ANIMATIONS (Add to your CSS file)
/!*
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-500 {
  animation-delay: 500ms;
}

.animation-delay-2000 {
  animation-delay: 2000ms;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
*!/*/
