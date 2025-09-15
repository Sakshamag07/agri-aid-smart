import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, PlayCircle, Smartphone, Mic } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-sky/5 to-accent/5" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm">
                🌾 Empowering 86% of Indian Farmers
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Smart Crop Advisory for
                <span className="bg-gradient-to-r from-primary to-sky bg-clip-text text-transparent">
                  {" "}Indian Farmers
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get personalized, real-time crop recommendations based on your soil, weather, and location. 
                Increase yields by 20-30% with AI-powered agricultural insights in your native language.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Start Free Advisory
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <PlayCircle className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Mobile First</p>
                  <p className="text-sm text-muted-foreground">Works on any phone</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-sky/10 rounded-lg flex items-center justify-center">
                  <Mic className="w-5 h-5 text-sky" />
                </div>
                <div>
                  <p className="font-semibold">Voice Support</p>
                  <p className="text-sm text-muted-foreground">No reading required</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-sky/20 rounded-3xl blur-3xl" />
            <img
              src={heroImage}
              alt="Smart farming with AI technology"
              className="relative rounded-3xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;