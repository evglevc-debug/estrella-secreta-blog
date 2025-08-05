import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, Star, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface NewsletterSignupProps {
  variant?: "inline" | "hero" | "sidebar";
  className?: string;
}

const NewsletterSignup = ({ variant = "inline", className = "" }: NewsletterSignupProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "¡Suscripción exitosa!",
        description: "Te hemos enviado un email de confirmación.",
      });
      
      // Redirect to thank you page
      navigate("/gracias");
    }, 1000);
  };

  if (variant === "hero") {
    return (
      <div className={`max-w-md mx-auto ${className}`}>
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-primary to-celebrity-pink p-3 rounded-full">
              <Mail className="h-8 w-8 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2">Newsletter Premium</h3>
          <p className="text-muted-foreground">
            Exclusivas, chismes y noticias antes que nadie. Solo 9,99€/mes.
          </p>
        </div>
        
        <Card className="p-6 bg-gradient-to-br from-card to-secondary/20 border-2 border-primary/20">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-center"
            />
            <Button 
              type="submit" 
              variant="newsletter" 
              size="lg" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Procesando..." : "Suscribirme por 9,99€/mes"}
            </Button>
          </form>
          
          <div className="mt-4 space-y-2">
            {[
              "Noticias exclusivas 24h antes",
              "Acceso a contenido premium",
              "Sin publicidad",
              "Cancela cuando quieras"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    );
  }

  if (variant === "sidebar") {
    return (
      <Card className={`p-4 bg-gradient-to-br from-primary/5 to-celebrity-pink/5 ${className}`}>
        <div className="text-center mb-4">
          <Star className="h-8 w-8 text-primary mx-auto mb-2" />
          <h4 className="font-bold text-lg">¡No te pierdas nada!</h4>
          <p className="text-sm text-muted-foreground">
            Suscríbete y recibe las exclusivas antes que nadie
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button 
            type="submit" 
            variant="newsletter" 
            size="sm" 
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "..." : "Suscribirse"}
          </Button>
        </form>
      </Card>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-primary/10 to-celebrity-pink/10 p-6 rounded-lg ${className}`}>
      <div className="max-w-md mx-auto text-center">
        <h3 className="text-xl font-bold mb-2">Newsletter Premium</h3>
        <p className="text-muted-foreground mb-4">
          Recibe noticias exclusivas y chismes del mundo del espectáculo español
        </p>
        
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button 
            type="submit" 
            variant="newsletter"
            disabled={isLoading}
          >
            {isLoading ? "..." : "Suscribirme"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;