import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HeroButton } from "@/components/ui/hero-button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your digital Ayurveda journey? Contact us for more information 
            or schedule a consultation with our wellness experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center space-x-2">
                <MessageCircle className="h-6 w-6 text-primary" />
                <span>Send us a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="border-border/50 focus:border-primary"
                />
                
                <Textarea
                  name="message"
                  placeholder="Tell us about your wellness goals or questions..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="min-h-32 border-border/50 focus:border-primary"
                />
                
                <HeroButton type="submit" variant="primary" className="w-full">
                  Send Message
                </HeroButton>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-soft transition-smooth">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-soft transition-smooth">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-wellness rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">contact@pancharogya.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-soft transition-smooth">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-therapeutic text-therapeutic-foreground rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground">
                      123 Wellness Avenue,<br />
                      Ayurveda District, Kerala 680001
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* WhatsApp CTA */}
            <Card className="p-6 bg-gradient-wellness text-white border-0">
              <div className="text-center">
                <MessageCircle className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quick Support</h3>
                <p className="mb-4 text-white/90">
                  Get instant help on WhatsApp for urgent queries
                </p>
                <HeroButton variant="secondary" className="bg-white text-accent hover:bg-white/90">
                  Chat on WhatsApp
                </HeroButton>
              </div>
            </Card>

            {/* Social Media */}
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((platform) => (
                  <Button
                    key={platform}
                    variant="outline"
                    size="sm"
                    className="hover:border-primary hover:text-primary"
                  >
                    {platform}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;