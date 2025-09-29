import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
// import CursorGlow from './ui/cursor-glow';
import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Code,
    Database,
    Cpu,
    Globe,
    GraduationCap,
    Briefcase,
    User,
    FolderOpen
} from 'lucide-react';

declare global {
    interface Window {
        AOS: {
            init: (options: {
                duration: number;
                easing: string;
                once: boolean;
                offset: number;
            }) => void;
        };
    }
}

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        // Initialize AOS
        if (window.AOS) {
            window.AOS.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: true,
                offset: 200
            });
        }

        // Handle scroll for active navigation
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const skills = [
        { name: 'JavaScript', level: 90, icon: <Code className="w-5 h-5" /> },
        { name: 'React', level: 85, icon: <Globe className="w-5 h-5" /> },
        { name: 'Python', level: 88, icon: <Code className="w-5 h-5" /> },
        { name: 'Java', level: 80, icon: <Cpu className="w-5 h-5" /> },
        { name: 'SQL', level: 75, icon: <Database className="w-5 h-5" /> },
        { name: 'C++', level: 82, icon: <Cpu className="w-5 h-5" /> }
    ];

    const projects = [
        {
            title: 'Smart Campus Navigation',
            description: 'AI-powered indoor navigation system using React Native and machine learning algorithms.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
            tech: ['React Native', 'Python', 'TensorFlow', 'Firebase'],
            github: '#',
            demo: '#'
        },
        {
            title: 'IoT Weather Station',
            description: 'Real-time weather monitoring system with Arduino and web dashboard.',
            image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop',
            tech: ['Arduino', 'Node.js', 'React', 'MongoDB'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Blockchain Voting System',
            description: 'Secure and transparent voting platform built with Ethereum smart contracts.',
            image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=250&fit=crop',
            tech: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
            github: '#',
            demo: '#'
        }
    ];

    const experiences = [
        {
            type: 'work',
            title: 'Software Engineering Intern',
            company: 'TechCorp Solutions',
            period: 'Jun 2024 - Aug 2024',
            description: 'Developed full-stack web applications using React and Node.js, improving system performance by 30%.'
        },
        {
            type: 'education',
            title: 'Bachelor of Computer Engineering',
            company: 'University of Technology',
            period: '2022 - Present',
            description: 'GPA: 3.8/4.0. Relevant coursework: Data Structures, Algorithms, Software Engineering, Database Systems.'
        },
        {
            type: 'work',
            title: 'Research Assistant',
            company: 'AI Research Lab',
            period: 'Jan 2024 - May 2024',
            description: 'Conducted research on machine learning algorithms for computer vision applications.'
        }
    ];

    return (
        <div className="min-h-screen bg-[#1c1d21] text-white font-['Inter'] relative overflow-x-hidden">
            {/* <CursorGlow /> */}

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1c1d21]/80 backdrop-blur-md border-b border-[#a288a6]/20">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="text-xl font-bold bg-gradient-to-r from-[#a288a6] to-[#bb9bb0] bg-clip-text text-transparent">
                            Sarah Chen
                        </div>
                        <div className="hidden md:flex space-x-8">
                            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`capitalize transition-all duration-300 hover:text-[#a288a6] relative ${activeSection === item ? 'text-[#a288a6]' : 'text-[#cccbcb]'
                                        }`}
                                >
                                    {item}
                                    {activeSection === item && (
                                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#a288a6] rounded-full" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
                {/* Background Shapes */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#a288a6]/20 to-[#bb9bb0]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[#f1e3e4]/10 to-[#cccbcb]/20 rounded-full blur-3xl" />
                </div>

                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-6" data-aos="fade-right" data-aos-delay="100">
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                            Hi, I'm{' '}
                            <span className="bg-gradient-to-r from-[#a288a6] to-[#bb9bb0] bg-clip-text text-transparent">
                                Sarah Chen
                            </span>
                        </h1>
                        <p className="text-xl text-[#cccbcb] leading-relaxed">
                            Computer Engineering Undergraduate passionate about building innovative solutions
                            that bridge hardware and software to create meaningful impact.
                        </p>
                        <div className="flex space-x-4">
                            <Button
                                onClick={() => scrollToSection('contact')}
                                className="bg-gradient-to-r from-[#a288a6] to-[#bb9bb0] hover:from-[#bb9bb0] hover:to-[#a288a6] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                            >
                                Get In Touch
                            </Button>
                            <Button
                                variant="outline"
                                className="border-[#a288a6] text-[#a288a6] hover:bg-[#a288a6] hover:text-white px-8 py-3 rounded-full transition-all duration-300"
                            >
                                View Resume
                            </Button>
                        </div>
                    </div>

                    <div className="flex justify-center" data-aos="fade-left" data-aos-delay="200">
                        <div className="relative">
                            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#a288a6] to-[#bb9bb0] p-1">
                                <img
                                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                                    alt="Sarah Chen"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#a288a6]/20 to-[#bb9bb0]/20 rounded-full blur-xl -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 relative">
                <div className="max-w-6xl mx-auto px-6">
                    <h2
                        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#a288a6] to-[#bb9bb0] bg-clip-text text-transparent"
                        data-aos="fade-down"
                    >
                        About Me
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div data-aos="fade-right" data-aos-delay="100">
                            <Card className="bg-[#1c1d21]/50 border-[#a288a6]/20 backdrop-blur-sm">
                                <CardContent className="p-8">
                                    <div className="flex items-center mb-4">
                                        <User className="w-6 h-6 text-[#a288a6] mr-3" />
                                        <h3 className="text-xl font-semibold text-[#f1e3e4]">My Journey</h3>
                                    </div>
                                    <p className="text-[#cccbcb] leading-relaxed mb-4">
                                        I'm a passionate Computer Engineering student with a deep fascination for the intersection
                                        of hardware and software. My journey began with curiosity about how things work,
                                        leading me to explore everything from embedded systems to web development.
                                    </p>
                                    <p className="text-[#cccbcb] leading-relaxed">
                                        When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                                        projects, or mentoring fellow students in programming fundamentals.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="space-y-6" data-aos="fade-left" data-aos-delay="200">
                            <div className="flex items-center space-x-4 p-4 rounded-lg bg-[#a288a6]/10 border border-[#a288a6]/20">
                                <Code className="w-8 h-8 text-[#a288a6]" />
                                <div>
                                    <h4 className="font-semibold text-[#f1e3e4]">Full-Stack Development</h4>
                                    <p className="text-[#cccbcb] text-sm">Building end-to-end solutions</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 rounded-lg bg-[#bb9bb0]/10 border border-[#bb9bb0]/20">
                                <Cpu className="w-8 h-8 text-[#bb9bb0]" />
                                <div>
                                    <h4 className="font-semibold text-[#f1e3e4]">Embedded Systems</h4>
                                    <p className="text-[#cccbcb] text-sm">IoT and hardware programming</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 rounded-lg bg-[#f1e3e4]/10 border border-[#f1e3e4]/20">
                                <Database className="w-8 h-8 text-[#f1e3e4]" />
                                <div>
                                    <h4 className="font-semibold text-[#f1e3e4]">Data Engineering</h4>
                                    <p className="text-[#cccbcb] text-sm">Database design and optimization</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 bg-[#1c1d21]/50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2
                        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#a288a6] to-[#bb9bb0] bg-clip-text text-transparent"
                        data-aos="fade-down"
                    >
                        Skills & Technologies
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skill, index) => (
                            <Card
                                key={skill.name}
                                className="bg-[#1c1d21]/80 border-[#a288a6]/20 backdrop-blur-sm hover:border-[#a288a6]/40 transition-all duration-300 transform hover:scale-105"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="text-[#a288a6]">{skill.icon}</div>
                                            <h3 className="font-semibold text-[#f1e3e4]">{skill.name}</h3>
                                        </div>
                                        <span className="text-[#cccbcb] text-sm">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-[#a288a6]/20 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-[#a288a6] to-[#bb9bb0] h-2 rounded-full transition-all duration-1000"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2
                        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#a288a6] to-[#bb9bb0] bg-clip-text text-transparent"
                        data-aos="fade-down"
                    >
                        Featured Projects
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Card
                                key={project.title}
                                className="bg-[#1c1d21]/80 border-[#a288a6]/20 backdrop-blur-sm overflow-hidden group hover:border-[#a288a6]/40 transition-all duration-300 transform hover:scale-105"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c1d21]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                        <div className="flex space-x-2">
                                            <Button size="sm" className="bg-[#a288a6] hover:bg-[#bb9bb0]">
                                                <Github className="w-4 h-4 mr-1" />
                                                Code
                                            </Button>
                                            <Button size="sm" variant="outline" className="border-[#a288a6] text-[#a288a6] hover:bg-[#a288a6] hover:text-white">
                                                <ExternalLink className="w-4 h-4 mr-1" />
                                                Demo
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold text-[#f1e3e4] mb-2">{project.title}</h3>
                                    <p className="text-[#cccbcb] mb-4 text-sm leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="secondary"
                                                className="bg-[#a288a6]/20 text-[#a288a6] border-[#a288a6]/30"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 bg-[#1c1d21]/50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2
                        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#a288a6] to-[#bb9bb0] bg-clip-text text-transparent"
                        data-aos="fade-down"
                    >
                        Experience & Education
                    </h2>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#a288a6] to-[#bb9bb0]" />

                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                                    data-aos-delay={index * 100}
                                >
                                    <Card className={`w-full md:w-5/12 bg-[#1c1d21]/80 border-[#a288a6]/20 backdrop-blur-sm hover:border-[#a288a6]/40 transition-all duration-300 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                                        <CardContent className="p-6">
                                            <div className="flex items-center mb-3">
                                                {exp.type === 'work' ? (
                                                    <Briefcase className="w-5 h-5 text-[#a288a6] mr-2" />
                                                ) : (
                                                    <GraduationCap className="w-5 h-5 text-[#bb9bb0] mr-2" />
                                                )}
                                                <span className="text-[#cccbcb] text-sm">{exp.period}</span>
                                            </div>
                                            <h3 className="text-lg font-semibold text-[#f1e3e4] mb-1">{exp.title}</h3>
                                            <h4 className="text-[#a288a6] font-medium mb-3">{exp.company}</h4>
                                            <p className="text-[#cccbcb] text-sm leading-relaxed">{exp.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2
                        className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#a288a6] to-[#bb9bb0] bg-clip-text text-transparent"
                        data-aos="fade-down"
                    >
                        Let's Connect
                    </h2>

                    <p
                        className="text-xl text-[#cccbcb] mb-12 leading-relaxed"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12" data-aos="fade-up" data-aos-delay="200">
                        <Button
                            className="bg-gradient-to-r from-[#a288a6] to-[#bb9bb0] hover:from-[#bb9bb0] hover:to-[#a288a6] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            sarah.chen@email.com
                        </Button>
                    </div>

                    <div className="flex justify-center space-x-6" data-aos="fade-up" data-aos-delay="300">
                        <a
                            href="#"
                            className="p-3 rounded-full bg-[#a288a6]/20 border border-[#a288a6]/30 hover:bg-[#a288a6]/30 transition-all duration-300 transform hover:scale-110"
                        >
                            <Github className="w-6 h-6 text-[#a288a6]" />
                        </a>
                        <a
                            href="#"
                            className="p-3 rounded-full bg-[#bb9bb0]/20 border border-[#bb9bb0]/30 hover:bg-[#bb9bb0]/30 transition-all duration-300 transform hover:scale-110"
                        >
                            <Linkedin className="w-6 h-6 text-[#bb9bb0]" />
                        </a>
                        <a
                            href="#"
                            className="p-3 rounded-full bg-[#f1e3e4]/20 border border-[#f1e3e4]/30 hover:bg-[#f1e3e4]/30 transition-all duration-300 transform hover:scale-110"
                        >
                            <Mail className="w-6 h-6 text-[#f1e3e4]" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-[#a288a6]/20 text-center">
                <p className="text-[#cccbcb]">
                    © 2024 Sarah Chen. Built with React & Tailwind CSS.
                </p>
            </footer>
        </div>
    );
}