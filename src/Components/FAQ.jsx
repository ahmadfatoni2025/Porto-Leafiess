import { motion } from "framer-motion";

const FAQ = () => {
    const faqs = [
        {
            q: "How long does a project usually take?",
            a: "Typical landing page projects take 2-4 weeks, while complex systems can take 2-3 months depending on the scope."
        },
        {
            q: "Do you offer maintenance?",
            a: "Yes, we providing ongoing support and maintenance packages to ensure your digital product stays up to date and secure."
        },
        {
            q: "Can you help with branding?",
            a: "Absolutely. We offer complete branding solutions from logo design to brand identity guidelines that align with your digital presence."
        },
        {
            q: "What technologies do you use?",
            a: "We specialize in modern stacks including React, Next.js, Framer Motion, and high-performance backend solutions."
        }
    ];

    return (
        <section id="faqs" className="py-24 px-6 relative overflow-hidden bg-transparent">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black tracking-tighter text-black mb-4"
                    >
                        Frequent Questions
                    </motion.h2>
                    <p className="text-neutral-500 font-medium">Everything you need to know about our process</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 group cursor-pointer"
                        >
                            <h3 className="font-black text-xl mb-3 flex items-center justify-between">
                                {faq.q}
                                <span className="text-emerald-500 group-hover:rotate-45 transition-transform duration-300">+</span>
                            </h3>
                            <p className="text-neutral-500 font-medium leading-relaxed">
                                {faq.a}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
