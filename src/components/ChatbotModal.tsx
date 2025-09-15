import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, Mic, MicOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatbotModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const predefinedResponses = {
  "weather": "Based on your location, expect 28°C today with 65% humidity. Rain is forecasted for tomorrow - perfect time for sowing if you haven't already!",
  "soil": "For better soil health, I recommend testing pH levels and adding organic compost. Based on typical soil in your region, consider adding nitrogen-rich fertilizers.",
  "pest": "Upload a photo of your crops and I can help identify pests and diseases. Common issues this season include aphids and leaf blight.",
  "fertilizer": "For wheat crops, apply DAP fertilizer now (50kg per acre). For rice, use urea after 3-4 weeks of transplanting.",
  "market": "Current wheat prices are ₹2,150/qtl - up 5% from last week. Consider selling if you have surplus stock.",
  "default": "I'm here to help with crop advisory, pest detection, weather updates, soil health, and market prices. What specific farming question do you have?"
};

const ChatbotModal = ({ open, onOpenChange }: ChatbotModalProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "नमस्ते! I'm your AI crop advisor. Ask me about weather, soil, pests, fertilizers, or market prices.",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const { toast } = useToast();

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("weather") || message.includes("मौसम")) {
      return predefinedResponses.weather;
    } else if (message.includes("soil") || message.includes("मिट्टी")) {
      return predefinedResponses.soil;
    } else if (message.includes("pest") || message.includes("कीट")) {
      return predefinedResponses.pest;
    } else if (message.includes("fertilizer") || message.includes("खाद")) {
      return predefinedResponses.fertilizer;
    } else if (message.includes("market") || message.includes("बाजार")) {
      return predefinedResponses.market;
    } else {
      return predefinedResponses.default;
    }
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    
    // Simulate AI response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputText),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputText("");
  };

  const handleVoiceToggle = () => {
    if (!isListening) {
      toast({
        title: "Voice Feature",
        description: "Voice support will be available after connecting to backend services.",
      });
    }
    setIsListening(!isListening);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl h-[600px] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-primary" />
            Crop Advisory Assistant
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col h-full">
          <ScrollArea className="flex-1 p-6">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  {!message.isUser && (
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                  {message.isUser && (
                    <div className="w-8 h-8 bg-sky/10 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-sky" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <div className="p-6 pt-0">
            <div className="flex gap-2">
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about crops, weather, or farming advice..."
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={handleVoiceToggle}
                className={isListening ? "bg-destructive/10" : ""}
              >
                {isListening ? (
                  <MicOff className="w-4 h-4" />
                ) : (
                  <Mic className="w-4 h-4" />
                )}
              </Button>
              <Button onClick={handleSendMessage}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatbotModal;