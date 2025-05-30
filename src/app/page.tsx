import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StepsSection from "@/components/StepsSection";
import OverviewSection from "@/components/OverviewSection";
import WhySection from "@/components/WhySection";
import TokenomicsSection from "@/components/TokenomicsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <StepsSection />
      <OverviewSection />
      <WhySection />
      <TokenomicsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
