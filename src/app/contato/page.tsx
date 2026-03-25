import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { brand } from "@/lib/brand";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContatoPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-grow bg-surface py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 md:mb-16">
                        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground">Contato & Agendamento</h1>
                        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-2">Em Florianópolis, nossa estrutura de ponta aguarda para cuidar do seu sorriso com total excelência clínica.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start bg-background p-8 md:p-12 rounded-3xl shadow-sm border border-border/50">
                        <div className="space-y-12">
                            <h2 className="font-heading text-2xl font-bold mb-8">Informações de Contato</h2>
                            <ul className="space-y-8">
                                <li className="flex items-start gap-5">
                                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPin className="text-primary w-6 h-6" />
                                    </div>
                                    <div className="pt-2">
                                        <h3 className="font-bold text-lg mb-1">Localização</h3>
                                        <p className="text-muted-foreground leading-relaxed">{brand.contact.address}<br />{brand.contact.city}</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-5">
                                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Phone className="text-primary w-6 h-6" />
                                    </div>
                                    <div className="pt-2">
                                        <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                                        <a href={`https://wa.me/${brand.contact.whatsapp}?text=${encodeURI(brand.cta.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-lg">{brand.contact.whatsappFormatted}</a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-5">
                                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail className="text-primary w-6 h-6" />
                                    </div>
                                    <div className="pt-2 w-full">
                                        <h3 className="font-bold text-lg mb-1">E-mail</h3>
                                        <a href={`mailto:${brand.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors text-lg break-all block">{brand.contact.email}</a>
                                    </div>
                                </li>
                            </ul>

                            <div className="pt-8 border-t border-border/50">
                                <h3 className="font-bold mb-6 text-lg">Redes Sociais da Clínica</h3>
                                <div className="flex gap-4">
                                    <a href={brand.social.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-surface shadow-sm flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all text-foreground hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                    </a>
                                    <a href={brand.social.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-surface shadow-sm flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all text-foreground hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                    </a>
                                    <a href={brand.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-surface shadow-sm flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all text-foreground hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[300px] lg:h-full min-h-[300px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-lg border border-border bg-muted">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.9525281518596!2d-48.5539567!3d-27.5947382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527382025ed91d7%3A0xe542a2e4fe9b0b4!2sR.%20Ara%C3%BAjo%20Figueiredo%2C%20114%20-%20Centro%2C%20Florian%C3%B3polis%20-%20SC%2C%2088010-020!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
