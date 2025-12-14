import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PerformanceSection } from "@/components/PerformanceSection";
import { PowertrainSection } from "@/components/PowertrainSection";
import { ConfiguratorSection } from "@/components/ConfiguratorSection";
import { DriverSection } from "@/components/DriverSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PerformanceSection />
      <PowertrainSection />
      <ConfiguratorSection />
      <DriverSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
