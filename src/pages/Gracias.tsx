import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Mail, Calendar, Gift, ArrowRight } from "lucide-react";

const Gracias = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Thank You Hero */}
      <section className="py-20 bg-gradient-to-br from-success/10 via-celebrity-pink/5 to-celebrity-gold/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-success to-celebrity-pink p-4 rounded-full shadow-lg">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <Badge className="mb-4 bg-celebrity-gold text-foreground">
              ¡Suscripción exitosa!
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-success to-celebrity-pink bg-clip-text text-transparent">
              ¡Bienvenido/a a la familia VIP!
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ya formas parte de los más de 15.000 suscriptores que reciben las exclusivas 
              más jugosas del mundo del espectáculo español. ¡Prepárate para no perderte nada!
            </p>
            
            <div className="bg-card/50 backdrop-blur p-6 rounded-xl border-2 border-success/20 inline-block">
              <div className="flex items-center justify-center space-x-2 text-success font-semibold">
                <Mail className="h-5 w-5" />
                <span>Hemos enviado un email de confirmación a tu bandeja de entrada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">¿Qué puedes esperar ahora?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center p-6 border-2 border-primary/20">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-primary to-celebrity-pink p-3 rounded-full">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">Exclusivas 24h antes</h3>
                <p className="text-muted-foreground text-sm">
                  Recibe las noticias más jugosas un día completo antes que cualquier otro medio
                </p>
              </Card>
              
              <Card className="text-center p-6 border-2 border-celebrity-pink/20">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-celebrity-pink to-celebrity-gold p-3 rounded-full">
                    <Gift className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">Contenido exclusivo</h3>
                <p className="text-muted-foreground text-sm">
                  Análisis en profundidad, entrevistas íntimas y contenido que solo verás aquí
                </p>
              </Card>
              
              <Card className="text-center p-6 border-2 border-celebrity-gold/20">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-celebrity-gold to-primary p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">Newsletter semanal</h3>
                <p className="text-muted-foreground text-sm">
                  Resumen semanal con lo más destacado y mis análisis personales
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Next Exclusive Preview */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-celebrity-pink/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <div className="text-center mb-8">
                <Badge className="mb-4 bg-primary">
                  🔥 Próxima exclusiva
                </Badge>
                <h2 className="text-3xl font-bold mb-4">¡Tu primera exclusiva llegará pronto!</h2>
                <p className="text-muted-foreground">
                  Como nuevo suscriptor, recibirás mañana por la mañana una exclusiva bomba 
                  sobre una pareja muy conocida del mundo del espectáculo español.
                </p>
              </div>
              
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-bold mb-3">🕵️‍♀️ Adelanto exclusivo para ti:</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  "Una de las parejas más estables del panorama televisivo español está 
                  atravesando una crisis silenciosa. Fuentes muy cercanas me han confirmado 
                  que llevan meses viviendo en casas separadas..."
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">
                    <Calendar className="h-4 w-4 inline mr-1" />
                    Mañana a las 8:00 AM en tu email
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Solo para suscriptores
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Social & Share */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">¿Qué más puedes hacer?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4">Comparte con tus amigos</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  ¿Conoces a alguien que también sea fan de los chismes del espectáculo? 
                  ¡Comparte Estrellas Secretas!
                </p>
                <Button variant="outline" className="w-full">
                  Compartir en redes sociales
                </Button>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4">Explora el blog</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Mientras esperas tu primera exclusiva, puedes leer todos los artículos 
                  gratuitos del blog.
                </p>
                <Button variant="newsletter" className="w-full" asChild>
                  <a href="/articulos">
                    Ver todos los artículos
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">¿Tienes alguna pregunta?</h2>
            <p className="text-muted-foreground mb-8">
              Si tienes cualquier duda sobre tu suscripción o quieres sugerir un tema, 
              no dudes en contactarme directamente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:lucia@estrellasecretas.com">
                  <Mail className="h-5 w-5 mr-2" />
                  lucia@estrellasecretas.com
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/contacto">
                  Formulario de contacto
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gracias;