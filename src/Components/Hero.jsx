// @ts-ignore
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    const floatVariants = {
        float: {
            y: [0, -20, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Subtle Grid */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px),
                              linear-gradient(to bottom, #888 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                />

                {/* Animated Orbs */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"
                />

                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
                />

                {/* Floating 3D Elements */}
                <motion.div
                    // @ts-ignore
                    variants={floatVariants}
                    animate="float"
                    className="absolute top-20 left-10 w-6 h-6 border border-white/10 rounded-lg rotate-45"
                />
                <motion.div
                    // @ts-ignore
                    variants={floatVariants}
                    animate="float"
                    transition={{ delay: 1 }}
                    className="absolute top-40 right-20 w-8 h-8 border border-white/10 rounded-full"
                />
                <motion.div
                    // @ts-ignore
                    variants={floatVariants}
                    animate="float"
                    transition={{ delay: 2 }}
                    className="absolute bottom-40 left-20 w-10 h-10 border border-white/10 rounded-lg"
                />
            </div>

            {/* Main Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full max-w-7xl px-6"
            >
                {/* Logo */}
                <motion.div
                    // @ts-ignore
                    variants={itemVariants} className="flex justify-center mb-12">
                    <div className="text-5xl font-bold tracking-wider">
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            SOUVENSIO
                        </span>
                    </div>
                </motion.div>

                {/* Left Side Features */}
                <div className="absolute left-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
                    <div className="flex flex-col items-start gap-6">
                        {[
                            { text: "AUTO Debugger", color: "from-blue-400 to-cyan-400" },
                            { text: "Texture Material", color: "from-purple-400 to-pink-400" },
                            { text: "Pulse Plastic Material", color: "from-orange-400 to-red-400" }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                // @ts-ignore
                                variants={itemVariants}
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-3 group cursor-pointer"
                            >
                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
                                <span className={`text-sm font-medium bg-gradient-to-r ${feature.color} bg-clip-text text-transparent opacity-80 group-hover:opacity-100 transition-opacity`}>
                                    {feature.text}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Center Content */}
                <div className="text-center">
                    {/* Title */}
                    <motion.div
                        // @ts-ignore
                        variants={itemVariants} className="mb-8">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
                            <span className="block text-white">Create.</span>
                            <span className="block text-white">Model.</span>
                            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                Inspire.
                            </span>
                        </h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.div
                        // @ts-ignore
                        variants={itemVariants} className="mb-12">
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            3D-editor platform for creating, modeling, visualizing,
                            and editing your projects
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        // @ts-ignore
                        variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold text-white flex items-center gap-3 group hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                        >
                            Get Started For Free
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 flex items-center gap-3 group transition-all duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Watch Video
                        </motion.button>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    // @ts-ignore
                    variants={itemVariants}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                        <span className="text-sm font-medium tracking-wider">SCROLL FOR MORE</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Bottom Right Features - For Mobile */}
            <div className="absolute bottom-20 right-10 lg:hidden">
                <div className="flex flex-col items-end gap-2">
                    <div className="text-xs text-gray-400 font-medium tracking-widest">
                        FEATURES
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <span className="text-xs text-blue-400">AUTO Debugger</span>
                        <span className="text-xs text-purple-400">Texture Material</span>
                        <span className="text-xs text-orange-400">Pulse Plastic Material</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

// CSS yang perlu ditambahkan ke file global atau di-inline:
// @ts-ignore
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  body {
    font-family: 'Inter', sans-serif;
    background-color: #000;
    color: #fff;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #3b82f6, #06b6d4);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #2563eb, #0891b2);
  }

  /* Selection color */
  ::selection {
    background: rgba(59, 130, 246, 0.3);
    color: #fff;
  }
`;

// Untuk menggunakan CSS di atas, Anda bisa:
// 1. Tambahkan ke file CSS global, atau
// 2. Gunakan inline style dengan menambahkan:
// <style>{styles}</style> di dalam komponen