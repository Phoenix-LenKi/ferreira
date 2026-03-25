import NavBar from "@/components/NavBar";
import InvisalignHero from "@/components/InvisalignHero";
import InvisalignBenefits from "@/components/InvisalignBenefits";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function InvisalignPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <NavBar />
            <main className="flex-grow">
                <InvisalignHero />
                <InvisalignBenefits />
                <CtaFinal />
            </main>
            <Footer />
        </div>
    );
}
