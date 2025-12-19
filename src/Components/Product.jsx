import { useState } from "react";
import { motion } from "framer-motion";

const CheckIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-neutral-900"
    >
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const Product = () => {
    const [isYearly, setIsYearly] = useState(false);

    const plans = [
        {
            name: "Paket Basic",
            description: "Solusi tepat untuk personal, UMKM, atau bisnis yang baru mulai hadir secara online.",
            price: "1.399.000",
            buttonText: "You're on Creator",
            features: [
                "Desain website sederhana dan profesional",
                "Hingga 3 halaman (Home, Tentang, Kontak)",
                "Mobile responsive",
                "Integrasi WhatsApp",
                "Gratis revisi ringan",
                "Domain & hosting (opsional)",
            ],
            isPopular: false,
        },
        {
            name: "Paket Exclusive",
            description: "Untuk brand dan perusahaan yang mengutamakan performa, tampilan premium, dan pengalaman pengguna maksimal.",
            price: "4.899.000",
            buttonText: "Current Plan",
            features: [
                "Desain eksklusif & modern (custom penuh)",
                "Halaman tidak terbatas",
                "UI/UX lebih optimal",
                "Optimasi kecepatan & SEO dasar",
                "Integrasi API / fitur khusus",
                "Admin panel (jika diperlukan)",
                "Revisi fleksibel",
                "Domain & hosting (opsional)"
            ],
            isPopular: true,
            headerImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        },
        {
            name: "Paket Professional",
            description: "Dirancang untuk bisnis yang ingin tampil lebih meyakinkan dan fungsional..",
            price: "3.299.000",
            buttonText: "Get Studio",
            features: [
                "Desain custom sesuai brand",
                "Hingga 6 halaman",
                "Mobile & tablet responsive",
                "Optimasi kecepatan dasar",
                "Integrasi WhatsApp & Google Maps",
                "Form kontak aktif",
                "Revisi menengah",
                "Domain & hosting (opsional)"
            ],
            isPopular: false,
        },
    ];

    return (
        <section id="pricing" className="py-4 px-6 relative bg-transparent overflow-hidden">
            {/* Decorative Background Elements */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.3, scale: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-1/2 -right-20 w-80 h-80 bg-emerald-100 rounded-full blur-[100px] -z-10"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.2, scale: 1.1 }}
                transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                className="absolute bottom-0 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-[120px] -z-10"
            />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-5xl font-black tracking-tighter text-emerald-950 mb-10"
                    >
                        Choose your plan
                    </motion.h2>

                    {/* Toggle */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-flex items-center p-1.5 bg-neutral-100 rounded-full border border-neutral-200 shadow-sm"
                    >
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`px-8 py-2.5 rounded-full text-[13px] font-bold transition-all duration-300 cursor-pointer ${!isYearly
                                ? "bg-white text-black shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
                                : "text-neutral-500 hover:text-black"
                                }`}
                        >
                            Pay monthly
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`px-8 py-2.5 rounded-full text-[13px] font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${isYearly
                                ? "bg-white text-black shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
                                : "text-neutral-500 hover:text-black"
                                }`}
                        >
                            Pay yearly
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        </button>
                    </motion.div>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className={`relative glass-card rounded-[2.5rem] overflow-hidden flex flex-col ${plan.isPopular ? "md:scale-105 z-10 shadow-[0_40px_80px_rgba(0,0,0,0.1)]" : "shadow-[0_20px_50px_rgba(0,0,0,0.03)]"
                                }`}
                        >
                            {/* Header for Popular Card */}
                            {plan.isPopular ? (
                                <div className="relative h-24 overflow-hidden">
                                    <img
                                        src={plan.headerImage}
                                        alt="header"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center px-8">
                                        <h3 className="text-xl font-bold text-white tracking-tight">
                                            {plan.name}
                                        </h3>
                                    </div>
                                </div>
                            ) : (
                                <div className="pt-8 px-8 pb-4">
                                    <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                                        {plan.name}
                                    </h3>
                                </div>
                            )}

                            {/* Card Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <p className="text-sm text-neutral-500 font-medium leading-[1.6] mb-8 min-h-[44px]">
                                    {plan.description}
                                </p>

                                {/* Pricing Box */}
                                <div className="pricing">
                                    <div className="flex items-baseline gap-1.5">
                                        <span className="text-4xl font-black text-neutral-900 tracking-tighter">
                                            Rp{plan.price}
                                        </span>

                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full mt-6 py-4 px-6 rounded-full text-[13px] font-bold transition-all duration-300 cursor-pointer ${plan.name === "Studio"
                                            ? "bg-black text-white hover:bg-neutral-800 shadow-lg shadow-black/10"
                                            : "bg-neutral-200/50 text-neutral-600 hover:bg-neutral-200"
                                            }`}
                                    >
                                        {plan.buttonText}
                                    </motion.button>
                                </div>

                                {/* Features List */}
                                <ul className="space-y-4.5 mt-auto">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-4 group">
                                            <motion.div
                                                initial={{ scale: 0.8 }}
                                                whileInView={{ scale: 1 }}
                                                className="mt-1 flex-shrink-0"
                                            >
                                                <CheckIcon />
                                            </motion.div>
                                            <span className="text-[13px] text-neutral-600 font-bold tracking-tight leading-tight group-hover:text-black transition-colors">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Product;
