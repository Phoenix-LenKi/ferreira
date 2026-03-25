import NavBar from "@/components/NavBar";
import Services from "@/components/Services";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function TratamentosPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-grow pt-10">
                <Services />
                <CtaFinal />
            </main>
            <Footer />
        </div>
    );
}
