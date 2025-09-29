import React, { useState, useEffect } from "react";

const slides = [
    { id: 1, title: "Hi", text: "I'm cool card" },
    { id: 2, title: "Hi", text: "I'm cool card" },
    { id: 3, title: "Hi", text: "I'm cool card" },
    { id: 4, title: "Hi", text: "I'm cool card" },
];

export default function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Optional auto-slide
    useEffect(() => {
        const timer = setInterval(
            () => setActiveIndex((i) => (i + 1) % slides.length),
            4000
        );
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">
            {/* Slides */}
            <div className="relative w-full h-full">
                {slides.map((s, i) => (
                    <div
                        key={s.id}
                        className={`absolute top-0 left-0 w-full h-full flex items-center justify-center p-6 transition-opacity duration-500 ${i === activeIndex ? "opacity-100 visible" : "opacity-0 invisible"
                            }`}
                    >
                        <div
                            className="relative max-w-xs max-h-[450px] w-full h-full bg-gray-800 rounded-lg text-white 
                         overflow-hidden shadow-none transition-shadow duration-500 hover:shadow-[0_0_70px_rgba(0,0,0,0.8)]"
                        >
                            <span
                                className="absolute inset-0 rounded-lg opacity-0 hover:opacity-40
                           transition-opacity duration-500
                           bg-[radial-gradient(circle_at_80px_40px,#ffffff,transparent)]"
                            ></span>
                            <div className="flex flex-col justify-center items-center text-center h-full">
                                <h2 className="font-oswald text-[130px] mb-0">{s.title}</h2>
                                <p className="font-open-sans text-[15px]">{s.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 w-full text-center">
                <ul className="inline-flex space-x-3">
                    {slides.map((_, i) => (
                        <li
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`cursor-pointer rounded-full transition-all duration-300 
                          ${i === activeIndex ? "w-4 h-4 bg-white" : "w-2.5 h-2.5 bg-white hover:blur-sm"}`}
                        ></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
