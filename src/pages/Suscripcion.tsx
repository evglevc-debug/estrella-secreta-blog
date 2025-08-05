import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Zap, Clock, Users, Crown, Gift } from "lucide-react";

const Suscripcion = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Exclusivas 24h antes",
      description: "Recibe las noticias más jugosas un día completo antes que cualquier otro medio"
    },
    {
      icon: Crown,
      title: "Contenido premium",
      description: "Acceso a artículos exclusivos, entrevistas íntimas y análisis en profundidad"
    },
    {
      icon: Users,
      title: "Comunidad VIP",
      description: "Forma parte de una comunidad exclusiva de más de 15.000 suscriptores"
    },
    {
      icon: Gift,
      title: "Sin publicidad",
      description: "Experiencia de lectura premium sin anuncios ni distracciones"
    },
    {
      icon: Clock,
      title: "Newsletter semanal",
      description: "Resumen completo con los chismes más candentes y mis análisis personales"
    },
    {
      icon: Star,
      title: "Contacto directo",
      description: "Línea directa conmigo para sugerencias y tips exclusivos"
    }
  ];

  const testimonials = [
    {
      name: "María García",
      location: "Madrid",
      text: "¡No me pierdo ni una exclusiva! Lucía siempre tiene la información antes que nadie.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez", 
      location: "Barcelona",
      text: "Vale cada euro. Los análisis son súper completos y las exclusivas son increíbles.",
      rating: 5
    },
    {
      name: "Ana López",
      location: "Valencia", 
      text: "Me encanta estar al día con todos los chismes. La información siempre es veraz.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-celebrity-pink/5 to-celebrity-gold/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-celebrity-gold text-foreground">
              🔥 ¡Oferta de lanzamiento!
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-celebrity-pink bg-clip-text text-transparent">
              Newsletter Premium
            </h1>
            <h2 className="text-2xl font-semibold mb-6">
              Las exclusivas más jugosas del espectáculo español
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Únete a más de 15.000 suscriptores que reciben noticias exclusivas, 
              chismes verificados y análisis en profundidad antes que nadie.
            </p>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">antes que otros</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15K+</div>
                <div className="text-sm text-muted-foreground">suscriptores</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5★</div>
                <div className="text-sm text-muted-foreground">valoración</div>
              </div>
            </div>
            
            <div className="max-w-md mx-auto">
              <NewsletterSignup variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">¿Qué incluye tu suscripción premium?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-primary to-celebrity-pink p-3 rounded-full">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Plan Premium</h2>
            
            <Card className="p-8 border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 max-w-md mx-auto">
              <div className="text-center">
                <Badge className="mb-4 bg-celebrity-gold text-foreground">
                  Más popular
                </Badge>
                
                <div className="mb-6">
                  <div className="text-5xl font-bold text-primary mb-2">9,99€</div>
                  <div className="text-muted-foreground">por mes</div>
                  <div className="text-sm text-muted-foreground">IVA incluido</div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {[
                    "Exclusivas 24h antes",
                    "Newsletter semanal premium",
                    "Acceso a contenido VIP",
                    "Sin publicidad",
                    "Contacto directo",
                    "Cancela cuando quieras"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button size="lg" variant="newsletter" className="w-full text-lg">
                  Suscribirme ahora
                </Button>
                
                <p className="text-xs text-muted-foreground mt-4">
                  Pago seguro • Cancela en cualquier momento • Sin permanencia
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros suscriptores</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-celebrity-gold text-celebrity-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Preguntas frecuentes</h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-bold mb-2">¿Puedo cancelar en cualquier momento?</h3>
                <p className="text-muted-foreground">
                  Sí, puedes cancelar tu suscripción en cualquier momento enviando un email. 
                  Mantendrás acceso hasta el final del período ya pagado.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-bold mb-2">¿Cómo recibo el contenido premium?</h3>
                <p className="text-muted-foreground">
                  Recibes un newsletter semanal en tu email con todas las exclusivas y contenido premium. 
                  También tendrás acceso a artículos VIP en la web.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-bold mb-2">¿La información es verificada?</h3>
                <p className="text-muted-foreground">
                  Absolutamente. Toda nuestra información pasa por un proceso de verificación 
                  con al menos dos fuentes independientes antes de ser publicada.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-bold mb-2">¿Hay algún descuento disponible?</h3>
                <p className="text-muted-foreground">
                  Actualmente ofrecemos el precio de lanzamiento de 9,99€/mes. 
                  Los suscriptores actuales mantendrán este precio mientras no cancelen.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-celebrity-pink/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para no perderte ninguna exclusiva?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Únete hoy y recibe tu primera exclusiva mañana por la mañana
            </p>
            <Button size="lg" variant="newsletter" className="text-lg px-8">
              Empezar mi suscripción premium
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Suscripcion;