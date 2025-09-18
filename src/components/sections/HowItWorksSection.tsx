import { Download, UserPlus, Calendar, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Download PanchArogya App",
    description: "Get started with our user-friendly mobile and web application available on all platforms."
  },
  {
    number: "02",
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Set up your profile as a patient, doctor, or institution with complete medical history."
  },
  {
    number: "03",
    icon: Calendar,
    title: "Book & Manage Sessions",
    description: "Schedule therapy sessions, track appointments, and manage your treatment timeline."
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Track Progress & Recovery",
    description: "Monitor your wellness journey with visual progress tracking and personalized insights."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with PanchArogya in just four simple steps and begin your digital Ayurveda journey.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-therapeutic transform -translate-y-1/2 z-0"></div>
              
              {/* Steps Grid */}
              <div className="grid grid-cols-4 gap-8 relative z-10">
                {steps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="text-center">
                      {/* Step Circle */}
                      <div className="relative mb-6">
                        <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-glow mb-4">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-soft">
                          <span className="text-xs font-bold text-accent-foreground">{step.number}</span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  {/* Step Circle */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center shadow-soft">
                      <span className="text-xs font-bold text-accent-foreground">{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;