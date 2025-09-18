import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import UserRolesSection from "@/components/sections/UserRolesSection";
import FutureScopeSection from "@/components/sections/FutureScopeSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <HowItWorksSection />
        <UserRolesSection />
        <FutureScopeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
