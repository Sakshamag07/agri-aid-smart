import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CloudRain, 
  Leaf, 
  Bug, 
  TrendingUp, 
  Mic, 
  Globe,
  Camera,
  BarChart3
} from "lucide-react";

const features = [
  {
    icon: CloudRain,
    title: "Weather-Based Alerts",
    description: "Real-time weather updates and predictive insights for your specific location",
    badge: "Real-time",
    color: "sky"
  },
  {
    icon: Leaf,
    title: "Soil Health Analysis",
    description: "Personalized soil recommendations and fertilizer guidance based on your land",
    badge: "Scientific",
    color: "earth"
  },
  {
    icon: Bug,
    title: "Pest Detection",
    description: "Upload crop images for instant AI-powered pest and disease identification",
    badge: "AI-Powered",
    color: "accent"
  },
  {
    icon: TrendingUp,
    title: "Market Price Tracking",
    description: "Live market prices for your crops to help you make informed selling decisions",
    badge: "Live Data",
    color: "success"
  },
  {
    icon: Camera,
    title: "Crop Monitoring",
    description: "Track your crop growth and health with photo-based analysis",
    badge: "Visual AI",
    color: "primary"
  },
  {
    icon: BarChart3,
    title: "Yield Prediction",
    description: "Data-driven yield forecasts to help you plan and optimize production",
    badge: "Predictive",
    color: "warning"
  },
  {
    icon: Mic,
    title: "Voice Support",
    description: "Complete voice interface for farmers with limited digital literacy",
    badge: "Accessible",
    color: "sky"
  },
  {
    icon: Globe,
    title: "Multilingual",
    description: "Support for Hindi, regional languages, and local dialects",
    badge: "Local",
    color: "earth"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm">
            🚀 Advanced Features
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold">
            Everything Farmers Need in
            <span className="bg-gradient-to-r from-primary to-sky bg-clip-text text-transparent">
              {" "}One Platform
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive suite of AI-powered tools helps farmers make informed decisions 
            and improve their agricultural outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 bg-${feature.color}/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 text-${feature.color}`} />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;