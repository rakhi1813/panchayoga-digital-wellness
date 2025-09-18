import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import logo from "@/assets/panchrogya-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="PanchArogya Logo" className="h-8 w-8" />
              <span className="font-bold text-lg">PanchArogya</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Blending traditional Ayurveda with modern digital solutions 
              for comprehensive wellness management.
            </p>
            <div className="flex items-center space-x-1 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-accent fill-current" />
              <span>for wellness</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/dashboard/patient" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Patient Portal
                </Link>
              </li>
              <li>
                <Link to="/dashboard/doctor" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Doctor Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">Panchakarma Therapy</li>
              <li className="text-primary-foreground/80">Digital Consultation</li>
              <li className="text-primary-foreground/80">Progress Tracking</li>
              <li className="text-primary-foreground/80">Diet Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>+91 98765 43210</p>
              <p>contact@pancharogya.com</p>
              <p>123 Wellness Avenue,<br />Kerala, India 680001</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © 2024 PanchArogya. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-accent transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-accent transition-smooth">
                Terms of Service
              </Link>
              <Link to="/support" className="text-primary-foreground/60 hover:text-accent transition-smooth">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;