import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';

export default function Experience() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            offset: 200
        });
    }, []);

    const experiences = [
        {
            type: 'work',
            title: 'Software Engineering Intern',
            company: 'TechCorp Solutions',
            location: 'San Francisco, CA',
            period: 'June 2024 - August 2024',
            description: 'Developed and maintained web applications using React and Node.js. Collaborated with senior developers on feature implementation and code reviews.',
            achievements: [
                'Improved application performance by 25%',
                'Implemented responsive design for mobile users',
                'Contributed to open-source internal tools'
            ],
            technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker']
        },
        {
            type: 'work',
            title: 'Research Assistant',
            company: 'University AI Lab',
            location: 'Campus',
            period: 'January 2024 - Present',
            description: 'Conducting research on machine learning applications in sustainable technology. Assisting in data collection, model training, and paper writing.',
            achievements: [
                'Co-authored 2 research papers',
                'Developed ML models with 92% accuracy',
                'Presented findings at student conference'
            ],
            technologies: ['Python', 'TensorFlow', 'PyTorch', 'Jupyter']
        },
        {
            type: 'work',
            title: 'Web Development Freelancer',
            company: 'Self-Employed',
            location: 'Remote',
            period: 'September 2023 - Present',
            description: 'Building custom websites and web applications for small businesses and startups. Managing full project lifecycle from requirements to deployment.',
            achievements: [
                'Completed 8+ client projects',
                'Maintained 100% client satisfaction rate',
                'Generated $15K+ in revenue'
            ],
            technologies: ['React', 'Next.js', 'Tailwind', 'Vercel']
        }
    ];

    const education = [
        {
            type: 'education',
            degree: 'Bachelor of Science in Computer Engineering',
            school: 'University of Technology',
            location: 'California',
            period: '2022 - 2026 (Expected)',
            gpa: '3.8/4.0',
            achievements: [
                'Dean\'s List for 4 consecutive semesters',
                'President of Women in Engineering Society',
                'Recipient of Merit Scholarship'
            ],
            coursework: ['Data Structures', 'Machine Learning', 'Computer Networks', 'Database Systems', 'Software Engineering']
        },
        {
            type: 'education',
            degree: 'High School Diploma',
            school: 'Lincoln High School',
            location: 'California',
            period: '2018 - 2022',
            gpa: '4.0/4.0',
            achievements: [
                'Valedictorian',
                'National Honor Society',
                'AP Scholar with Distinction'
            ],
            coursework: ['AP Computer Science', 'AP Calculus BC', 'AP Physics', 'AP Chemistry']
        }
    ];

    const certifications = [
        {
            name: 'AWS Certified Cloud Practitioner',
            issuer: 'Amazon Web Services',
            date: 'March 2024',
            credentialId: 'AWS-CCP-2024-001'
        },
        {
            name: 'Google Data Analytics Professional Certificate',
            issuer: 'Google',
            date: 'January 2024',
            credentialId: 'GDAC-2024-001'
        },
        {
            name: 'Meta Front-End Developer Certificate',
            issuer: 'Meta',
            date: 'November 2023',
            credentialId: 'META-FED-2023-001'
        }
    ];

    return (
        <section id="experience" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#dff3e4' }}>
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10 floating"
                    style={{ backgroundColor: '#3423a6' }}></div>
                <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-15 floating-delayed"
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
                            Experience & Education
                        </h2>
                        <div className="w-24 h-1 mx-auto rounded-full"
                            style={{ background: 'linear-gradient(90deg, #3423a6, #7180b9)' }}></div>
                        <p className="mt-6 max-w-2xl mx-auto text-lg" style={{ color: '#2e1760' }}>
                            My journey through professional experiences, academic achievements, and continuous learning.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Experience Timeline */}
                        <div className="space-y-6">
                            <h3
                                className="text-2xl font-bold flex items-center mb-8"
                                style={{ color: '#171738' }}
                                data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-delay="200"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                            >
                                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 glass-effect"
                                    style={{ backgroundColor: '#3423a6' }}>
                                    <Briefcase className="w-5 h-5 text-white" />
                                </div>
                                Professional Experience
                            </h3>

                            <div className="relative">
                                {/* Timeline Line */}
                                <div className="absolute left-5 top-0 bottom-0 w-0.5" style={{ backgroundColor: '#7180b9' }}></div>

                                {experiences.map((exp, index) => (
                                    <div
                                        key={index}
                                        className="relative pl-14 pb-8"
                                        data-aos="fade-right"
                                        data-aos-offset="200"
                                        data-aos-delay={400 + index * 200}
                                        data-aos-duration="800"
                                        data-aos-easing="ease-in-out"
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute left-3 w-4 h-4 rounded-full border-4 border-white shadow-lg"
                                            style={{ backgroundColor: '#3423a6' }}></div>

                                        <Card className="glass-card border-0 shadow-xl hover-lift glow">
                                            <CardHeader className="pb-3">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <CardTitle className="text-lg font-bold" style={{ color: '#171738' }}>
                                                            {exp.title}
                                                        </CardTitle>
                                                        <p className="font-semibold" style={{ color: '#3423a6' }}>{exp.company}</p>
                                                    </div>
                                                    <Badge className="text-white border-0" style={{ backgroundColor: '#7180b9' }}>
                                                        {exp.period}
                                                    </Badge>
                                                </div>
                                                <div className="flex items-center text-sm" style={{ color: '#2e1760' }}>
                                                    <MapPin className="w-3 h-3 mr-1" />
                                                    {exp.location}
                                                </div>
                                            </CardHeader>

                                            <CardContent className="space-y-4">
                                                <p className="text-sm leading-relaxed" style={{ color: '#2e1760' }}>
                                                    {exp.description}
                                                </p>

                                                <div>
                                                    <h4 className="font-semibold text-sm mb-2" style={{ color: '#171738' }}>Key Achievements:</h4>
                                                    <ul className="space-y-1">
                                                        {exp.achievements.map((achievement, idx) => (
                                                            <li key={idx} className="text-xs flex items-center" style={{ color: '#2e1760' }}>
                                                                <span className="w-1 h-1 rounded-full mr-2" style={{ backgroundColor: '#3423a6' }}></span>
                                                                {achievement}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="flex flex-wrap gap-1">
                                                    {exp.technologies.map((tech) => (
                                                        <Badge
                                                            key={tech}
                                                            variant="secondary"
                                                            className="text-xs text-white border-0"
                                                            style={{ backgroundColor: '#7180b9' }}
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education & Certifications */}
                        <div className="space-y-8">
                            {/* Education */}
                            <div>
                                <h3
                                    className="text-2xl font-bold flex items-center mb-8"
                                    style={{ color: '#171738' }}
                                    data-aos="fade-left"
                                    data-aos-offset="200"
                                    data-aos-delay="300"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                >
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 glass-effect"
                                        style={{ backgroundColor: '#3423a6' }}>
                                        <GraduationCap className="w-5 h-5 text-white" />
                                    </div>
                                    Education
                                </h3>

                                <div className="space-y-6">
                                    {education.map((edu, index) => (
                                        <Card
                                            key={index}
                                            className="glass-card border-0 shadow-xl hover-lift glow"
                                            data-aos="fade-left"
                                            data-aos-offset="200"
                                            data-aos-delay={500 + index * 200}
                                            data-aos-duration="800"
                                            data-aos-easing="ease-in-out"
                                        >
                                            <CardHeader className="pb-3">
                                                <CardTitle className="text-lg font-bold" style={{ color: '#171738' }}>
                                                    {edu.degree}
                                                </CardTitle>
                                                <p className="font-semibold" style={{ color: '#3423a6' }}>{edu.school}</p>
                                                <div className="flex justify-between items-center text-sm" style={{ color: '#2e1760' }}>
                                                    <span className="flex items-center">
                                                        <MapPin className="w-3 h-3 mr-1" />
                                                        {edu.location}
                                                    </span>
                                                    <span>{edu.period}</span>
                                                </div>
                                                <div className="font-semibold text-sm" style={{ color: '#3423a6' }}>
                                                    GPA: {edu.gpa}
                                                </div>
                                            </CardHeader>

                                            <CardContent className="space-y-3">
                                                <div>
                                                    <h4 className="font-semibold text-sm mb-2" style={{ color: '#171738' }}>Achievements:</h4>
                                                    <ul className="space-y-1">
                                                        {edu.achievements.map((achievement, idx) => (
                                                            <li key={idx} className="text-xs flex items-center" style={{ color: '#2e1760' }}>
                                                                <span className="w-1 h-1 rounded-full mr-2" style={{ backgroundColor: '#3423a6' }}></span>
                                                                {achievement}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h4 className="font-semibold text-sm mb-2" style={{ color: '#171738' }}>Relevant Coursework:</h4>
                                                    <div className="flex flex-wrap gap-1">
                                                        {edu.coursework.map((course) => (
                                                            <Badge
                                                                key={course}
                                                                variant="outline"
                                                                className="text-xs border-0 text-white"
                                                                style={{ backgroundColor: '#7180b9' }}
                                                            >
                                                                {course}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>

                            {/* Certifications */}
                            <div>
                                <h3
                                    className="text-2xl font-bold flex items-center mb-6"
                                    style={{ color: '#171738' }}
                                    data-aos="fade-left"
                                    data-aos-offset="200"
                                    data-aos-delay="700"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                >
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 glass-effect"
                                        style={{ backgroundColor: '#3423a6' }}>
                                        <Award className="w-5 h-5 text-white" />
                                    </div>
                                    Certifications
                                </h3>

                                <div className="space-y-4">
                                    {certifications.map((cert, index) => (
                                        <Card
                                            key={index}
                                            className="glass-card border-0 shadow-lg hover-lift"
                                            data-aos="zoom-in"
                                            data-aos-offset="200"
                                            data-aos-delay={900 + index * 100}
                                            data-aos-duration="600"
                                            data-aos-easing="ease-in-out"
                                        >
                                            <CardContent className="p-4">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="font-semibold text-sm" style={{ color: '#171738' }}>{cert.name}</h4>
                                                        <p className="text-xs font-medium" style={{ color: '#3423a6' }}>{cert.issuer}</p>
                                                        <p className="text-xs" style={{ color: '#2e1760' }}>ID: {cert.credentialId}</p>
                                                    </div>
                                                    <Badge className="text-xs text-white border-0" style={{ backgroundColor: '#7180b9' }}>
                                                        {cert.date}
                                                    </Badge>
                                                </div>
                                            </CardContent>
                                        </Card>
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