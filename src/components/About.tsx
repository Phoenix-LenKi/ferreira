"use client";

import Image from "next/image";
import { content } from "@/lib/content";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
    const containerVars = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVars = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="py-24 bg-background overflow-hidden relative" id="sobre">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(211,172,105,0.03),transparent_40%)]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-full max-w-lg mx-auto lg:mx-0"
                    >
                        <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl z-10 border-8 border-white">
                            <Image
                                src="/lead-assets/responsavel.png"
                                alt={content.doctor.name}
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="absolute -bottom-12 -right-12 w-3/4 h-3/4 bg-primary/10 rounded-[2rem] -z-10 blur-xl"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-border text-primary text-xs font-bold tracking-widest uppercase mb-6">
                            Responsável Técnica
                        </div>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                            {content.doctor.name}
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed font-light mb-10">
                            {content.doctor.description}
                        </p>

                        <motion.div
                            variants={containerVars}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="bg-surface rounded-3xl p-10 border border-border/60 shadow-xl shadow-primary/5"
                        >
                            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border/80">
                                <div className="p-3 bg-white rounded-xl shadow-sm">
                                    <GraduationCap className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="font-heading text-2xl font-bold">Formação e Credenciais</h3>
                            </div>

                            <ul className="space-y-5">
                                {content.doctor.credentials.map((cred, index) => (
                                    <motion.li key={index} variants={itemVars} className="flex items-start gap-4">
                                        <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 shadow-sm shadow-primary/50"></span>
                                        <span className="text-foreground/90 leading-relaxed font-medium">{cred}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
