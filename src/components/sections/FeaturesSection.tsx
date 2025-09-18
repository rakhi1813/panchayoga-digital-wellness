import { 
  Calendar, 
  Clock, 
  Bell, 
  Utensils, 
  Activity, 
  MessageSquare,
  CheckCircle2,
  Timer
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Calendar,
    title: "Automated Therapy Scheduling",
    description: "Easy planning for patients and doctors with intelligent scheduling algorithms.",
    color: "text-primary"
  },
  {
    icon: Clock,
    title: "Smart Queue System",
    description: "Live tracker for waiting time - 'Your therapy starts in 25 mins' notifications.",
    color: "text-therapeutic"
  },
  {
    icon: Bell,
    title: "Pre & Post-Procedure Notifications",
    description: "Comprehensive alerts via in-app, SMS, and email for better care coordination.",
    color: "text-accent"
  },
  {
    icon: Utensils,
    title: "Ayur-Diet Visual Plate",
    description: "Green 'Eat', Red 'Avoid' system with simple diet icons for easy understanding.",
    color: "text-primary-glow"
  },
  {
    icon: Activity,
    title: "Real-time Therapy Tracking",
    description: "Progress bars and recovery milestones to monitor your wellness journey.",
    color: "text-therapeutic"
  },
  {
    icon: MessageSquare,
    title: "Feedback Loop",
    description: "Patient reporting system for improvements and side effects monitoring.",
    color: "text-accent"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comprehensive Digital Care
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of traditional Ayurveda and modern technology
            for seamless healthcare management.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-smooth cursor-pointer border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce`}>
                    <IconComponent className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Feature Highlight */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-card border border-border/50">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center text-foreground mb-4">
            Smart Integration Ecosystem
          </h3>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our platform seamlessly integrates all aspects of Panchakarma care - from initial consultation 
            to recovery tracking - ensuring nothing falls through the cracks in your wellness journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;