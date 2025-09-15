import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Upload, Camera, AlertCircle, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ImageUploadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ImageUploadModal = ({ open, onOpenChange }: ImageUploadModalProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = () => {
    if (!selectedImage) {
      toast({
        title: "No Image Selected",
        description: "Please upload an image first.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysisResult(
        "Analysis Complete: Detected possible aphid infestation on wheat leaves. Recommendation: Apply neem oil spray (10ml per liter) in evening hours. Monitor for 3-5 days."
      );
      setIsAnalyzing(false);
      toast({
        title: "Analysis Complete",
        description: "Pest detection analysis finished successfully.",
      });
    }, 3000);
  };

  const resetModal = () => {
    setSelectedImage(null);
    setAnalysisResult(null);
    setIsAnalyzing(false);
  };

  return (
    <Dialog open={open} onOpenChange={(open) => {
      onOpenChange(open);
      if (!open) resetModal();
    }}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-primary" />
            Crop Image Analysis
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {!selectedImage ? (
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">
                Upload a photo of your crops for AI-powered pest and disease detection
              </p>
              <Button
                onClick={() => document.getElementById('image-upload')?.click()}
                className="w-full"
              >
                <Camera className="w-4 h-4 mr-2" />
                Choose Image
              </Button>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          ) : (
            <div className="space-y-4">
              <img
                src={selectedImage}
                alt="Uploaded crop"
                className="w-full h-48 object-cover rounded-lg"
              />
              
              {!analysisResult && !isAnalyzing && (
                <Button onClick={analyzeImage} className="w-full">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Analyze for Pests & Diseases
                </Button>
              )}
              
              {isAnalyzing && (
                <div className="text-center p-4">
                  <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Analyzing image...</p>
                </div>
              )}
              
              {analysisResult && (
                <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <p className="text-sm">{analysisResult}</p>
                  </div>
                </div>
              )}
              
              <div className="flex gap-2">
                <Button variant="outline" onClick={resetModal} className="flex-1">
                  Upload Another
                </Button>
                {analysisResult && (
                  <Button onClick={() => onOpenChange(false)} className="flex-1">
                    Done
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageUploadModal;