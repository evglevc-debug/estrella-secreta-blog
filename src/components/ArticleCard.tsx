import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Eye, Star } from "lucide-react";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
  featured?: boolean;
  premium?: boolean;
}

const ArticleCard = ({ 
  id, 
  title, 
  excerpt, 
  category, 
  date, 
  readTime, 
  image, 
  featured = false,
  premium = false 
}: ArticleCardProps) => {
  return (
    <Card className={`group overflow-hidden transition-all duration-300 hover:shadow-xl ${
      featured ? "border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5" : ""
    }`}>
      <div className="relative">
        {image && (
          <div className="aspect-video overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        
        {premium && (
          <Badge className="absolute top-3 right-3 bg-celebrity-gold text-foreground">
            <Star className="h-3 w-3 mr-1" />
            Premium
          </Badge>
        )}
        
        {featured && !premium && (
          <Badge className="absolute top-3 right-3 bg-primary">
            Destacado
          </Badge>
        )}
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
          <Badge variant="secondary">{category}</Badge>
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Eye className="h-3 w-3" />
            <span>{readTime}</span>
          </div>
        </div>
        
        <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          <Link to={`/articulo/${id}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
          {excerpt}
        </p>
        
        <Link 
          to={premium ? "/suscripcion" : `/articulo/${id}`}
          className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
        >
          {premium ? "Suscríbete para leer →" : "Leer más →"}
        </Link>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;