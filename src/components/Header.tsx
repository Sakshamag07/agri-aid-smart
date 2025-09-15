import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-sky rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">CA</span>
          </div>
          <span className="font-bold text-xl">CropAdvisor</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#impact" className="text-muted-foreground hover:text-foreground transition-colors">
            Impact
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-2">
            <Globe className="w-4 h-4" />
            <span>हिन्दी</span>
          </Button>
          <Button variant="hero" className="hidden md:block">
            Get Started
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;