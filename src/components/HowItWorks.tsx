import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  MapPin, 
  Brain, 
  MessageSquare,
  ArrowRight
} from "lucide-react";
import pestDetectionImage from "@/assets/pest-detection.jpg";

const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Download & Register",
    description: "Simple registration with your mobile number. No complex forms or documentation required.",
    color: "primary"
  },
  {
    number: "02",
    icon: MapPin,
    title: "Location Setup",
    description: "We automatically detect your location and soil type, or you can manually input your farm details.",
    color: "sky"
  },
  {
    number: "03",
    icon: Brain,
    title: "AI Analysis",
    description: "Our AI analyzes weather, soil, crop history, and market data to generate personalized recommendations.",
    color: "accent"
  },
  {
    number: "04",
    icon: MessageSquare,
    title: "Get Recommendations",
    description: "Receive daily advisories via text, voice, or chat in your preferred language.",
    color: "success"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm">
            🎯 Simple Process
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold">
            How CropAdvisor
            <span className="bg-gradient-to-r from-primary to-sky bg-clip-text text-transparent">
              {" "}Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started with personalized crop advisory in just 4 simple steps. 
            No technical knowledge required.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 bg-${step.color}/10 rounded-2xl flex items-center justify-center relative`}>
                      <Icon className={`w-8 h-8 text-${step.color}`} />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-primary to-sky rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {step.number}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
            
            <div className="pt-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Visual Example */}
          <div className="space-y-6">
            <Card className="overflow-hidden border-0 shadow-2xl">
              <CardContent className="p-0">
                <img
                  src={pestDetectionImage}
                  alt="Farmer using CropAdvisor for pest detection"
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-primary/10 to-sky/10 border-primary/20">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                    <span className="text-sm font-medium">AI Analysis Complete</span>
                  </div>
                  <div className="bg-card rounded-lg p-4 space-y-2">
                    <p className="text-sm font-medium">🐛 Pest Detection Result:</p>
                    <p className="text-sm text-muted-foreground">
                      "Aphid infestation detected. Recommend neem oil spray at 3ml/liter. 
                      Apply early morning or evening for best results."
                    </p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Response in 2.3 seconds
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;