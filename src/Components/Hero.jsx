import { motion } from "framer-motion";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";

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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
            {/* Decorative Background Elements */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-[120px] -z-10"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.3, scale: 1.1 }}
                transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[150px] -z-10"
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
                    className="inline-block px-4 py-1.5 mb-6 text-[11px] font-bold tracking-[0.2em] uppercase bg-neutral-100 text-neutral-500 rounded-full"
                >
                    Leafiess Portfolio System
                </motion.span>

                <motion.h1
                    variants={itemVariants}
                    className="text-6xl md:text-8xl font-black tracking-tighter text-black mb-8 leading-[0.9]"
                >
                    Leafiess portfolio <br />
                    <span className="text-emerald-700 drop-shadow-emerald-900">All you can find solve here..</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    A powerful system designed to showcase your projects with elegance. We help you manage, organize, and present your work in the most professional way possible.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full font-bold text-[15px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-shadow cursor-pointer"
                    >
                        See all project
                    </motion.button>
                    <motion.button
                        whileHover={{ backgroundColor: "rgba(0,0,0,0.05)", scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-[15px] text-white border border-emerald-900 bg-emerald-600/20 hover:bg-emerald-600/40 transition-colors cursor-pointer"
                    >
                        Contact us
                    </motion.button>
                </motion.div>

                {/* Floating Stat Labels */}
                <motion.div
                    variants={itemVariants}
                    className="mt-20 pt-10 border-t border-neutral-100 flex flex-wrap justify-center gap-12 text-neutral-400"
                >
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-bold text-white">15+</span>
                        <span className="text-[10px] uppercase tracking-widest font-bold">Active Systems</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-bold text-white">4.9/5</span>
                        <span className="text-[10px] uppercase tracking-widest font-bold">Success Rate</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-bold text-white">100%</span>
                        <span className="text-[10px] uppercase tracking-widest font-bold">Satisfied Clients</span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
