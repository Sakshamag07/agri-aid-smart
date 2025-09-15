import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CloudRain, 
  Thermometer, 
  Droplets, 
  Wind,
  TrendingUp,
  TrendingDown,
  Upload,
  MessageSquare
} from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

const DashboardPreview = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm">
            📱 Live Dashboard
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold">
            Real-Time Agricultural
            <span className="bg-gradient-to-r from-primary to-sky bg-clip-text text-transparent">
              {" "}Intelligence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get instant access to all the data you need to make informed farming decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Dashboard Preview */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden border-0 shadow-2xl">
              <CardContent className="p-0">
                <img
                  src={dashboardPreview}
                  alt="CropAdvisor Dashboard"
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats & Features */}
          <div className="space-y-6">
            {/* Weather Card */}
            <Card className="bg-gradient-to-br from-sky/10 to-sky/5 border-sky/20">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <CloudRain className="w-5 h-5 text-sky mr-2" />
                  Today's Weather
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Thermometer className="w-4 h-4 text-sky" />
                    <span className="text-sm">Temperature</span>
                  </div>
                  <span className="font-semibold">28°C</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Droplets className="w-4 h-4 text-sky" />
                    <span className="text-sm">Humidity</span>
                  </div>
                  <span className="font-semibold">65%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Wind className="w-4 h-4 text-sky" />
                    <span className="text-sm">Wind Speed</span>
                  </div>
                  <span className="font-semibold">12 km/h</span>
                </div>
                <Badge className="w-full justify-center bg-warning/10 text-warning border-warning/20">
                  Rain expected tomorrow
                </Badge>
              </CardContent>
            </Card>

            {/* Market Prices */}
            <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <TrendingUp className="w-5 h-5 text-success mr-2" />
                  Market Prices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Wheat</span>
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold">₹2,150/qtl</span>
                    <TrendingUp className="w-3 h-3 text-success" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Rice</span>
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold">₹1,890/qtl</span>
                    <TrendingDown className="w-3 h-3 text-destructive" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Sugarcane</span>
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold">₹350/qtl</span>
                    <TrendingUp className="w-3 h-3 text-success" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Crop Photo
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Ask Advisory Question
                </Button>
                <Button variant="hero" className="w-full">
                  Get Today's Recommendations
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;