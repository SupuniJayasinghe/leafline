import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export default function Index() {
    return (
        <div className="min-h-screen">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </div>
    );
}