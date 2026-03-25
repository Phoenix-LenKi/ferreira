"use client";

import { content } from "@/lib/content";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Technologies() {
    const containerVars = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVars = {
        hidden: { opacity: 0, x: -30 },
        show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section className="py-24 bg-surface relative" id="tecnologias">
            <div className="absolute inset-0 bg-white/50"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                            Tecnologia a favor do seu conforto.
                        </h2>
                        <p className="text-lg text-muted-foreground font-light mb-12">
                            Na {content.doctor.name.split(' ')[0]} Odontologia, a inovação não é um recurso extra, é o padrão do nosso atendimento para garantir precisão absoluta e total previsibilidade clínica.
                        </p>

                        <motion.div
                            variants={containerVars}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            {content.technologies.map((tech, index) => (
                                <motion.div key={index} variants={itemVars} className="flex gap-6 group">
                                    <div className="mt-1 flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                                            <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-2xl font-bold mb-3">{tech.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed font-light">{tech.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl bg-white border border-border/50 p-12 flex flex-col justify-center items-center group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-0 group-hover:scale-105 transition-transform duration-1000"></div>

                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/lead-assets/tecnologia.png"
                                alt="Odontologia Digital"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        </div>

                        <div className="relative z-10 text-center space-y-4 mt-auto">
                            <h3 className="font-heading text-4xl font-bold text-white">Odontologia Digital</h3>
                            <p className="text-lg text-white/90 max-w-xs mx-auto font-light leading-relaxed">
                                Equipamentos de última geração atuando para transformar e acelerar tratamentos.
                            </p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
