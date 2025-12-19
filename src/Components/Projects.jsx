// @ts-nocheck
import { useRef, useState } from 'react';
import { motion } from "framer-motion";
import ScrollStack, { ScrollStackItem } from './ScrollStack';

const SpotlightCard = ({ children, className = '', spotlightColor = 'rgba(0, 229, 255, 0.15)' }) => {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = e => {
        if (!divRef.current || isFocused) return;

        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(0.6);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(0.6);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative rounded-[2.5rem] overflow-hidden flex flex-col h-full ${className}`}
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
                style={{
                    opacity,
                    background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`
                }}
            />
            {children}
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Premium",
            category: "Web Development",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2664&auto=format&fit=crop",
            description: "Platform belanja online modern dengan integrasi pembayaran otomatis dan manajemen stok."
        },
        {
            title: "School Management System",
            category: "Web System",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2704&auto=format&fit=crop",
            description: "Sistem administrasi pendidikan terpadu untuk monitoring nilai dan absensi siswa secara real-time."
        },
        {
            title: "Creative Studio Portfolio",
            category: "UI/UX Design",
            image: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=2574&auto=format&fit=crop",
            description: "Website showcase eksklusif dengan pengalaman visual yang memanjakan mata."
        },
        {
            title: "Dashboard Analytics",
            category: "Optimization",
            image: "https://images.unsplash.com/photo-1551288049-bbda48642a4c?q=80&w=2670&auto=format&fit=crop",
            description: "Visualisasi data bisnis yang mendalam untuk membantu pengambilan keputusan strategis."
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 relative bg-transparent overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4"
                    >
                        Our Recent Works
                    </motion.h2>
                    <p className="text-neutral-400 font-medium max-w-2xl mx-auto">
                        Kumpulan sistem web dan desain UI eksperimental yang telah kami bangun untuk klien visioner.
                    </p>
                </div>

                <ScrollStack itemDistance={150}>
                    {projects.map((project, index) => (
                        <ScrollStackItem key={project.title}>
                            <SpotlightCard className="bg-neutral-900/50 border border-neutral-800 overflow-hidden p-0! h-full">
                                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                                    <div className="relative overflow-hidden h-full min-h-[250px]">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="glass-tag bg-black/60! text-white! border-white/10!">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col justify-center">
                                        <h3 className="text-3xl font-black text-white mb-4 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-neutral-400 text-lg font-medium leading-relaxed mb-8">
                                            {project.description}
                                        </p>
                                        <motion.button
                                            whileHover={{ x: 5 }}
                                            className="flex items-center gap-2 text-emerald-400 text-sm font-bold uppercase tracking-widest cursor-pointer w-fit"
                                        >
                                            View Live Project
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="7" y1="17" x2="17" y2="7" />
                                                <polyline points="7 7 17 7 17 17" />
                                            </svg>
                                        </motion.button>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </ScrollStackItem>
                    ))}
                </ScrollStack>
            </div>
        </section>
    );
};

export default Projects;
