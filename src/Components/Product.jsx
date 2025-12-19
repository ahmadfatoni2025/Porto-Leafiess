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
            tagline: "Entry Level",
            description: "Solusi tepat untuk personal, UMKM, atau bisnis yang baru mulai hadir secara online.",
            price: "1.399.000",
            buttonText: "Start Basic",
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
            tagline: "High End Solution",
            description: "Untuk brand dan perusahaan yang mengutamakan performa, tampilan premium, dan pengalaman pengguna maksimal.",
            price: "4.899.000",
            buttonText: "Go Exclusive",
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
        },
        {
            name: "Paket Professional",
            tagline: "Business Growth",
            description: "Dirancang untuk bisnis yang ingin tampil lebih meyakinkan dan fungsional..",
            price: "3.299.000",
            buttonText: "Get Professional",
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
        <section id="pricing" className="py-24 px-6 relative bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
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

                <div style={{ height: '650px', position: 'relative' }} className="mt-10">
                    <CardSwap
                        cardDistance={60}
                        verticalDistance={30}
                        delay={5000}
                        pauseOnHover={true}
                    >
                        {plans.map((plan, index) => (
                            <Card
                                key={plan.name}
                                className={plan.isPopular ? "bg-neutral-900 border border-blue-500/20" : "bg-neutral-900/80 border border-white/5"}
                            >
                                <ProductContent plan={plan} />
                            </Card>
                        ))}
                    </CardSwap>
                </div>
            </div>
        </section>
    );
};

export default Product;
