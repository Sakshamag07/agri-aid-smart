import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  DollarSign, 
  Leaf, 
  Users,
  BarChart3,
  Shield
} from "lucide-react";

const impactStats = [
  {
    icon: TrendingUp,
    value: "20-30%",
    label: "Yield Increase",
    description: "Average crop yield improvement with ICT-based advisories",
    color: "success"
  },
  {
    icon: DollarSign,
    value: "₹15,000",
    label: "Annual Savings",
    description: "Average cost reduction through optimized input usage",
    color: "accent"
  },
  {
    icon: Users,
    value: "86%",
    label: "Target Farmers",
    description: "Small and marginal farmers in India who need support",
    color: "primary"
  },
  {
    icon: Leaf,
    value: "40%",
    label: "Chemical Reduction",
    description: "Decrease in unnecessary pesticide and fertilizer usage",
    color: "earth"
  },
  {
    icon: BarChart3,
    value: "24/7",
    label: "Real-time Support",
    description: "Continuous monitoring and instant advisory delivery",
    color: "sky"
  },
  {
    icon: Shield,
    value: "100%",
    label: "Data Security",
    description: "Complete privacy and security of farmer data",
    color: "warning"
  }
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm">
            📊 Measurable Impact
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold">
            Transforming Agriculture
            <span className="bg-gradient-to-r from-primary to-sky bg-clip-text text-transparent">
              {" "}Across India
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our technology is making a real difference in farmers' lives, contributing to 
            sustainable farming practices and improved livelihoods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
                <CardContent className="p-8 space-y-4">
                  <div className={`w-16 h-16 bg-${stat.color}/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 text-${stat.color}`} />
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="text-lg font-semibold">{stat.label}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Impact Information */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Supporting Sustainable Agriculture</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-success rounded-full" />
                </div>
                <div>
                  <p className="font-medium">Environmental Conservation</p>
                  <p className="text-sm text-muted-foreground">Reduced chemical usage leads to healthier soil and water conservation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-success rounded-full" />
                </div>
                <div>
                  <p className="font-medium">Food Security</p>
                  <p className="text-sm text-muted-foreground">Improved yields contribute to national food security goals</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-success rounded-full" />
                </div>
                <div>
                  <p className="font-medium">Economic Empowerment</p>
                  <p className="text-sm text-muted-foreground">Better decision-making leads to improved farmer livelihoods</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-primary/10 via-sky/10 to-accent/10 border-primary/20">
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-2">
                <h4 className="text-xl font-bold">Research-Backed Results</h4>
                <p className="text-muted-foreground">
                  Based on NABARD Report 2022 and multiple agricultural studies
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-card/50 rounded-lg">
                  <span className="text-sm">Farmer Adoption Rate</span>
                  <span className="font-bold text-primary">92%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-card/50 rounded-lg">
                  <span className="text-sm">Cost-Benefit Ratio</span>
                  <span className="font-bold text-success">1:4.2</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-card/50 rounded-lg">
                  <span className="text-sm">Advisory Accuracy</span>
                  <span className="font-bold text-sky">94%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;