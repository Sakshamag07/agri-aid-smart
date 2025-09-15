import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin,
  Instagram
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-sky rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">CA</span>
              </div>
              <span className="font-bold text-xl">CropAdvisor</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Empowering Indian farmers with AI-powered agricultural insights and 
              personalized crop advisory services for sustainable farming.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="p-2">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <a href="#features" className="block text-muted-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="block text-muted-foreground hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#impact" className="block text-muted-foreground hover:text-primary transition-colors">
                Impact
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Download App
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Support Center
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+91 1800-CROP-HELP</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">support@cropadvisor.in</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Agricultural Technology Center<br />
                  New Delhi, India
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Get the latest agricultural insights and updates directly to your inbox.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background"
              />
              <Button variant="hero" className="w-full">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Available in: हिन्दी • English • বাংলা • தமிழ் • తెలుగు
            </p>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 CropAdvisor. All rights reserved. Made with ❤️ for Indian farmers.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;