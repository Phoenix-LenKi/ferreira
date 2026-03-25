"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { brand } from "@/lib/brand";

export default function InvisalignHero() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const stagger = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-border/50">
            <div className="absolute inset-0 z-0 opacity-[0.02]">
                <Image src="/lead-assets/invisalign.png" fill className="object-cover" alt="Background Texture" />
            </div>

            <motion.div
                variants={stagger}
                initial="hidden"
                animate="show"
                className="relative z-10 max-w-5xl mx-auto px-4 text-center"
            >
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-10 shadow-sm">
                    A Evolução da Ortodontia
                </motion.div>

                <motion.h1
                    variants={fadeInUp}
                    className="font-heading text-5xl sm:text-6xl md:text-8xl font-bold text-foreground mb-10 leading-[1.05]"
                >
                    A marca número 1 em <br className="hidden md:block" />
                    <span className="text-primary italic font-normal">alinhadores invisíveis.</span>
                </motion.h1>

                <motion.p
                    variants={fadeInUp}
                    className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto mb-16"
                >
                    Mais de <strong>21 milhões de sorrisos</strong> transformados no mundo. Na {brand.name}, desenhamos o seu tratamento com a tecnologia exclusiva SmartTrack®, garantindo previsibilidade absoluta e resultados visíveis mais rápidos.
                </motion.p>

                <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-10 border-t border-border/60">
                    <div className="space-y-2">
                        <h3 className="text-3xl font-heading font-bold text-primary">+21 Milhões</h3>
                        <p className="text-sm text-muted-foreground">de sorrisos transformados mundiamente.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-3xl font-heading font-bold text-primary">#1</h3>
                        <p className="text-sm text-muted-foreground">Em recomendação entre cirurgiões-dentistas.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-3xl font-heading font-bold text-primary">SmartTrack®</h3>
                        <p className="text-sm text-muted-foreground">Tecnologia patenteada de precisão clínica.</p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
