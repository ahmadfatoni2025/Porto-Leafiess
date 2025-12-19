// @ts-nocheck
import { useRef, useState } from 'react';
import { motion } from "framer-motion";
import ScrollStack, { ScrollStackItem } from './ScrollStack';

const SpotlightCard = ({ children, className = '', spotlightColor = 'rgba(16, 185, 129, 0.1)' }) => {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
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
            className={`relative rounded-3xl border border-white/10 bg-neutral-900/50 overflow-hidden ${className}`}
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
                style={{
                    opacity,
                    background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
                }}
            />
            {children}
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Dapur SPPG Inventory",
            category: "Management System",
            description: "A comprehensive inventory and POS system designed for kitchen management, streamlining orders and stock tracking.",
            tags: ["React", "Node.js", "MongoDB"],
            color: "from-emerald-500/20 to-emerald-900/20"
        },
        {
            title: "SSMBM Portfolio",
            category: "Portfolio System",
            description: "A premium portfolio showcase system with smooth animations and elegant project presentation.",
            tags: ["Framer Motion", "Tailwind", "Vite"],
            color: "from-blue-500/20 to-blue-900/20"
        },
        {
            title: "Leafiess Corporate",
            category: "Corporate Website",
            description: "Modern corporate website focused on high performance and exceptional user experience.",
            tags: ["React", "GSAP", "Three.js"],
            color: "from-purple-500/20 to-purple-900/20"
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 relative bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-emerald-400 font-black uppercase tracking-[0.3em] text-[10px]"
                    >
                        Our Portfolio
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black tracking-tighter text-white mt-4"
                    >
                        Selected <span className="text-neutral-500 italic font-medium">Works.</span>
                    </motion.h2>
                </div>

                <ScrollStack
                    itemDistance={30}
                    itemScale={0.05}
                    itemStackDistance={20}
                    stackPosition="15%"
                >
                    {projects.map((project, index) => (
                        <ScrollStackItem key={index}>
                            <SpotlightCard className="group h-full">
                                <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-30 group-hover:opacity-50 transition-opacity`} />
                                <div className="relative p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
                                    <div className="flex-1 space-y-6">
                                        <div className="space-y-2">
                                            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                                                {project.category}
                                            </span>
                                            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-neutral-300 uppercase tracking-wider">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 aspect-video rounded-2xl bg-neutral-800/50 border border-white/10 shadow-2xl relative overflow-hidden">
                                        {/* Placeholder for project preview */}
                                        <div className="absolute inset-0 flex items-center justify-center text-neutral-600 font-black tracking-tighter text-2xl uppercase opacity-20">
                                            Preview Image
                                        </div>
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
