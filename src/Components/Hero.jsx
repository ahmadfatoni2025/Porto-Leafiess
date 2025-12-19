// @ts-nocheck
import { motion } from "framer-motion";
import BlurText from "./icons/BlurText";

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    const floatingVariants = (delay = 0, duration = 4) => ({
        animate: {
            y: [0, -20, 0],
            rotate: [0, 2, 0],
            transition: {
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            },
        },
    });

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
            {/* Decorative Background Elements */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] -z-10"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.15, scale: 1.1 }}
                transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[150px] -z-10"
            />

            {/* Floating Project Images - Left Side */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute left-[5%] top-[25%] hidden xl:block z-0"
            >
                {/* <motion.div
                    variants={floatingVariants(0, 5)}
                    animate="animate"
                    className="w-72 rounded-2xl overflow-hidden shadow-2xl border border-white/50 backdrop-blur-sm"
                >
                    <img src={Project1} alt="Project SSMBM" className="w-full h-auto object-cover" />
                    <div className="bg-white/80 p-4">
                        <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Portfolio System</h3>
                        <p className="text-sm font-semibold text-gray-800">SSMBM Management</p>
                    </div>
                </motion.div> */}
            </motion.div>

            {/* Floating Project Images - Right Side */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute right-[5%] bottom-[20%] hidden xl:block z-0"
            >
                {/* <motion.div
                    variants={floatingVariants(1, 6)}
                    animate="animate"
                    className="w-80 rounded-2xl overflow-hidden shadow-2xl border border-white/50 backdrop-blur-sm"
                >
                    <img src={Project2} alt="Project Dapur SPPG" className="w-full h-auto object-cover" />
                    <div className="bg-white/80 p-4">
                        <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-1">Inventory POS</h3>
                        <p className="text-sm font-semibold text-gray-800">Dapur SPPG Pingit</p>
                    </div>
                </motion.div> */}
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="container mx-auto px-6 text-center max-w-4xl relative z-10"
            >
                <motion.span
                    variants={itemVariants}
                    className="glass-tag mb-6 inline-block"
                >
                    Leafiess Portfolio System
                </motion.span>

                <div className="mb-8">
                    <BlurText
                        text="Leafiess portfolio"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] justify-center"
                    />
                    <BlurText
                        text="All you can find solve here.."
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-4xl md:text-6xl font-black tracking-tighter text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.3)] leading-[0.9] justify-center mt-4"
                    />
                </div>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    A powerful system designed to showcase your projects with elegance. We help you manage, organize, and present your work in the most professional way possible.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="glass-button-primary w-full sm:w-auto px-12 py-4 rounded-full text-[15px] cursor-pointer flex items-center justify-center gap-3 overflow-hidden relative group"
                    >
                        <span className="relative z-10">Explore</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={3}
                            stroke="currentColor"
                            className="size-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                            />
                        </svg>
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="glass-button-secondary w-full sm:w-auto px-10 py-4 rounded-full text-[15px] cursor-pointer border border-white/10"
                    >
                        Contact us
                    </motion.button>
                </motion.div>

                {/* Floating Stat Labels */}
                <motion.div
                    variants={itemVariants}
                    className="mt-20 py-10 glass-card rounded-[2rem] flex flex-wrap justify-center gap-12 text-white px-10"
                >
                    <motion.div className="flex flex-col items-center">
                        <span className="text-2xl font-black tracking-tighter">15+</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">Active Systems</span>
                    </motion.div>
                    <motion.div className="flex flex-col items-center">
                        <span className="text-2xl font-black tracking-tighter">4.9/5</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">Success Rate</span>
                    </motion.div>
                    <motion.div className="flex flex-col items-center">
                        <span className="text-2xl font-black tracking-tighter">100%</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">Satisfied Clients</span>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
