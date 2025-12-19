// @ts-nocheck
import { useRef, useState } from 'react';
import { motion } from "framer-motion";
import CardSwap, { Card } from './CardSwap';

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
        className="text-emerald-400"
    >
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const ProductContent = ({ plan }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-8">
        <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
                <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border ${plan.isPopular ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-white/5 text-neutral-400 border-white/10'}`}>
                    {plan.tagline}
                </span>
                {plan.isPopular && (
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                        🔥 Most Popular
                    </span>
                )}
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 leading-none">
                {plan.name}
            </h3>
            <p className="text-neutral-400 text-lg font-medium leading-relaxed mb-8 max-w-sm">
                {plan.description}
            </p>
            <div className="flex items-baseline gap-2 mb-10">
                <span className="text-neutral-500 text-2xl font-black">Rp</span>
                <span className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                    {plan.price}
                </span>
            </div>
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-fit py-5 px-10 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-300 cursor-pointer ${plan.isPopular
                    ? "bg-white text-black shadow-xl"
                    : "bg-neutral-800 text-white hover:bg-neutral-700"
                    }`}
            >
                {plan.buttonText}
            </motion.button>
        </div>
        <div className="bg-white/5 rounded-[2rem] p-8 md:p-10 border border-white/5 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8">
                <span className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em]">Package Services</span>
                <div className="h-px grow bg-white/10" />
            </div>
            <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                        <div className="mt-1 flex-shrink-0">
                            <CheckIcon />
                        </div>
                        <span className="text-sm md:text-base text-neutral-300 font-bold tracking-tight leading-tight group-hover:text-white transition-colors">
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const Product = () => {
    const plans = [
        {
            name: "Paket Basic",
            tagline: "Start your journey",
            description: "Solusi tepat untuk personal, UMKM, atau bisnis yang baru mulai hadir secara online.",
            price: "1.399.000",
            buttonText: "Get Started",
            features: [
                "Desain website sederhana dan profesional",
                "Hingga 3 halaman (Home, Tentang, Kontak)",
                "Mobile responsive",
                "Integrasi WhatsApp",
                "Gratis revisi ringan",
                "Domain & hosting (opsional)",
            ],
            isPopular: false,
            color: "emerald"
        },
        {
            name: "Paket Exclusive",
            tagline: "Unmatched performance",
            description: "Untuk brand dan perusahaan yang mengutamakan performa, tampilan premium, dan pengalaman pengguna maksimal.",
            price: "4.899.000",
            buttonText: "Choose Exclusive",
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
            color: "blue"
        },
        {
            name: "Paket Professional",
            tagline: "Scale your business",
            description: "Dirancang untuk bisnis yang ingin tampil lebih meyakinkan dan fungsional..",
            price: "3.299.000",
            buttonText: "Try Professional",
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
            color: "purple"
        },
    ];

    return (
        <section id="pricing" className="py-24 px-6 relative bg-transparent overflow-hidden">
            {/* Decorative Background Elements */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-1/2 -right-20 w-80 h-80 bg-emerald-900 rounded-full blur-[100px] -z-10"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.15, scale: 1.1 }}
                transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                className="absolute bottom-0 -left-20 w-96 h-96 bg-blue-900 rounded-full blur-[120px] -z-10"
            />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4"
                    >
                        Choice your best plans
                    </motion.h2>
                    <p className="text-neutral-400 font-medium max-w-2xl mx-auto">
                        Pilih paket yang paling sesuai dengan kebutuhan bisnis Anda. Tidak ada biaya tersembunyi.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mt-10">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={plan.isPopular ? "md:-mt-4 md:mb-4 lg:-mt-8 lg:mb-8" : ""}
                        >
                            <div className={`relative rounded-[2.5rem] overflow-hidden flex flex-col h-full border ${plan.isPopular ? 'bg-neutral-900 border-blue-500/30' : 'bg-neutral-900/60 border-white/5'}`}>
                                <div className="p-8 md:p-10 flex flex-col h-full relative overflow-hidden">
                                    {plan.isPopular && (
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full -mr-10 -mt-10" />
                                    )}

                                    <div className="mb-8">
                                        <div className="flex flex-wrap items-center gap-3 mb-6">
                                            <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border ${plan.isPopular ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-white/5 text-neutral-400 border-white/10'}`}>
                                                {plan.tagline}
                                            </span>
                                            {plan.isPopular && (
                                                <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400">
                                                    🔥 Popular
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-3xl font-black text-white tracking-tighter mb-4">
                                            {plan.name}
                                        </h3>
                                        <p className="text-neutral-400 text-sm font-medium leading-relaxed">
                                            {plan.description}
                                        </p>
                                    </div>

                                    <div className="mb-10">
                                        <div className="flex items-baseline gap-1.5">
                                            <span className="text-neutral-500 text-xl font-black">Rp</span>
                                            <span className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                                                {plan.price}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grow mb-10">
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em]">Features</span>
                                            <div className="h-px grow bg-white/5" />
                                        </div>
                                        <ul className="space-y-4">
                                            {plan.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 group">
                                                    <div className="mt-1 flex-shrink-0">
                                                        <CheckIcon />
                                                    </div>
                                                    <span className="text-sm text-neutral-300 font-bold tracking-tight leading-tight group-hover:text-white transition-colors">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 cursor-pointer ${plan.isPopular
                                            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-500"
                                            : "bg-neutral-800 text-white hover:bg-neutral-700"
                                            }`}
                                    >
                                        {plan.buttonText}
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Product;
