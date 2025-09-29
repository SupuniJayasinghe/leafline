import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ExternalLink, Github, Eye, Star } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';

export default function Projects() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            offset: 200
        });
    }, []);

    const projects = [
        {
            title: 'EcoTrack - Sustainability Dashboard',
            description: 'A comprehensive web application that helps users track their carbon footprint and provides personalized recommendations for sustainable living.',
            image: '🌱',
            technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Express'],
            features: ['Real-time data visualization', 'Personal goal setting', 'Community challenges', 'Mobile responsive'],
            github: '#',
            demo: '#',
            status: 'Completed',
            stars: 124
        },
        {
            title: 'SmartHome IoT Controller',
            description: 'An intelligent home automation system using Arduino and Raspberry Pi to control lights, temperature, and security systems remotely.',
            image: '🏠',
            technologies: ['Python', 'Arduino', 'Raspberry Pi', 'MQTT', 'React Native'],
            features: ['Voice control integration', 'Energy usage monitoring', 'Security alerts', 'Mobile app control'],
            github: '#',
            demo: '#',
            status: 'In Progress',
            stars: 89
        },
        {
            title: 'AI Study Buddy',
            description: 'A machine learning-powered study assistant that creates personalized quizzes and tracks learning progress using natural language processing.',
            image: '🤖',
            technologies: ['Python', 'TensorFlow', 'Flask', 'NLP', 'SQLite'],
            features: ['Adaptive learning algorithms', 'Progress tracking', 'Custom quiz generation', 'Study analytics'],
            github: '#',
            demo: '#',
            status: 'Completed',
            stars: 156
        },
        {
            title: 'Campus Event Platform',
            description: 'A full-stack web platform for university students to discover, create, and manage campus events with real-time notifications.',
            image: '🎓',
            technologies: ['TypeScript', 'Next.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
            features: ['Event discovery', 'RSVP management', 'Real-time notifications', 'Calendar integration'],
            github: '#',
            demo: '#',
            status: 'Completed',
            stars: 203
        },
        {
            title: 'Blockchain Voting System',
            description: 'A secure and transparent voting system built on blockchain technology to ensure election integrity and voter privacy.',
            image: '🗳️',
            technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'MetaMask'],
            features: ['Immutable vote records', 'Anonymous voting', 'Real-time results', 'Audit trail'],
            github: '#',
            demo: '#',
            status: 'In Progress',
            stars: 78
        },
        {
            title: 'Weather Prediction ML Model',
            description: 'A machine learning model that predicts weather patterns using historical data and provides accurate forecasts for agricultural planning.',
            image: '🌦️',
            technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'API Integration'],
            features: ['Historical data analysis', 'Prediction algorithms', 'Visualization dashboard', 'API endpoints'],
            github: '#',
            demo: '#',
            status: 'Completed',
            stars: 92
        }
    ];

    return (
        <section id="projects" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#f1f5f9' }}>
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-80 h-80 rounded-full opacity-5 floating"
                    style={{ backgroundColor: '#3423a6' }}></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-5 floating-delayed"
                    style={{ backgroundColor: '#2e1760' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
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
                            Featured Projects
                        </h2>
                        <div className="w-24 h-1 mx-auto rounded-full"
                            style={{ background: 'linear-gradient(90deg, #3423a6, #7180b9)' }}></div>
                        <p className="mt-6 max-w-2xl mx-auto text-lg" style={{ color: '#2e1760' }}>
                            A showcase of my recent work, demonstrating my skills in full-stack development,
                            machine learning, and innovative problem-solving.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Card
                                key={project.title}
                                className="group glass-card border-0 shadow-xl hover-lift glow relative overflow-hidden"
                                data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay={200 + index * 100}
                                data-aos-duration="800"
                                data-aos-easing="ease-in-out"
                            >
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                    style={{ background: 'linear-gradient(135deg, #3423a6, #7180b9)' }}></div>

                                <CardHeader className="pb-4 relative z-10">
                                    {/* Project Icon/Image */}
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 glass-effect">
                                        {project.image}
                                    </div>

                                    <div className="flex items-center justify-between mb-2">
                                        <CardTitle className="text-lg font-bold group-hover:text-white transition-colors duration-300" style={{ color: '#171738' }}>
                                            {project.title}
                                        </CardTitle>
                                        <div className="flex items-center space-x-2">
                                            <Badge
                                                variant={project.status === 'Completed' ? 'default' : 'secondary'}
                                                className={project.status === 'Completed'
                                                    ? 'text-white border-0'
                                                    : 'text-white border-0'
                                                }
                                                style={{ backgroundColor: project.status === 'Completed' ? '#3423a6' : '#7180b9' }}
                                            >
                                                {project.status}
                                            </Badge>
                                        </div>
                                    </div>

                                    <div className="flex items-center text-sm" style={{ color: '#7180b9' }}>
                                        <Star className="w-3 h-3 mr-1" />
                                        {project.stars} stars
                                    </div>
                                </CardHeader>

                                <CardContent className="space-y-4 relative z-10">
                                    <p className="text-sm leading-relaxed group-hover:text-white transition-colors duration-300" style={{ color: '#2e1760' }}>
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="space-y-2">
                                        <h4 className="text-sm font-semibold group-hover:text-white transition-colors duration-300" style={{ color: '#171738' }}>Technologies:</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {project.technologies.map((tech) => (
                                                <Badge
                                                    key={tech}
                                                    variant="outline"
                                                    className="text-xs border-0 text-white glass-effect hover-lift"
                                                    style={{ backgroundColor: '#7180b9' }}
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Key Features */}
                                    <div className="space-y-2">
                                        <h4 className="text-sm font-semibold group-hover:text-white transition-colors duration-300" style={{ color: '#171738' }}>Key Features:</h4>
                                        <ul className="text-xs space-y-1">
                                            {project.features.slice(0, 3).map((feature, idx) => (
                                                <li key={idx} className="flex items-center group-hover:text-white transition-colors duration-300" style={{ color: '#2e1760' }}>
                                                    <span className="w-1 h-1 rounded-full mr-2" style={{ backgroundColor: '#3423a6' }}></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2 pt-4">
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="flex-1 glass-effect text-white border-0 hover:bg-white/20 transition-all duration-300"
                                            style={{ backgroundColor: '#7180b9' }}
                                        >
                                            <Github className="w-3 h-3 mr-1" />
                                            Code
                                        </Button>
                                        <Button
                                            size="sm"
                                            className="flex-1 btn-primary text-white border-0 hover:shadow-lg transition-all duration-300"
                                        >
                                            <Eye className="w-3 h-3 mr-1" />
                                            Demo
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* View More Button */}
                    <div
                        className="text-center mt-12"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="800"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <Button
                            size="lg"
                            className="btn-primary text-white px-8 py-4 rounded-full shadow-xl hover-lift glow"
                        >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View All Projects on GitHub
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}