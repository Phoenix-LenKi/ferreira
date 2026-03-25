"use client";

import { content } from "@/lib/content";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function InvisalignBenefits() {
    const containerVars = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVars = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="py-24 bg-surface overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative lg:h-[700px] h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/lead-assets/invisalign.png"
                            alt="Invisalign - Alinhadores Transparentes"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Glassmorphism Badge */}
                        <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl">
                            <p className="text-white font-serif text-2xl italic">"A Ortodontia invisível vai além da estética: é sobre liberdade."</p>
                        </div>
                    </motion.div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-12"
                        >
                            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                                Por que escolher <span className="text-primary block mt-2">Invisalign®?</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Resultados acelerados, com total previsibilidade. Conheça as vantagens da mais alta tecnologia ortodôntica do mundo.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={containerVars}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-50px" }}
                            className="space-y-6"
                        >
                            {content.invisalignBenefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVars}
                                    whileHover={{ x: 10 }}
                                    className="bg-background p-6 rounded-2xl shadow-sm border border-border/50 hover:border-primary/30 transition-colors flex gap-6 items-start group cursor-default"
                                >
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                                        <Check className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{benefit.title}</h3>
                                        <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
