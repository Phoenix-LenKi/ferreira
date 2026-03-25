"use client";

import { Button } from "@/components/ui/button";
import { brand } from "@/lib/brand";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CtaFinal() {
    return (
        <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white blur-[100px] animate-pulse"></div>
                <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-black blur-[100px]"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 leading-tight">
                        Pronto para desenhar o <br className="hidden md:block" />
                        <span className="italic font-light">seu novo sorriso?</span>
                    </h2>
                    <p className="text-xl md:text-2xl font-light opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Agende sua avaliação com a {brand.doctor} e descubra como a Ortodontia Premium pode transformar a sua confiança.
                    </p>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                        <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 h-16 px-10 rounded-full text-lg font-bold shadow-2xl shadow-black/20 group">
                            <a href={`https://wa.me/${brand.contact.whatsapp}?text=${encodeURI(brand.cta.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                {brand.cta.primaryText}
                                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
