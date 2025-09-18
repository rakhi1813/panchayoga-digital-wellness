import { ArrowRight, Download, Calendar } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";
import logo from "@/assets/panchrogya-logo.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
      
      <div className="container relative mx-auto px-4 lg:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src={logo} 
              alt="PanchArogya Logo - Five Elements of Ayurveda" 
              className="h-24 w-24 lg:h-32 lg:w-32 mx-auto drop-shadow-lg bg-transparent"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Panch<span className="text-white">Arogya</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl lg:text-2xl text-white/90 mb-6 font-medium">
            Blending Ayurveda with Digital Care
          </p>

          {/* Description */}
          <p className="text-lg text-white/80 mb-12 max-w-2xl leading-relaxed">
            A smart platform to simplify Panchakarma therapies with digital scheduling, 
            progress tracking, and patient-centric care for the modern world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <HeroButton variant="secondary" size="lg" className="w-full sm:w-auto">
              <Download className="mr-2 h-5 w-5" />
              Download App
              <ArrowRight className="ml-2 h-4 w-4" />
            </HeroButton>
            <HeroButton variant="wellness" size="lg" className="w-full sm:w-auto">
              <Calendar className="mr-2 h-5 w-5" />
              Book Therapy
              <ArrowRight className="ml-2 h-4 w-4" />
            </HeroButton>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-white/70 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">10,000+</div>
              <div>Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">500+</div>
              <div>Ayurvedic Doctors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">95%</div>
              <div>Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;