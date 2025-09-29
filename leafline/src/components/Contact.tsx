import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Twitter, MapPin, Phone, Send, MessageCircle } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';

export default function Contact() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            offset: 200
        });
    }, []);

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'sarah.chen@email.com',
            href: 'mailto:sarah.chen@email.com'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+1 (555) 123-4567',
            href: 'tel:+15551234567'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'San Francisco, CA',
            href: '#'
        }
    ];

    const socialLinks = [
        {
            icon: Github,
            label: 'GitHub',
            href: 'https://github.com/sarahchen',
            color: 'hover:text-gray-900'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            href: 'https://linkedin.com/in/sarahchen',
            color: 'hover:text-blue-600'
        },
        {
            icon: Twitter,
            label: 'Twitter',
            href: 'https://twitter.com/sarahchen',
            color: 'hover:text-blue-400'
        },
        {
            icon: Mail,
            label: 'Email',
            href: 'mailto:sarah.chen@email.com',
            color: 'hover:text-emerald-600'
        }
    ];

    return (
        <section id="contact" className="py-20 relative overflow-hidden animated-bg">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-80 h-80 rounded-full opacity-10 floating"
                    style={{ background: 'radial-gradient(circle, #dff3e4, transparent)' }}></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15 floating-delayed"
                    style={{ background: 'radial-gradient(circle, #7180b9, transparent)' }}></div>
            </div>

            {/* Curved Shape Overlay */}
            <div className="absolute top-0 left-0 right-0 h-32 curved-shape" style={{ backgroundColor: '#f1f5f9' }}></div>

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
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                            Let's Work Together
                        </h2>
                        <div className="w-24 h-1 mx-auto rounded-full"
                            style={{ background: 'linear-gradient(90deg, #dff3e4, #7180b9)' }}></div>
                        <p className="text-black/90 mt-6 max-w-2xl mx-auto text-lg">
                            I'm always excited to discuss new opportunities, collaborate on interesting projects,
                            or just have a chat about technology and innovation.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div
                            className="space-y-8"
                            data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                        >
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-black flex items-center">
                                    <MessageCircle className="w-6 h-6 mr-3" />
                                    Get In Touch
                                </h3>
                                <p className="text-black/80 leading-relaxed mb-8 text-lg">
                                    Whether you have a project in mind, want to discuss potential opportunities,
                                    or just want to connect, I'd love to hear from you. Let's create something amazing together!
                                </p>

                                {/* Contact Details */}
                                <div className="space-y-4">
                                    {contactInfo.map((contact, index) => (
                                        <a
                                            key={contact.label}
                                            href={contact.href}
                                            className="flex items-center space-x-4 p-4 rounded-2xl glass-effect hover:bg-black/20 transition-all duration-300 group hover-lift"
                                            data-aos="fade-up"
                                            data-aos-offset="200"
                                            data-aos-delay={400 + index * 100}
                                            data-aos-duration="800"
                                            data-aos-easing="ease-in-out"
                                        >
                                            <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glass-effect"
                                                style={{ backgroundColor: '#dff3e4' }}>
                                                <contact.icon className="w-5 h-5" style={{ color: '#3423a6' }} />
                                            </div>
                                            <div>
                                                <p className="text-black/70 text-sm">{contact.label}</p>
                                                <p className="text-black font-medium">{contact.value}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div
                                data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="700"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                            >
                                <h4 className="text-xl font-semibold mb-4 text-black">Connect With Me</h4>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-xl flex items-center justify-center glass-effect hover:bg-black/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 glow"
                                            title={social.label}
                                            data-aos="zoom-in"
                                            data-aos-offset="200"
                                            data-aos-delay={800 + index * 100}
                                            data-aos-duration="600"
                                            data-aos-easing="ease-in-out"
                                        >
                                            <social.icon className="w-5 h-5 text-black/80 hover:text-black transition-colors duration-300" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Call to Action */}
                            <Card
                                className="glass-effect border-0 hover:bg-black/20 transition-all duration-300 hover-lift"
                                data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="900"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                            >
                                <CardContent className="p-6 text-center">
                                    <h4 className="text-xl font-semibold text-black mb-2">Ready to Start a Project?</h4>
                                    <p className="text-black/80 mb-4">
                                        Let's discuss how we can bring your ideas to life with cutting-edge technology.
                                    </p>
                                    <Button
                                        className="btn-primary text-black border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                        onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                                    >
                                        Start a Conversation
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <div
                            data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-delay="400"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                        >
                            <Card className="glass-card border-0 shadow-2xl hover-lift">
                                <CardContent className="p-8" id="contact-form">
                                    <h3 className="text-2xl font-bold mb-6" style={{ color: '#171738' }}>Send Me a Message</h3>

                                    <form className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-2" style={{ color: '#2e1760' }}>
                                                    First Name
                                                </label>
                                                <Input
                                                    placeholder="John"
                                                    className="glass-effect border-0 focus:ring-2 focus:ring-opacity-50"
                                                    style={{
                                                        backgroundColor: 'rgba(116, 128, 185, 0.1)',
                                                        color: '#171738',
                                                        focusRingColor: '#3423a6'
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2" style={{ color: '#2e1760' }}>
                                                    Last Name
                                                </label>
                                                <Input
                                                    placeholder="Doe"
                                                    className="glass-effect border-0 focus:ring-2 focus:ring-opacity-50"
                                                    style={{
                                                        backgroundColor: 'rgba(116, 128, 185, 0.1)',
                                                        color: '#171738'
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2" style={{ color: '#2e1760' }}>
                                                Email Address
                                            </label>
                                            <Input
                                                type="email"
                                                placeholder="john.doe@example.com"
                                                className="glass-effect border-0 focus:ring-2 focus:ring-opacity-50"
                                                style={{
                                                    backgroundColor: 'rgba(116, 128, 185, 0.1)',
                                                    color: '#171738'
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2" style={{ color: '#2e1760' }}>
                                                Subject
                                            </label>
                                            <Input
                                                placeholder="Project Collaboration Opportunity"
                                                className="glass-effect border-0 focus:ring-2 focus:ring-opacity-50"
                                                style={{
                                                    backgroundColor: 'rgba(116, 128, 185, 0.1)',
                                                    color: '#171738'
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2" style={{ color: '#2e1760' }}>
                                                Message
                                            </label>
                                            <Textarea
                                                placeholder="Tell me about your project, ideas, or how we can work together..."
                                                rows={5}
                                                className="glass-effect border-0 focus:ring-2 focus:ring-opacity-50 resize-none"
                                                style={{
                                                    backgroundColor: 'rgba(116, 128, 185, 0.1)',
                                                    color: '#171738'
                                                }}
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full btn-primary text-black border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 glow"
                                        >
                                            <Send className="w-4 h-4 mr-2" />
                                            Send Message
                                        </Button>
                                    </form>

                                    <div className="mt-6 pt-6 border-t border-opacity-20 text-center" style={{ borderColor: '#7180b9' }}>
                                        <p className="text-sm" style={{ color: '#2e1760' }}>
                                            Prefer email? Reach me directly at{' '}
                                            <a
                                                href="mailto:sarah.chen@email.com"
                                                className="font-medium underline hover:no-underline transition-all duration-300"
                                                style={{ color: '#3423a6' }}
                                            >
                                                sarah.chen@email.com
                                            </a>
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Footer */}
                    <div
                        className="mt-20 pt-8 border-t border-black/20 text-center"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="1000"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <p className="text-black/80">
                            © 2024 Sarah Chen. Built with React, TypeScript, and lots of ☕
                        </p>
                        <p className="text-black/60 mt-2 text-sm">
                            Designed with sustainability and accessibility in mind
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}