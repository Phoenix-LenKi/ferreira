"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { brand } from "@/lib/brand";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const NavLinks = () => (
        <>
            <Link href="/tratamentos" onClick={() => setIsOpen(false)} className="text-foreground/80 hover:text-primary transition-colors font-medium">Tratamentos</Link>
            <Link href="/invisalign" onClick={() => setIsOpen(false)} className="text-foreground/80 hover:text-primary transition-colors font-medium">Invisalign®</Link>
            <Link href="/sobre" onClick={() => setIsOpen(false)} className="text-foreground/80 hover:text-primary transition-colors font-medium">A Clínica</Link>
            <Link href="/contato" onClick={() => setIsOpen(false)} className="text-foreground/80 hover:text-primary transition-colors font-medium">Contato</Link>
        </>
    );

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-xl border-b shadow-sm py-2' : 'bg-transparent py-4'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="relative h-10 w-48 sm:h-12 sm:w-56 group">
                        <Image
                            src="/lead-assets/logo.png"
                            alt={`${brand.name} Logo`}
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </Link>

                    <nav className="hidden md:flex gap-10 items-center text-sm">
                        <NavLinks />
                        <a href={`https://wa.me/${brand.contact.whatsapp}?text=${encodeURI(brand.cta.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="ml-2 font-sans font-bold text-white rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-transform bg-primary px-6 py-2">
                            Falar com a Clínica
                        </a>
                    </nav>

                    <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-t border-border shadow-xl overflow-hidden"
                    >
                        <nav className="flex flex-col gap-5 p-6 text-center text-lg">
                            <NavLinks />
                            <a href={`https://wa.me/${brand.contact.whatsapp}?text=${encodeURI(brand.cta.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="mt-6 text-white shadow-sm rounded-full py-4 text-base w-full max-w-xs mx-auto bg-primary">
                                Agendar Agora
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
