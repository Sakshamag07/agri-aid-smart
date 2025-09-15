import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  AlertTriangle, 
  CloudRain, 
  Sprout,
  TrendingUp,
  Calendar
} from "lucide-react";

interface AdvisoryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AdvisoryModal = ({ open, onOpenChange }: AdvisoryModalProps) => {
  const todaysDate = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Today's Crop Advisory - {todaysDate}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Weather Alert */}
          <Card className="bg-warning/10 border-warning/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-warning">
                <AlertTriangle className="w-5 h-5" />
                Weather Alert
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Rain expected tomorrow (15mm). Delay pesticide application and ensure proper drainage in fields.
              </p>
            </CardContent>
          </Card>

          {/* Priority Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                Priority Actions Today
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2" />
                <div>
                  <p className="font-medium">Apply Nitrogen Fertilizer</p>
                  <p className="text-sm text-muted-foreground">Wheat crops: Apply 25kg urea per acre before rain</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-warning rounded-full mt-2" />
                <div>
                  <p className="font-medium">Pest Monitoring</p>
                  <p className="text-sm text-muted-foreground">Check for aphids in wheat and mustard crops</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-sky rounded-full mt-2" />
                <div>
                  <p className="font-medium">Irrigation Planning</p>
                  <p className="text-sm text-muted-foreground">Skip irrigation today due to expected rainfall</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Crop-Specific Advice */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Sprout className="w-5 h-5 text-earth" />
                  Wheat Crops
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Badge variant="outline" className="text-xs">75 Days After Sowing</Badge>
                <ul className="text-sm space-y-1">
                  <li>• Growth stage: Grain filling</li>
                  <li>• Apply potash fertilizer (20kg/acre)</li>
                  <li>• Monitor for rust diseases</li>
                  <li>• Expect harvest in 25-30 days</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Sprout className="w-5 h-5 text-success" />
                  Mustard Crops
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Badge variant="outline" className="text-xs">45 Days After Sowing</Badge>
                <ul className="text-sm space-y-1">
                  <li>• Growth stage: Flowering</li>
                  <li>• Apply boron spray (1g/liter)</li>
                  <li>• Good bee activity observed</li>
                  <li>• Pod formation expected soon</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Market Insights */}
          <Card className="bg-success/10 border-success/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-success">
                <TrendingUp className="w-5 h-5" />
                Market Opportunity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Wheat prices are up 8% this week (₹2,150/qtl). Consider pre-booking 30% of your harvest with local traders.
              </p>
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button variant="outline" className="flex-1">
              Ask Follow-up Question
            </Button>
            <Button className="flex-1" onClick={() => onOpenChange(false)}>
              Got it, Thanks!
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdvisoryModal;