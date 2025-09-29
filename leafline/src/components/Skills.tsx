import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code2, Database, Globe, Brain, Users, Lightbulb } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';

export default function Skills() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            offset: 200
        });
    }, []);

    const programmingLanguages = [
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'JavaScript', level: 85, icon: '⚡' },
        { name: 'TypeScript', level: 80, icon: '📘' },
        { name: 'Java', level: 75, icon: '☕' },
        { name: 'C++', level: 70, icon: '⚙️' },
        { name: 'SQL', level: 80, icon: '🗃️' }
    ];

    const technologies = [
        'React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Docker',
        'AWS', 'Git', 'Linux', 'TensorFlow', 'PyTorch', 'Figma'
    ];

    const softSkills = [
        { icon: Brain, title: 'Problem Solving', desc: 'Analytical thinking and creative solution development' },
        { icon: Users, title: 'Team Collaboration', desc: 'Effective communication in diverse environments' },
        { icon: Lightbulb, title: 'Continuous Learning', desc: 'Staying updated with latest technologies' }
    ];

    return (
        <section id="skills" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#f8fafc' }}>
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-72 h-72 rounded-full opacity-5 floating"
                    style={{ backgroundColor: '#3423a6' }}></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full opacity-5 floating-delayed"
                    style={{ backgroundColor: '#2e1760' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div
                        className="text-center mb-16"
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                            Skills & Tech Stack
                        </h2>
                        <div className="w-24 h-1 mx-auto rounded-full"
                            style={{ background: 'linear-gradient(90deg, #3423a6, #7180b9)' }}></div>
                        <p className="mt-6 max-w-2xl mx-auto text-lg" style={{ color: '#2e1760' }}>
                            A comprehensive overview of my technical skills and the tools I use to bring ideas to life.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-12">
                        {/* Programming Languages */}
                        <Card
                            className="glass-card border-0 shadow-xl hover-lift"
                            data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                        >
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: '#171738' }}>
                                    <Code2 className="mr-3" style={{ color: '#3423a6' }} />
                                    Programming Languages
                                </h3>
                                <div className="space-y-6">
                                    {programmingLanguages.map((lang, index) => (
                                        <div
                                            key={lang.name}
                                            className="space-y-2"
                                            data-aos="fade-up"
                                            data-aos-offset="200"
                                            data-aos-delay={400 + index * 100}
                                            data-aos-duration="800"
                                            data-aos-easing="ease-in-out"
                                        >
                                            <div className="flex justify-between items-center">
                                                <span className="flex items-center font-medium" style={{ color: '#2e1760' }}>
                                                    <span className="text-lg mr-2">{lang.icon}</span>
                                                    {lang.name}
                                                </span>
                                                <span className="font-semibold" style={{ color: '#3423a6' }}>{lang.level}%</span>
                                            </div>
                                            <div className="relative">
                                                <Progress
                                                    value={lang.level}
                                                    className="h-2 bg-gray-200"
                                                />
                                                <div
                                                    className="absolute top-0 left-0 h-2 rounded-full progress-fill transition-all duration-1000 ease-out"
                                                    style={{ width: `${lang.level}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Technologies & Tools */}
                        <Card
                            className="glass-card border-0 shadow-xl hover-lift"
                            data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-delay="400"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                        >
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: '#171738' }}>
                                    <Database className="mr-3" style={{ color: '#3423a6' }} />
                                    Technologies & Tools
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold mb-4" style={{ color: '#2e1760' }}>Frameworks & Libraries</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {technologies.map((tech, index) => (
                                                <Badge
                                                    key={tech}
                                                    variant="secondary"
                                                    className="glass-effect hover-lift text-white border-0 shadow-md"
                                                    style={{ backgroundColor: '#7180b9' }}
                                                    data-aos="zoom-in"
                                                    data-aos-offset="200"
                                                    data-aos-delay={600 + index * 50}
                                                    data-aos-duration="600"
                                                    data-aos-easing="ease-in-out"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div
                                        className="space-y-4"
                                        data-aos="fade-up"
                                        data-aos-offset="200"
                                        data-aos-delay="800"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in-out"
                                    >
                                        <h4 className="font-semibold" style={{ color: '#2e1760' }}>Development Environment</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            {[
                                                { name: 'VS Code', category: 'Editor' },
                                                { name: 'GitHub', category: 'Version Control' },
                                                { name: 'Postman', category: 'API Testing' },
                                                { name: 'Docker', category: 'Containerization' }
                                            ].map((tool, index) => (
                                                <div
                                                    key={tool.name}
                                                    className="p-3 rounded-lg glass-effect hover-lift"
                                                    data-aos="fade-up"
                                                    data-aos-offset="200"
                                                    data-aos-delay={900 + index * 100}
                                                    data-aos-duration="600"
                                                    data-aos-easing="ease-in-out"
                                                >
                                                    <span className="font-medium block" style={{ color: '#171738' }}>{tool.name}</span>
                                                    <span className="text-xs" style={{ color: '#7180b9' }}>{tool.category}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Soft Skills */}
                    <Card
                        className="glass-card border-0 shadow-xl hover-lift"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="600"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-bold mb-8 flex items-center justify-center" style={{ color: '#171738' }}>
                                <Globe className="mr-3" style={{ color: '#3423a6' }} />
                                Core Competencies
                            </h3>
                            <div className="grid md:grid-cols-3 gap-8">
                                {softSkills.map((skill, index) => (
                                    <div
                                        key={skill.title}
                                        className="text-center space-y-4 hover-lift"
                                        data-aos="zoom-in"
                                        data-aos-offset="200"
                                        data-aos-delay={800 + index * 200}
                                        data-aos-duration="800"
                                        data-aos-easing="ease-in-out"
                                    >
                                        <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center glass-effect glow">
                                            <skill.icon className="w-8 h-8" style={{ color: '#3423a6' }} />
                                        </div>
                                        <h4 className="text-xl font-semibold" style={{ color: '#171738' }}>{skill.title}</h4>
                                        <p className="text-sm leading-relaxed" style={{ color: '#2e1760' }}>{skill.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}