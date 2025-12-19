import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden bg-transparent">
            <div className="max-w-4xl mx-auto">
                <div className="glass-card p-12 md:p-20 relative overflow-hidden">
                    {/* Decorative Blobs */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-900/20 rounded-full blur-3xl -z-10" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl -z-10" />

                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="glass-tag mb-8 inline-block"
                    >
                        Who we are
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-8 leading-[0.9]"
                    >
                        We build robust <br />
                        <span className="text-emerald-400">Systems & UI Web.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-neutral-400 leading-relaxed font-medium mb-10"
                    >
                        Leafiess is a specialized digital agency dedicated to crafting premium web systems and stunning user interfaces.
                        We specialize in transforming complex business requirements into intuitive, high-performance digital solutions.
                        Our team focuses on merging structural integrity with aesthetic excellence to build systems that don't just work, but wow.
                    </motion.p>

                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-neutral-800">
                        <div>
                            <h4 className="font-black text-xl mb-2 text-white">Web Systems</h4>
                            <p className="text-sm text-neutral-500 leading-relaxed">Developing scalable, efficient, and secure web infrastructures tailored to complex needs.</p>
                        </div>
                        <div>
                            <h4 className="font-black text-xl mb-2 text-white">UI/UX Design</h4>
                            <p className="text-sm text-neutral-500 leading-relaxed">Crafting immersive and visually captivating interfaces that elevate your digital presence.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
