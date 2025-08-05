import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle } from "lucide-react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    tipo: "consulta"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "¡Mensaje enviado!",
        description: "Te responderé en menos de 24 horas.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        tipo: "consulta"
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email profesional",
      value: "lucia@estrellasecretas.com",
      description: "Para consultas generales y colaboraciones"
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+34 658 239 441",
      description: "WhatsApp disponible de 9:00 a 18:00"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Barcelona, España",
      description: "Carrer de Pau Claris 126, 08009"
    },
    {
      icon: Clock,
      title: "Horario de respuesta",
      value: "24-48 horas",
      description: "Respondo a todos los mensajes"
    }
  ];

  const responseTime = [
    {
      type: "Consultas generales",
      time: "24 horas",
      icon: MessageCircle
    },
    {
      type: "Colaboraciones",
      time: "48 horas",
      icon: CheckCircle
    },
    {
      type: "Exclusivas/Tips",
      time: "2-4 horas",
      icon: Send
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-celebrity-pink/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-celebrity-gold text-foreground">
              <MessageCircle className="h-4 w-4 mr-1" />
              Contacto directo
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Tienes una exclusiva? ¡Cuéntamelo!
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Si tienes información exclusiva, quieres colaborar o simplemente ponerte en contacto, 
              estaré encantada de escucharte. Tu privacidad está garantizada.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Información de contacto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-primary to-celebrity-pink p-3 rounded-full">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                  <p className="text-primary font-medium mb-1">{info.value}</p>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6">Envíame un mensaje</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Nombre completo *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Tu nombre"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="tipo" className="block text-sm font-medium mb-2">
                          Tipo de consulta
                        </label>
                        <select
                          id="tipo"
                          name="tipo"
                          value={formData.tipo}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        >
                          <option value="consulta">Consulta general</option>
                          <option value="colaboracion">Colaboración</option>
                          <option value="exclusiva">Tengo una exclusiva</option>
                          <option value="correccion">Corrección/Aclaración</option>
                          <option value="prensa">Prensa/Medios</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Asunto *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Asunto del mensaje"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Mensaje *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Cuéntame qué necesitas... Si tienes una exclusiva, incluye todos los detalles posibles."
                      />
                    </div>
                    
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Confidencialidad garantizada:</strong> Toda la información que compartas 
                        conmigo será tratada con absoluta confidencialidad. Tu identidad estará protegida 
                        si así lo deseas.
                      </p>
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      variant="newsletter" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Enviando mensaje..."
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Enviar mensaje
                        </>
                      )}
                    </Button>
                  </form>
                </Card>
              </div>
              
              {/* Response Times & Tips */}
              <div className="space-y-8">
                {/* Response Times */}
                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-4">Tiempos de respuesta</h3>
                  <div className="space-y-4">
                    {responseTime.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <item.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{item.type}</p>
                          <p className="text-xs text-muted-foreground">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
                
                {/* Tips for Sources */}
                <Card className="p-6 bg-gradient-to-br from-celebrity-gold/10 to-primary/5">
                  <h3 className="font-bold text-lg mb-4">¿Tienes una exclusiva?</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <p>Incluye fecha, lugar y personas involucradas</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <p>Aporta pruebas si las tienes (fotos, videos, documentos)</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <p>Indica si quieres mantenerte anónimo/a</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <p>Verifico todas las fuentes antes de publicar</p>
                    </div>
                  </div>
                </Card>
                
                {/* Emergency Contact */}
                <Card className="p-6 border-2 border-primary/20">
                  <h3 className="font-bold text-lg mb-2 text-primary">¿Noticia urgente?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Para noticias de última hora o exclusivas muy sensibles:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>WhatsApp: +34 658 239 441</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>lucia@estrellasecretas.com</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Respuesta en 2-4 horas máximo
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;