import { Brain, Wifi, Globe } from "lucide-react";

const futureFeatures = [
  {
    icon: Brain,
    title: "AI-Powered Personalized Plans",
    description: "Machine learning algorithms for customized diet and therapy recommendations based on individual constitution and progress.",
    color: "text-primary"
  },
  {
    icon: Wifi,
    title: "IoT Vitals Monitoring",
    description: "Integration with smart devices for real-time monitoring of pulse, blood pressure, and other vital parameters.",
    color: "text-therapeutic"
  },
  {
    icon: Globe,
    title: "Global Ayurveda Network",
    description: "Expansion to international wellness centers, creating a worldwide network of authenticated Ayurveda practitioners.",
    color: "text-accent"
  }
];

const FutureScopeSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-primary rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-accent rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-therapeutic rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 border border-primary-glow rounded-full"></div>
      </div>

      <div className="container relative mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-muted rounded-full px-4 py-2 text-sm font-medium text-muted-foreground mb-6">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span>Future Roadmap</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            The Future of Digital Ayurveda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring cutting-edge technologies to revolutionize traditional wellness practices 
            for the next generation of healthcare.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {futureFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group text-center p-8 rounded-2xl border border-border/50 hover:border-primary/30 bg-card/30 backdrop-blur-sm hover:shadow-glow transition-all duration-500 cursor-pointer"
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-muted rounded-2xl flex items-center justify-center group-hover:scale-110 transition-bounce">
                    <IconComponent className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <div className="absolute inset-0 w-16 h-16 mx-auto bg-gradient-primary opacity-0 group-hover:opacity-20 rounded-2xl transition-all duration-500"></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-smooth">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Coming Soon Badge */}
                <div className="mt-6">
                  <span className="inline-flex items-center space-x-1 bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
                    <span>Coming Soon</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Hint */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-primary/10 border border-primary/20 rounded-full px-6 py-4">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">Expected rollout: Q2 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureScopeSection;