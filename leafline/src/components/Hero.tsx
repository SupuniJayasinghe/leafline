import { Button } from '@/components/ui/button';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';

export default function Hero() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            offset: 200
        });
    }, []);

    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen relative overflow-hidden animated-bg bg-[#171738]">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div
                    className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-20 floating"
                    style={{ background: 'radial-gradient(circle, #dff3e4, transparent)' }}
                ></div>
                <div
                    className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-30 floating-delayed"
                    style={{ background: 'radial-gradient(circle, #7180b9, transparent)' }}
                ></div>
                <div
                    className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-15 floating"
                    style={{ background: 'radial-gradient(circle, #3423a6, transparent)' }}
                ></div>
            </div>

            {/* Curved Shape Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#171738] curved-bottom"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="min-h-screen flex items-center">
                    <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

                        {/* Profile Photo Side */}
                        <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
                            <div
                                className="relative"
                                data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-delay="300"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                            >
                                {/* Decorative Elements */}
                                <div
                                    className="absolute -top-8 -left-8 w-24 h-24 rounded-full pulse-slow"
                                    style={{ backgroundColor: '#dff3e4' }}
                                ></div>
                                <div
                                    className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full pulse-slow"
                                    style={{ backgroundColor: '#7180b9', animationDelay: '2s' }}
                                ></div>

                                {/* Profile Photo Container */}
                                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                                    <div className="w-full h-full rounded-3xl glass-card flex items-center justify-center shadow-2xl hover-lift glow">
                                        <div className="text-center space-y-4">
                                            <div
                                                className="w-32 h-32 mx-auto rounded-full flex items-center justify-center text-5xl font-bold text-white"
                                                style={{ background: 'linear-gradient(135deg, #3423a6, #7180b9)' }}
                                            >
                                                SC
                                            </div>
                                            <p className="text-lg font-medium" style={{ color: '#dff3e4' }}>
                                                Profile Photo
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="order-1 lg:order-2 text-center lg:text-left space-y-8">
                            <div className="space-y-6">
                                <h1
                                    className="text-5xl lg:text-7xl font-bold text-white leading-tight"
                                    data-aos="fade-down"
                                    data-aos-offset="200"
                                    data-aos-delay="50"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                >
                                    Sarah Chen
                                </h1>

                                <div
                                    className="space-y-4"
                                    data-aos="fade-down"
                                    data-aos-offset="200"
                                    data-aos-delay="200"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                >
                                    <h2 className="text-2xl lg:text-3xl font-semibold text-white/90">
                                        Computer Engineering Undergraduate
                                    </h2>
                                    <div
                                        className="w-24 h-1 rounded-full mx-auto lg:mx-0"
                                        style={{ background: 'linear-gradient(90deg, #dff3e4, #7180b9)' }}
                                    ></div>
                                </div>

                                <p
                                    className="text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed"
                                    data-aos="fade-up"
                                    data-aos-offset="200"
                                    data-aos-delay="400"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                >
                                    Passionate about creating innovative solutions through code. Specializing in software
                                    development, machine learning, and embedded systems with a focus on sustainable
                                    technology.
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                                data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="600"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                            >
                                <Button
                                    size="lg"
                                    className="btn-primary text-white px-8 py-4 rounded-full shadow-lg group"
                                    onClick={() =>
                                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                                    }
                                >
                                    View My Work
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="glass-effect text-white border-white/30 hover:bg-white/20 px-8 py-4 rounded-full shadow-lg hover-lift"
                                >
                                    <Download className="w-4 h-4 mr-2" />
                                    Download Resume
                                </Button>
                            </div>

                            {/* Stats or Quick Info */}
                            <div
                                className="grid grid-cols-3 gap-6 pt-8"
                                data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="800"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                            >
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white">15+</div>
                                    <div className="text-white/70 text-sm">Projects</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white">3.8</div>
                                    <div className="text-white/70 text-sm">GPA</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white">2+</div>
                                    <div className="text-white/70 text-sm">Years Exp</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="1000"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                >
                    <button
                        onClick={scrollToAbout}
                        className="p-3 rounded-full glass-effect hover:bg-white/20 transition-all duration-300 animate-bounce"
                    >
                        <ChevronDown className="w-6 h-6 text-white" />
                    </button>
                </div>
            </div>
        </section>
    );
}
