import { User, Stethoscope, Building, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroButton } from "@/components/ui/hero-button";
import { Link } from "react-router-dom";

const userRoles = [
  {
    icon: User,
    title: "Patients",
    description: "Book appointments, track therapy progress, get personalized reminders, and manage your Ayurvedic diet plans.",
    features: ["Book & Track Appointments", "Diet Management", "Progress Tracking", "Personalized Reminders"],
    gradient: "from-primary to-primary-light",
    dashboardLink: "/dashboard/patient"
  },
  {
    icon: Stethoscope,
    title: "Doctors & Therapists",
    description: "Comprehensive patient management, monitor recovery progress, and provide detailed treatment notes.",
    features: ["Patient Management", "Recovery Monitoring", "Treatment Notes", "Session Analytics"],
    gradient: "from-therapeutic to-accent",
    dashboardLink: "/dashboard/doctor"
  },
  {
    icon: Building,
    title: "Institutions",
    description: "Manage resources, generate reports & analytics, and oversee institutional operations efficiently.",
    features: ["Resource Management", "Analytics & Reports", "Staff Coordination", "Quality Assurance"],
    gradient: "from-accent to-primary-glow",
    dashboardLink: "/dashboard/institution"
  },
  {
    icon: Settings,
    title: "Administrators",
    description: "Complete system control, user management, monitoring capabilities, and system-wide oversight.",
    features: ["Full System Control", "User Management", "System Monitoring", "Security & Compliance"],
    gradient: "from-primary-glow to-therapeutic",
    dashboardLink: "/dashboard/admin"
  }
];

const UserRolesSection = () => {
  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Designed for Every User
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored experiences for patients, healthcare providers, institutions, and administrators 
            in the Ayurveda ecosystem.
          </p>
        </div>

        {/* User Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {userRoles.map((role, index) => {
            const IconComponent = role.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden hover:shadow-glow transition-all duration-500 cursor-pointer border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-5 group-hover:opacity-10 transition-all duration-500`}></div>
                
                <CardHeader className="relative pb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${role.gradient} flex items-center justify-center shadow-soft group-hover:shadow-glow group-hover:scale-110 transition-bounce mb-4`}>
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth">
                    {role.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {role.description}
                  </CardDescription>
                  
                  {/* Features List */}
                  <div className="space-y-2">
                    {role.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Dashboard Link */}
                  <div className="pt-4">
                    <HeroButton 
                      asChild 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:border-primary group-hover:text-primary"
                    >
                      <Link to={role.dashboardLink}>
                        View Dashboard
                      </Link>
                    </HeroButton>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Role-Based Access Control
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Each user type has carefully designed permissions and features to ensure security, 
              privacy, and optimal user experience across all levels of the healthcare ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserRolesSection;