import { Link } from "react-router-dom";
import { Star, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-primary to-celebrity-pink p-2 rounded-lg">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-celebrity-pink bg-clip-text text-transparent">
                  Estrellas Secretas
                </h3>
                <p className="text-sm text-muted-foreground">Por Lucía Romero</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              Tu fuente de confianza para las últimas noticias y exclusivas del mundo del espectáculo español. 
              Periodismo independiente y riguroso desde Barcelona.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/articulos" className="text-muted-foreground hover:text-primary transition-colors">
                  Artículos
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre el periodista
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/suscripcion" className="text-muted-foreground hover:text-primary transition-colors">
                  Newsletter Premium
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacidad" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link to="/terminos" className="text-muted-foreground hover:text-primary transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>lucia@estrellasecretas.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+34 658 239 441</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Barcelona, España</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-6 mt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Estrellas Secretas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;