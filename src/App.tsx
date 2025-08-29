import './App.css';
import Navbar from "./compotent/navbar/Navbar.tsx";
import Home from "./compotent/home/Home.tsx";
import About from "./compotent/about/About.tsx";
import Service from "./compotent/service/service.tsx";
import Learnt from "./compotent/lernt/Learnt.tsx";
import {Project} from "./compotent/project/Project.tsx";
import Contact from "./compotent/contact/Contact.tsx";
import Footer from "./compotent/Footer/Footer.tsx";


function App() {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Service />
            <Learnt />
            <Project />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
