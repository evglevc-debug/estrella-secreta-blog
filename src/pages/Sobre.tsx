import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Calendar, Globe, Mail, MapPin, Newspaper, Star, Users } from "lucide-react";
import luciaRomeroImg from "@/assets/lucia-romero.jpg";

const Sobre = () => {
  const achievements = [
    {
      icon: Newspaper,
      title: "12 años de experiencia",
      description: "Cubriendo el mundo del espectáculo español"
    },
    {
      icon: Star,
      title: "1.200+ exclusivas",
      description: "Noticias verificadas y contenido original"
    },
    {
      icon: Users,
      title: "250K+ lectores",
      description: "Comunidad mensual de seguidores fieles"
    },
    {
      icon: Award,
      title: "Premio Mejor Blog 2023",
      description: "Reconocimiento por el Colegio de Periodistas"
    }
  ];

  const experience = [
    {
      year: "2024-2025",
      position: "Fundadora y Directora",
      company: "Estrellas Secretas",
      description: "Blog independiente especializado en celebrities españolas"
    },
    {
      year: "2020-2024",
      position: "Corresponsal Senior",
      company: "El Mundo - Loc",
      description: "Corresponsal de espectáculos y cultura para la edición digital"
    },
    {
      year: "2017-2020",
      position: "Redactora de Entretenimiento",
      company: "Hola.com",
      description: "Cobertura de eventos y exclusivas del mundo celebrity"
    },
    {
      year: "2013-2017",
      position: "Freelance",
      company: "Varios medios",
      description: "Colaboraciones con Pronto, Semana, Diez Minutos"
    }
  ];

  const education = [
    {
      year: "2013",
      degree: "Máster en Periodismo Digital",
      school: "Universidad Pompeu Fabra",
      location: "Barcelona"
    },
    {
      year: "2011",
      degree: "Licenciatura en Periodismo",
      school: "Universidad Autónoma de Barcelona",
      location: "Barcelona"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-celebrity-pink/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2">
                <Badge className="mb-4 bg-celebrity-gold text-foreground">
                  Sobre la periodista
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Lucía Romero
                </h1>
                <h2 className="text-xl text-primary font-semibold mb-6">
                  Periodista especializada en espectáculos y cultura
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Con más de 12 años de experiencia cubriendo el mundo del espectáculo español, 
                  me he especializado en conseguir las exclusivas más difíciles y verificar 
                  cada rumor antes de publicarlo. Mi pasión es acercar a los lectores las 
                  historias más interesantes de nuestras celebrities.
                </p>
              </div>
              
              <div className="lg:col-span-1">
                <div className="relative">
                  <img 
                    src={luciaRomeroImg} 
                    alt="Lucía Romero - Periodista de espectáculos"
                    className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-celebrity-gold text-foreground p-3 rounded-full shadow-lg">
                    <Star className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Logros y reconocimientos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-primary to-celebrity-pink p-3 rounded-full">
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bio & Story */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-8">Mi historia</h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6">
                    Mi pasión por el periodismo de espectáculos comenzó durante mis estudios en la UAB, 
                    cuando conseguí mi primera exclusiva entrevistando a un actor emergente en el 
                    Festival de Sitges. Desde entonces, no he parado de perseguir las historias 
                    más interesantes del panorama cultural español.
                  </p>
                  
                  <p className="mb-6">
                    Durante mis años en <strong>Hola.com</strong> y <strong>El Mundo</strong>, 
                    desarrollé una red de contactos única en la industria del entretenimiento. 
                    Mi especialidad siempre ha sido conseguir información de primera mano y 
                    verificar cada dato antes de la publicación.
                  </p>
                  
                  <p className="mb-6">
                    En 2024 decidí dar el salto y crear <strong>Estrellas Secretas</strong>, 
                    un proyecto independiente donde puedo ofrecer el contenido más exclusivo 
                    sin las limitaciones de los grandes medios. Aquí puedo ser más directa, 
                    más cercana y, sobre todo, más rápida.
                  </p>
                  
                  <p>
                    Mi compromiso es siempre con la verdad y con mis lectores. Cada exclusiva 
                    que publico está verificada por al menos dos fuentes independientes, 
                    porque mi reputación y la confianza de mi audiencia son lo más importante.
                  </p>
                </div>
              </div>
              
              <div>
                <NewsletterSignup variant="sidebar" className="mb-8" />
                
                <Card className="p-6">
                  <h3 className="font-bold mb-4 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    Contacto directo
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>lucia@estrellasecretas.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>Barcelona, España</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <a href="/contacto">Enviar mensaje</a>
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Experiencia profesional</h2>
            
            <div className="space-y-8">
              {experience.map((job, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-32 flex-shrink-0">
                      <Badge variant="outline" className="text-primary border-primary">
                        {job.year}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{job.position}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                      <p className="text-muted-foreground mt-2">{job.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Formación académica</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-to-r from-primary to-celebrity-pink p-2 rounded-full">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <Badge variant="outline">{edu.year}</Badge>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.school}</p>
                  <p className="text-muted-foreground text-sm">{edu.location}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-celebrity-pink/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">¿Quieres estar al día?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Suscríbete a mi newsletter premium y recibe las exclusivas más jugosas 
              directamente en tu bandeja de entrada.
            </p>
            <Button size="lg" variant="newsletter" asChild>
              <a href="/suscripcion">Suscribirme ahora</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;