import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Star, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Artículos", href: "/articulos" },
    { name: "Sobre el periodista", href: "/sobre" },
    { name: "Contacto", href: "/contacto" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary to-celebrity-pink p-2 rounded-lg">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-celebrity-pink bg-clip-text text-transparent">
                  Estrellas Secretas
                </h1>
                <p className="text-xs text-muted-foreground">Por Lucía Romero</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href)
                      ? "text-primary border-b-2 border-primary"
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Newsletter CTA */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="newsletter" size="sm" asChild>
                <Link to="/suscripcion">
                  <Mail className="h-4 w-4" />
                  Suscríbete
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.href) ? "text-primary" : "text-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button variant="newsletter" size="sm" className="w-full" asChild>
                  <Link to="/suscripcion">
                    <Mail className="h-4 w-4" />
                    Suscríbete al Newsletter
                  </Link>
                </Button>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Sticky Newsletter Banner */}
      <div className="bg-gradient-to-r from-primary to-celebrity-pink text-white py-2 text-center text-sm">
        <div className="container mx-auto px-4">
          <span className="font-medium">🔥 ¡Exclusivas antes que nadie! </span>
          <Link to="/suscripcion" className="underline hover:no-underline font-semibold">
            Suscríbete a nuestro newsletter premium
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;