import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cookie, Settings, BarChart3, Shield, Clock, Globe } from "lucide-react";

const Cookies = () => {
  const lastUpdated = "15 de enero de 2025";
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-celebrity-pink/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-celebrity-gold text-foreground">
              <Cookie className="h-4 w-4 mr-1" />
              Información sobre cookies
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Política de Cookies
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Te explicamos qué cookies utilizamos, para qué las usamos y cómo puedes controlarlas.
            </p>
            <p className="text-sm text-muted-foreground">
              Última actualización: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Quick Summary */}
            <Card className="p-8 mb-12 bg-gradient-to-br from-primary/5 to-celebrity-pink/5 border-2 border-primary/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Settings className="h-6 w-6 mr-2 text-primary" />
                Resumen rápido
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-3">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Siempre seguras</h3>
                  <p className="text-sm text-muted-foreground">
                    Solo usamos cookies seguras y necesarias para mejorar tu experiencia
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-3">
                    <Settings className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Tú decides</h3>
                  <p className="text-sm text-muted-foreground">
                    Puedes aceptar, rechazar o configurar las cookies según tus preferencias
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-3">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Mejora continua</h3>
                  <p className="text-sm text-muted-foreground">
                    Las cookies nos ayudan a mejorar el contenido y la navegación
                  </p>
                </div>
              </div>
            </Card>

            <div className="prose prose-lg max-w-none">
              
              {/* Section 1 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">1. ¿Qué son las cookies?</h2>
                
                <Card className="p-6">
                  <p className="mb-4">
                    Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo 
                    (ordenador, tablet, móvil) cuando visitas un sitio web. Son muy útiles porque 
                    permiten que el sitio web recuerde información sobre tu visita.
                  </p>
                  
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">🍪 En términos sencillos:</h3>
                    <p className="text-sm text-muted-foreground">
                      Imagina que las cookies son como una "memoria" del sitio web que recuerda 
                      tus preferencias (como si prefieres que el sitio esté en modo oscuro) para 
                      que no tengas que configurarlo cada vez que entras.
                    </p>
                  </div>
                </Card>
              </section>

              {/* Section 2 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">2. ¿Qué cookies utilizamos?</h2>
                
                <div className="space-y-6">
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-2 rounded-full">
                        <Shield className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3 text-green-700">
                          Cookies estrictamente necesarias
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Estas cookies son esenciales para que el sitio web funcione correctamente. 
                          No puedes desactivarlas.
                        </p>
                        
                        <div className="space-y-3">
                          <div className="border-l-4 border-green-200 pl-4">
                            <h4 className="font-medium">Sesión de navegación</h4>
                            <p className="text-sm text-muted-foreground">
                              Mantiene tu sesión activa mientras navegas por el sitio
                            </p>
                            <div className="text-xs text-muted-foreground mt-1">
                              <strong>Duración:</strong> Se elimina al cerrar el navegador
                            </div>
                          </div>
                          
                          <div className="border-l-4 border-green-200 pl-4">
                            <h4 className="font-medium">Preferencias de cookies</h4>
                            <p className="text-sm text-muted-foreground">
                              Recuerda tus preferencias sobre el uso de cookies
                            </p>
                            <div className="text-xs text-muted-foreground mt-1">
                              <strong>Duración:</strong> 1 año
                            </div>
                          </div>
                          
                          <div className="border-l-4 border-green-200 pl-4">
                            <h4 className="font-medium">Seguridad</h4>
                            <p className="text-sm text-muted-foreground">
                              Protegen contra ataques y garantizan la seguridad del sitio
                            </p>
                            <div className="text-xs text-muted-foreground mt-1">
                              <strong>Duración:</strong> 24 horas
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <BarChart3 className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3 text-blue-700">
                          Cookies de análisis y rendimiento (opcionales)
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Nos ayudan a entender cómo interactúas con nuestro sitio web para 
                          poder mejorarlo. Solo se activan con tu consentimiento.
                        </p>
                        
                        <div className="space-y-3">
                          <div className="border-l-4 border-blue-200 pl-4">
                            <h4 className="font-medium">Google Analytics</h4>
                            <p className="text-sm text-muted-foreground">
                              Recopila información anónima sobre páginas visitadas, tiempo de permanencia, etc.
                            </p>
                            <div className="text-xs text-muted-foreground mt-1">
                              <strong>Duración:</strong> 26 meses | <strong>Proveedor:</strong> Google
                            </div>
                          </div>
                          
                          <div className="border-l-4 border-blue-200 pl-4">
                            <h4 className="font-medium">Análisis de contenido</h4>
                            <p className="text-sm text-muted-foreground">
                              Mide qué artículos son más populares para crear mejor contenido
                            </p>
                            <div className="text-xs text-muted-foreground mt-1">
                              <strong>Duración:</strong> 2 años | <strong>Proveedor:</strong> Interno
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <Globe className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3 text-purple-700">
                          Cookies de funcionalidad (opcionales)
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Mejoran tu experiencia recordando tus preferencias personales.
                        </p>
                        
                        <div className="space-y-3">
                          <div className="border-l-4 border-purple-200 pl-4">
                            <h4 className="font-medium">Preferencias de visualización</h4>
                            <p className="text-sm text-muted-foreground">
                              Recuerda el tamaño de texto, tema preferido, etc.
                            </p>
                            <div className="text-xs text-muted-foreground mt-1">
                              <strong>Duración:</strong> 1 año
                            </div>
                          </div>
                          
                          <div className="border-l-4 border-purple-200 pl-4">
                            <h4 className="font-medium">Newsletter preferences</h4>
                            <p className="text-sm text-muted-foreground">
                              Recuerda si ya te has suscrito para no mostrarte el popup repetidamente
                            </p>
                            <div className="text-xs text-muted-foreground mt-1">
                              <strong>Duración:</strong> 30 días
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">3. ¿Para qué usamos las cookies?</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="font-semibold mb-3 text-primary">🔧 Funcionamiento del sitio</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Mantener tu sesión activa</li>
                      <li>• Recordar tus preferencias de cookies</li>
                      <li>• Garantizar la seguridad</li>
                      <li>• Prevenir spam y ataques</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-6">
                    <h3 className="font-semibold mb-3 text-primary">📊 Análisis y mejoras</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Conocer qué contenido te interesa más</li>
                      <li>• Optimizar la velocidad del sitio</li>
                      <li>• Mejorar la navegación</li>
                      <li>• Crear contenido más relevante</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-6">
                    <h3 className="font-semibold mb-3 text-primary">🎨 Personalización</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Recordar tu tema preferido</li>
                      <li>• Adaptar el tamaño de texto</li>
                      <li>• Mostrar contenido relevante</li>
                      <li>• Evitar popup repetitivos</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-6">
                    <h3 className="font-semibold mb-3 text-primary">📈 Estadísticas</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Contar visitantes únicos</li>
                      <li>• Medir tiempo de lectura</li>
                      <li>• Analizar patrones de navegación</li>
                      <li>• Identificar contenido popular</li>
                    </ul>
                  </Card>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">4. ¿Cómo gestionar las cookies?</h2>
                
                <Card className="p-6 mb-6 bg-primary/5 border-primary/20">
                  <h3 className="font-bold mb-4 flex items-center">
                    <Settings className="h-5 w-5 mr-2 text-primary" />
                    Panel de configuración de cookies
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Puedes cambiar tus preferencias de cookies en cualquier momento usando 
                    nuestro panel de configuración.
                  </p>
                  <Button variant="newsletter">
                    Abrir configuración de cookies
                  </Button>
                </Card>
                
                <div className="space-y-6">
                  <Card className="p-6">
                    <h3 className="font-semibold mb-3">🌐 Configuración del navegador</h3>
                    <p className="text-muted-foreground mb-4">
                      También puedes gestionar las cookies directamente desde tu navegador:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2 text-sm">
                        <div><strong>Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies</div>
                        <div><strong>Firefox:</strong> Preferencias &gt; Privacidad y seguridad &gt; Cookies</div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div><strong>Safari:</strong> Preferencias &gt; Privacidad &gt; Cookies</div>
                        <div><strong>Edge:</strong> Configuración &gt; Privacidad &gt; Cookies</div>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 bg-yellow-50 border-yellow-200">
                    <h3 className="font-semibold mb-3 text-yellow-800">⚠️ Importante:</h3>
                    <p className="text-yellow-700">
                      Si bloqueas todas las cookies, algunas funcionalidades del sitio web 
                      podrían no funcionar correctamente. Las cookies necesarias seguirán 
                      siendo utilizadas para garantizar el funcionamiento básico.
                    </p>
                  </Card>
                </div>
              </section>

              {/* Section 5 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">5. Cookies de terceros</h2>
                
                <Card className="p-6">
                  <p className="mb-4">
                    Utilizamos algunos servicios de terceros que pueden colocar sus propias cookies. 
                    Estos servicios nos ayudan a ofrecer una mejor experiencia:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h3 className="font-semibold">Google Analytics</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Nos proporciona estadísticas anónimas sobre el uso del sitio web.
                      </p>
                      <div className="text-xs text-muted-foreground">
                        <strong>Política de privacidad:</strong> 
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                           className="text-primary underline hover:no-underline ml-1">
                          policies.google.com/privacy
                        </a>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-green-200 pl-4">
                      <h3 className="font-semibold">Plataforma de newsletter</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Para gestionar las suscripciones al newsletter premium.
                      </p>
                      <div className="text-xs text-muted-foreground">
                        Solo activa cuando te suscribes al newsletter
                      </div>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Section 6 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <Clock className="h-7 w-7 mr-3 text-primary" />
                  6. Duración de las cookies
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="font-semibold mb-3 text-primary">⏱️ Cookies de sesión</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Se eliminan automáticamente cuando cierras el navegador.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Sesión de navegación</li>
                      <li>• Carrito de compras (si aplica)</li>
                      <li>• Datos temporales de formularios</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-6">
                    <h3 className="font-semibold mb-3 text-primary">📅 Cookies persistentes</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Se mantienen por un tiempo determinado, incluso después de cerrar el navegador.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Preferencias de cookies: 1 año</li>
                      <li>• Configuración personal: 1 año</li>
                      <li>• Analytics: 26 meses</li>
                      <li>• Newsletter preferences: 30 días</li>
                    </ul>
                  </Card>
                </div>
              </section>

              {/* Section 7 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">7. Actualizaciones de esta política</h2>
                
                <Card className="p-6">
                  <p className="mb-4">
                    Podemos actualizar esta Política de Cookies ocasionalmente para reflejar 
                    cambios en nuestras prácticas o por razones técnicas o legales.
                  </p>
                  
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <strong>📧 Te informaremos:</strong> Si hay cambios significativos que 
                      afecten a tu privacidad, te lo comunicaremos por email y mediante 
                      un aviso en el sitio web.
                    </div>
                    
                    <div>
                      <strong>📅 Fecha de actualización:</strong> Siempre puedes consultar 
                      la fecha de la última actualización al inicio de esta página.
                    </div>
                    
                    <div>
                      <strong>🔄 Revisión regular:</strong> Te recomendamos revisar esta 
                      política periódicamente para estar al día de cualquier cambio.
                    </div>
                  </div>
                </Card>
              </section>

              {/* Contact Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">8. ¿Tienes preguntas?</h2>
                
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <h3 className="font-bold mb-4">📞 Estamos aquí para ayudarte</h3>
                  
                  <p className="text-muted-foreground mb-4">
                    Si tienes cualquier pregunta sobre nuestro uso de cookies o necesitas 
                    ayuda para configurar tus preferencias, no dudes en contactarnos.
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div><strong>Email:</strong> lucia@estrellasecretas.com</div>
                    <div><strong>Asunto:</strong> "Consulta sobre cookies"</div>
                    <div><strong>Tiempo de respuesta:</strong> 24-48 horas</div>
                  </div>
                  
                  <div className="mt-4">
                    <Button variant="outline" asChild>
                      <a href="/contacto">Contactar por formulario</a>
                    </Button>
                  </div>
                </Card>
              </section>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cookies;