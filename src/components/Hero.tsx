"use client";

import Image from "next/image";
import { brand } from "@/lib/brand";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    } as any;

    return (
        <section
            ref={containerRef}
            className="relative min-h-[90vh] flex items-center overflow-hidden bg-surface pt-64 sm:pt-80 pb-12 lg:pt-0 lg:pb-0"
        >
            <div className="absolute inset-0 w-full h-full">
                {/* Mobile Background Image */}
                <div className="absolute inset-0 lg:hidden z-0">
                    <Image
                        src="/lead-assets/dra.ferreira.png"
                        alt={`${brand.doctor} Mobile Background`}
                        fill
                        className="object-cover object-top"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/90 to-surface/20"></div>
                </div>

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(211,172,105,0.05),transparent_50%)] hidden lg:block"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(211,172,105,0.05),transparent_50%)] hidden lg:block"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    <motion.div
                        className="lg:col-span-6 xl:col-span-5 relative z-20"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="show"
                        style={{ opacity }}
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs tracking-widest font-bold uppercase mb-8 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            {brand.title}
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground mb-6 md:mb-8"
                        >
                            Ortodontia de precisão <br className="hidden sm:block" />
                            <span className="text-primary italic font-normal tracking-wide">elevada à arte.</span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed font-light">
                            Unindo tecnologia digital e estética refinada para planejar o seu sorriso ideal. Conheça tratamentos de excelência como o <strong>Invisalign®</strong> no centro de Florianópolis, liderados por {brand.doctor}.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">
                            <a href={`https://wa.me/${brand.contact.whatsapp}?text=${encodeURI(brand.cta.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap text-white text-base font-bold shadow-2xl shadow-primary/20 h-14 px-10 rounded-full hover:scale-105 transition-transform duration-300 w-full sm:w-auto bg-primary">
                                Agendar Avaliação
                            </a>
                            <a href="#tratamentos" className="inline-flex items-center justify-center whitespace-nowrap h-14 px-10 rounded-full bg-transparent border border-primary/20 text-foreground hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300 w-full sm:w-auto font-bold text-base">
                                Conhecer a clínica
                            </a>
                        </motion.div>
                    </motion.div>

                    <div className="lg:col-span-6 xl:col-span-7 h-full relative lg:flex justify-end hidden">

                        {/* Main Portrait Isolation */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="relative w-full max-w-lg aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl z-10 ml-auto border-4 border-white/50"
                        >
                            <Image
                                src="/lead-assets/dra.ferreira.png"
                                alt={`${brand.doctor} - ${brand.title}`}
                                fill
                                className="object-cover object-top"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
}
