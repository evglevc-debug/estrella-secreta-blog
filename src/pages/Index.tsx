import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import ArticleCard from "@/components/ArticleCard";
import CookieBanner from "@/components/CookieBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Star, Zap, Users } from "lucide-react";
import celebrityCoupleImg from "@/assets/celebrity-couple.jpg";
import singerPerformanceImg from "@/assets/singer-performance.jpg";
import tvPresenterImg from "@/assets/tv-presenter.jpg";
import actressPremiereImg from "@/assets/actress-premiere.jpg";

const Index = () => {
  const featuredArticles = [
    {
      id: "risto-laura-reconciliacion",
      title: "Risto Mejide y Laura Escanes: ¿Una reconciliación en secreto?",
      excerpt: "Fuentes cercanas a la pareja confirman que han sido vistos juntos en varias ocasiones durante las últimas semanas. ¿Será verdad que han decidido darse una segunda oportunidad?",
      category: "Televisión",
      date: "15 Ene 2025",
      readTime: "3 min",
      image: celebrityCoupleImg,
      featured: true
    },
    {
      id: "rosalia-nuevo-look",
      title: "Rosalía sorprende con nuevo look y colaboración internacional",
      excerpt: "La cantante catalana ha revolucionado las redes sociales con su nuevo cambio de imagen mientras prepara una colaboración que promete ser el hit del verano.",
      category: "Música",
      date: "14 Ene 2025",
      readTime: "4 min",
      image: singerPerformanceImg
    },
    {
      id: "jorge-javier-polemica",
      title: "Jorge Javier Vázquez vuelve a Telecinco con polémica incluida",
      excerpt: "El presentador regresa por todo lo alto con nuevos proyectos, pero no sin generar cierta controversia entre los directivos de la cadena.",
      category: "Televisión",
      date: "13 Ene 2025",
      readTime: "5 min",
      image: tvPresenterImg
    },
    {
      id: "penelope-cruz-san-sebastian",
      title: "Penélope Cruz habla sobre su nueva película en San Sebastián",
      excerpt: "La actriz española nos concede una exclusiva desde el Festival de Cine de San Sebastián, donde presenta su último trabajo cinematográfico.",
      category: "Cine",
      date: "12 Ene 2025",
      readTime: "6 min",
      image: actressPremiereImg,
      premium: true
    }
  ];

  const stats = [
    { icon: Users, label: "Lectores mensuales", value: "250K+" },
    { icon: Star, label: "Exclusivas publicadas", value: "1.2K+" },
    { icon: Zap, label: "Noticias al día", value: "15+" },
    { icon: TrendingUp, label: "Años de experiencia", value: "12+" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-celebrity-pink/5 to-celebrity-gold/10 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-celebrity-gold text-foreground">
                🔥 Lo más leído hoy
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-celebrity-pink bg-clip-text text-transparent">
                Las noticias más jugosas del mundo del espectáculo
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Soy Lucía Romero, periodista independiente especializada en el mundo del espectáculo español. 
                Aquí encontrarás las exclusivas más candentes, chismes verificados y análisis profundos del panorama celebrity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="newsletter" className="text-lg px-8">
                  Newsletter Premium - 9,99€/mes
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Leer artículos gratis
                </Button>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <NewsletterSignup variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <div className="flex justify-center mb-3">
                  <div className="bg-gradient-to-r from-primary to-celebrity-pink p-3 rounded-full">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Últimas Exclusivas</h2>
              <p className="text-muted-foreground">Las noticias más recientes del mundo del espectáculo español</p>
            </div>
            <Button variant="outline" asChild>
              <a href="/articulos">Ver todos los artículos</a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {featuredArticles.slice(0, 2).map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredArticles.slice(2).map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-celebrity-pink/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">¿Te quedas sin las mejores exclusivas?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Únete a más de 15.000 suscriptores que reciben noticias exclusivas, 
              chismes verificados y análisis en profundidad antes que nadie.
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
