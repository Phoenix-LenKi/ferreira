import Link from "next/link";
import { brand } from "@/lib/brand";
import { content } from "@/lib/content";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-surface py-16 border-t mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-border/60 pb-12">
                    <div className="max-w-sm">
                        <div className="relative h-12 w-48 sm:h-14 sm:w-56 mb-6">
                            <Image
                                src="/lead-assets/logo.png"
                                alt={`${brand.name} Logo`}
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            {content.doctor.description.split('.')[0]}.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-heading text-lg font-bold mb-4">Contato Direto</h4>
                        <ul className="space-y-3 text-sm text-foreground/80">
                            <li className="flex flex-col">
                                <span className="text-muted-foreground text-xs uppercase tracking-wider mb-1">WhatsApp</span>
                                <a href={`https://wa.me/${brand.contact.whatsapp}`} className="hover:text-primary transition-colors font-medium">{brand.contact.whatsappFormatted}</a>
                            </li>
                            <li className="flex flex-col mt-4">
                                <span className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Endereço Clínica</span>
                                <span>{brand.contact.address}<br />{brand.contact.city}</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-heading text-lg font-bold mb-4">Acesso Rápido</h4>
                        <ul className="space-y-2 text-sm text-foreground/80">
                            <li><Link href="/" className="hover:text-primary transition-colors">Início</Link></li>
                            <li><Link href="/sobre" className="hover:text-primary transition-colors">A Doutora</Link></li>
                            <li><Link href="/invisalign" className="hover:text-primary transition-colors">Invisalign®</Link></li>
                            <li><Link href="/tratamentos" className="hover:text-primary transition-colors">Todos os Tratamentos</Link></li>
                            <li className="pt-2">
                                <a href={brand.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline underline-offset-4">Siga no Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} {brand.name}. {content.footer.rights}</p>
                    {content.footer.agency && (
                        <p className="mt-4 md:mt-0">
                            Desenvolvido por <a href={content.footer.agency.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">{content.footer.agency.name}</a>
                        </p>
                    )}
                </div>
            </div>
        </footer>
    );
}
