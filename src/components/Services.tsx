"use client";

import { content } from "@/lib/content";
import { Sparkles, Diamond, Smile, Activity, Heart, Zap, ShieldAlert, Stethoscope, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-6 h-6" />,
    Diamond: <Diamond className="w-6 h-6" />,
    FaceSmile: <Smile className="w-6 h-6" />,
    Activity: <Activity className="w-6 h-6" />,
    Heart: <Heart className="w-6 h-6" />,
    Zap: <Zap className="w-6 h-6" />,
    ShieldAlert: <ShieldAlert className="w-6 h-6" />,
    Stethoscope: <Stethoscope className="w-6 h-6" />,
};

export default function Services() {
    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section id="tratamentos" className="py-24 bg-background border-b border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Especialidades Clínicas
                        </h2>
                        <p className="text-lg text-muted-foreground font-light leading-relaxed">
                            Oferecemos uma grade completa de tratamentos para reabilitar e embelezar o seu sorriso, com foco na sua saúde e resultados de longo prazo.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/tratamentos" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all uppercase tracking-wider text-sm">
                            Ver todos os detalhes <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {content.services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={fadeInUp}
                            className="group relative flex flex-col p-8 rounded-3xl bg-surface border border-border/60 hover:border-transparent hover:shadow-2xl hover:-translate-y-2 hover:bg-white transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                    {iconMap[service.icon] || <Sparkles className="w-6 h-6" />}
                                </div>
                                <h3 className="font-heading text-xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-sm text-foreground/70 leading-relaxed font-light">
                                    {service.shortDescription}
                                </p>
                            </div>

                            <div className="mt-8 flex items-center gap-2 text-xs font-bold text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                <span>Saiba mais</span>
                                <ArrowRight className="w-3 h-3" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
