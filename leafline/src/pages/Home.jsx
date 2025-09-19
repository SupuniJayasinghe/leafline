import React from "react";
import Projects from "./Projects";

export default function Home() {
    return (
        <div>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
                <ul className="flex justify-center space-x-6 py-4">
                    <li><a href="#hero" className="hover:text-green-700">Home</a></li>
                    <li><a href="#projects" className="hover:text-green-700">Projects</a></li>
                    <li><a href="#experience" className="hover:text-green-700">Experience</a></li>
                </ul>
            </nav>

            {/* Hero Section */}
            <section
                id="hero"
                className="h-screen flex flex-col justify-center items-center bg-green-100"
            >
                <h1 className="text-5xl font-bold text-green-800">Home Page</h1>
                <p className="mt-4 text-lg text-gray-700">Welcome to my portfolio site.</p>
            </section>

            {/* Projects Section */}
            <section id="projects" className="h-screen flex items-center bg-green-50">
                <Projects />
            </section>

            {/* Experience Section */}
            {/* <section id="experience" className="h-screen flex items-center bg-white">
                <Experience />
            </section> */}
        </div>
    );
}
