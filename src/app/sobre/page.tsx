import NavBar from "@/components/NavBar";
import About from "@/components/About";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function SobrePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-grow pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">A Clínica</h1>
                    <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">Conheça a trajetória, qualificações e o ambiente premium de nossa Responsável Técnica na Ortodontia.</p>
                </div>

                {/* Clinic Infrastructure with the new image */}
                <section className="py-12 bg-surface">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src="/lead-assets/consultorio.png"
                                alt="Infraestrutura e Consultório"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 md:p-12">
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Ambiente pensado para o seu conforto.</h2>
                            </div>
                        </div>
                    </div>
                </section>

                <About />
                <CtaFinal />
            </main>
            <Footer />
        </div>
    );
}
