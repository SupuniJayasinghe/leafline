import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Code, Lightbulb, Target, Users, BookOpen } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';

export default function About() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            offset: 200
        });
    }, []);

    return (
        <section id="about" className="py-20 relative" style={{ backgroundColor: '#dff3e4' }}>
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10 floating"
                    style={{ backgroundColor: '#3423a6' }}></div>
                <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-15 floating-delayed"
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
                            About Me
                        </h2>
                        <div className="w-24 h-1 mx-auto rounded-full"
                            style={{ background: 'linear-gradient(90deg, #3423a6, #7180b9)' }}></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Profile Image */}
                        <div
                            className="space-y-6"
                            data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                        >
                            <div className="relative">
                                <div className="w-full max-w-md mx-auto h-96 rounded-3xl glass-card flex items-center justify-center shadow-2xl hover-lift">
                                    <div className="text-center space-y-4">
                                        <div className="w-32 h-32 mx-auto rounded-full flex items-center justify-center text-4xl font-bold text-white"
                                            style={{ background: 'linear-gradient(135deg, #3423a6, #7180b9)' }}>
                                            SC
                                        </div>
                                        <p className="font-medium" style={{ color: '#2e1760' }}>Profile Photo</p>
                                    </div>
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full pulse-slow"
                                    style={{ backgroundColor: '#3423a6' }}></div>
                                <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full pulse-slow"
                                    style={{ backgroundColor: '#7180b9', animationDelay: '2s' }}></div>
                            </div>
                        </div>

                        {/* About Content */}
                        <div
                            className="space-y-8"
                            data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-delay="400"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                        >
                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold" style={{ color: '#171738' }}>
                                    Hello! I'm Sarah Chen
                                </h3>
                                <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#2e1760' }}>
                                    <p>
                                        I'm a passionate Computer Engineering undergraduate with a deep love for technology and innovation.
                                        Currently pursuing my degree with a focus on software development, machine learning, and embedded systems.
                                    </p>
                                    <p>
                                        When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source projects,
                                        or working on sustainable technology solutions that can make a positive impact on our world.
                                    </p>
                                </div>
                            </div>

                            {/* Values Grid */}
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { icon: Code, title: 'Clean Code', desc: 'Writing maintainable, efficient code' },
                                    { icon: Lightbulb, title: 'Innovation', desc: 'Solving problems with creative solutions' },
                                    { icon: Target, title: 'Goal-Oriented', desc: 'Focused on achieving measurable results' },
                                    { icon: Users, title: 'Collaboration', desc: 'Working effectively in diverse teams' }
                                ].map((value, index) => (
                                    <Card
                                        key={value.title}
                                        className="glass-card hover-lift border-0 shadow-lg"
                                        data-aos="fade-up"
                                        data-aos-offset="200"
                                        data-aos-delay={600 + index * 100}
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in-out"
                                    >
                                        <CardContent className="p-4 flex items-center space-x-3">
                                            <div className="p-2 rounded-lg" style={{ backgroundColor: '#dff3e4' }}>
                                                <value.icon className="w-5 h-5" style={{ color: '#3423a6' }} />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold" style={{ color: '#171738' }}>{value.title}</h4>
                                                <p className="text-sm" style={{ color: '#2e1760' }}>{value.desc}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Interests */}
                            <div
                                className="space-y-4"
                                data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="1000"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                            >
                                <h4 className="text-xl font-semibold flex items-center" style={{ color: '#171738' }}>
                                    <BookOpen className="w-5 h-5 mr-2" style={{ color: '#3423a6' }} />
                                    Interests & Passions
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {['Machine Learning', 'Web Development', 'IoT', 'Sustainability', 'Open Source', 'UI/UX Design', 'Robotics', 'Cloud Computing'].map((interest, index) => (
                                        <Badge
                                            key={interest}
                                            variant="secondary"
                                            className="glass-effect hover-lift text-white border-0 shadow-md"
                                            style={{ backgroundColor: '#7180b9' }}
                                            data-aos="zoom-in"
                                            data-aos-offset="200"
                                            data-aos-delay={1100 + index * 50}
                                            data-aos-duration="600"
                                            data-aos-easing="ease-in-out"
                                        >
                                            {interest}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}