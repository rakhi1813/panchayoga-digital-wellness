import { Shield, Clock3, Heart, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    icon: Shield,
    title: "Transparency & Trust",
    description: "Complete visibility into your Ayurveda care journey with detailed tracking and reporting.",
    gradient: "from-primary to-primary-light"
  },
  {
    icon: Clock3,
    title: "Time-saving Efficiency",
    description: "Streamlined therapy management reduces waiting times and optimizes treatment schedules.",
    gradient: "from-therapeutic to-accent"
  },
  {
    icon: Heart,
    title: "Patient-centered Experience",
    description: "Personalized care plans and continuous monitoring for optimal wellness outcomes.",
    gradient: "from-accent to-primary-glow"
  },
  {
    icon: Users,
    title: "Universal Accessibility",
    description: "Bridging the gap between rural and urban areas with digital Ayurveda solutions.",
    gradient: "from-primary-glow to-therapeutic"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose PanchArogya?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming traditional Ayurveda with modern digital solutions for better health outcomes.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index}
                className="relative overflow-hidden group hover:shadow-glow transition-all duration-500 cursor-pointer border-border/50 hover:border-primary/30"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-5 group-hover:opacity-10 transition-all duration-500`}></div>
                
                <CardHeader className="relative pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-soft group-hover:shadow-glow group-hover:scale-110 transition-bounce`}>
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth">
                      {benefit.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="relative">
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-muted rounded-full px-6 py-3 text-sm font-medium text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span>Trusted by 10,000+ patients across India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;