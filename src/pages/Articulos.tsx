import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, TrendingUp } from "lucide-react";
import celebrityCoupleImg from "@/assets/celebrity-couple.jpg";
import singerPerformanceImg from "@/assets/singer-performance.jpg";
import tvPresenterImg from "@/assets/tv-presenter.jpg";
import actressPremiereImg from "@/assets/actress-premiere.jpg";

const Articulos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", "Televisión", "Música", "Cine", "Deportes", "Corazón"];

  const allArticles = [
    {
      id: "risto-laura-reconciliacion",
      title: "Risto Mejide y Laura Escanes: ¿Una reconciliación en secreto?",
      excerpt: "Fuentes cercanas a la pareja confirman que han sido vistos juntos en varias ocasiones durante las últimas semanas. ¿Será verdad que han decidido darse una segunda oportunidad? Analizamos todas las pistas que apuntan a una posible reconciliación entre el presentador y la influencer.",
      category: "Televisión",
      date: "15 Ene 2025",
      readTime: "3 min",
      image: celebrityCoupleImg,
      featured: true
    },
    {
      id: "rosalia-nuevo-look",
      title: "Rosalía sorprende con nuevo look y colaboración internacional",
      excerpt: "La cantante catalana ha revolucionado las redes sociales con su nuevo cambio de imagen mientras prepara una colaboración que promete ser el hit del verano. En exclusiva, te contamos todos los detalles de su próximo proyecto musical.",
      category: "Música",
      date: "14 Ene 2025",
      readTime: "4 min",
      image: singerPerformanceImg
    },
    {
      id: "jorge-javier-polemica",
      title: "Jorge Javier Vázquez vuelve a Telecinco con polémica incluida",
      excerpt: "El presentador regresa por todo lo alto con nuevos proyectos, pero no sin generar cierta controversia entre los directivos de la cadena. Te contamos qué ha pasado realmente tras las cámaras.",
      category: "Televisión",
      date: "13 Ene 2025",
      readTime: "5 min",
      image: tvPresenterImg
    },
    {
      id: "penelope-cruz-san-sebastian",
      title: "Penélope Cruz habla sobre su nueva película en San Sebastián",
      excerpt: "La actriz española nos concede una exclusiva desde el Festival de Cine de San Sebastián, donde presenta su último trabajo cinematográfico. Sus declaraciones más íntimas sobre su carrera y proyectos futuros.",
      category: "Cine",
      date: "12 Ene 2025",
      readTime: "6 min",
      image: actressPremiereImg,
      premium: true
    },
    {
      id: "ibai-reality-show",
      title: "Ibai Llanos lanza su propio reality: todo lo que sabemos",
      excerpt: "El streamer más famoso de España prepara un reality show que promete revolucionar Twitch. En exclusiva, te adelantamos todos los detalles del casting y los participantes confirmados.",
      category: "Televisión",
      date: "11 Ene 2025",
      readTime: "4 min",
      image: tvPresenterImg,
      premium: true
    },
    {
      id: "aitana-nuevo-disco",
      title: "Aitana anuncia su nuevo disco con una sorpresa especial",
      excerpt: "La cantante catalana prepara su tercer álbum de estudio con colaboraciones internacionales que nadie se espera. Te contamos en primicia los nombres que sonarán en este nuevo trabajo.",
      category: "Música",
      date: "10 Ene 2025",
      readTime: "3 min",
      image: singerPerformanceImg
    },
    {
      id: "ana-rosa-regreso",
      title: "Ana Rosa Quintana prepara su regreso más esperado",
      excerpt: "La presentadora madrileña trabaja en secreto en un nuevo formato que podría cambiar las mañanas de televisión. Fuentes cercanas nos adelantan los detalles del proyecto.",
      category: "Televisión",
      date: "9 Ene 2025",
      readTime: "5 min",
      image: tvPresenterImg
    },
    {
      id: "rafael-nadal-retirada",
      title: "Rafa Nadal: las lágrimas de una leyenda en su despedida",
      excerpt: "El tenista balear se emociona al hablar de su retirada y sus planes de futuro. Una entrevista íntima donde repasa los momentos más importantes de su carrera.",
      category: "Deportes",
      date: "8 Ene 2025",
      readTime: "7 min",
      image: actressPremiereImg,
      premium: true
    }
  ];

  const filteredArticles = allArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-celebrity-pink/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-celebrity-gold text-foreground">
              <TrendingUp className="h-4 w-4 mr-1" />
              Artículos destacados
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Todas las exclusivas del espectáculo español
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Las noticias más jugosas, chismes verificados y análisis en profundidad 
              del mundo celebrity español.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar artículos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" className="md:w-auto">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtrar
                </Button>
              </div>
              
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="text-sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">
              {filteredArticles.length} artículos encontrados
              {selectedCategory !== "Todos" && ` en ${selectedCategory}`}
              {searchTerm && ` para "${searchTerm}"`}
            </p>
            <div className="text-sm text-muted-foreground">
              Ordenado por fecha de publicación
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Artículos destacados</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Articles Grid */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold mb-8">Últimos artículos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {regularArticles.map((article) => (
                  <ArticleCard key={article.id} {...article} />
                ))}
              </div>
              
              {regularArticles.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">
                    No se encontraron artículos que coincidan con tu búsqueda.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("Todos");
                    }}
                  >
                    Limpiar filtros
                  </Button>
                </div>
              )}
              
              {/* Load More Button */}
              {regularArticles.length > 0 && (
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg">
                    Cargar más artículos
                  </Button>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                <NewsletterSignup variant="sidebar" />
                
                {/* Popular Categories */}
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-bold text-lg mb-4">Categorías populares</h3>
                  <div className="space-y-2">
                    {categories.slice(1).map((category) => {
                      const count = allArticles.filter(article => article.category === category).length;
                      return (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className="flex items-center justify-between w-full text-left p-2 rounded hover:bg-muted transition-colors"
                        >
                          <span className="text-sm">{category}</span>
                          <Badge variant="secondary" className="text-xs">
                            {count}
                          </Badge>
                        </button>
                      );
                    })}
                  </div>
                </div>
                
                {/* Recent Posts */}
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-bold text-lg mb-4">Más leídos</h3>
                  <div className="space-y-4">
                    {allArticles.slice(0, 3).map((article, index) => (
                      <div key={article.id} className="flex space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium line-clamp-2 mb-1">
                            <a href={`/articulo/${article.id}`} className="hover:text-primary">
                              {article.title}
                            </a>
                          </h4>
                          <p className="text-xs text-muted-foreground">{article.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">¿No quieres perderte ninguna exclusiva?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Suscríbete a nuestro newsletter premium y recibe las noticias más jugosas 
              antes que nadie. Acceso 24h antes que el resto.
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Articulos;