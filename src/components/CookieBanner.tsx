import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cookie, Settings, X } from "lucide-react";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now()
    }));
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now()
    }));
    setShowBanner(false);
  };

  const savePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      ...preferences,
      timestamp: Date.now()
    }));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto p-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 border-2 border-primary/20">
        {!showSettings ? (
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-center space-x-3 flex-1">
              <Cookie className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Uso de Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  Utilizamos cookies para mejorar tu experiencia, analizar el tráfico y personalizar contenido. 
                  Al continuar navegando, aceptas nuestro uso de cookies según nuestra{" "}
                  <a href="/cookies" className="text-primary underline hover:no-underline">
                    Política de Cookies
                  </a>.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 items-center">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowSettings(true)}
              >
                <Settings className="h-4 w-4 mr-2" />
                Configurar
              </Button>
              <Button 
                variant="secondary" 
                size="sm"
                onClick={acceptNecessary}
              >
                Solo necesarias
              </Button>
              <Button 
                variant="newsletter" 
                size="sm"
                onClick={acceptAll}
              >
                Aceptar todas
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Configuración de Cookies</h3>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowSettings(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Cookies Necesarias</h4>
                  <p className="text-sm text-muted-foreground">
                    Esenciales para el funcionamiento del sitio web
                  </p>
                </div>
                <input 
                  type="checkbox" 
                  checked={preferences.necessary} 
                  disabled 
                  className="w-4 h-4"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Cookies de Análisis</h4>
                  <p className="text-sm text-muted-foreground">
                    Nos ayudan a entender cómo usas nuestro sitio
                  </p>
                </div>
                <input 
                  type="checkbox" 
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                  className="w-4 h-4"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Cookies de Marketing</h4>
                  <p className="text-sm text-muted-foreground">
                    Para mostrar anuncios relevantes y medir su efectividad
                  </p>
                </div>
                <input 
                  type="checkbox" 
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                  className="w-4 h-4"
                />
              </div>
            </div>
            
            <div className="flex gap-2 justify-end">
              <Button variant="secondary" onClick={() => setShowSettings(false)}>
                Cancelar
              </Button>
              <Button variant="newsletter" onClick={savePreferences}>
                Guardar Preferencias
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default CookieBanner;