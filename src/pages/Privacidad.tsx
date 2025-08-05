import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Lock, Users, Mail, Calendar } from "lucide-react";

const Privacidad = () => {
  const lastUpdated = "15 de enero de 2025";
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-celebrity-pink/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-celebrity-gold text-foreground">
              <Shield className="h-4 w-4 mr-1" />
              GDPR Compliant
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Política de Privacidad
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Tu privacidad es fundamental para nosotros. Te explicamos cómo protegemos 
              y utilizamos tu información personal.
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
                <Eye className="h-6 w-6 mr-2 text-primary" />
                Resumen ejecutivo
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">✓ Lo que SÍ hacemos:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Proteger tus datos con máxima seguridad</li>
                    <li>• Enviarte solo el contenido que solicitas</li>
                    <li>• Permitir cancelar suscripción fácilmente</li>
                    <li>• Cumplir estrictamente el GDPR</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">✗ Lo que NO hacemos:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Vender tu información a terceros</li>
                    <li>• Enviar spam o contenido no solicitado</li>
                    <li>• Compartir datos sin tu consentimiento</li>
                    <li>• Rastrear sin tu conocimiento</li>
                  </ul>
                </div>
              </div>
            </Card>

            <div className="prose prose-lg max-w-none">
              
              {/* Section 1 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <Users className="h-7 w-7 mr-3 text-primary" />
                  1. Responsable del tratamiento
                </h2>
                <Card className="p-6">
                  <div className="space-y-4">
                    <p><strong>Responsable:</strong> Lucía Romero (Estrellas Secretas)</p>
                    <p><strong>Dirección:</strong> Carrer de Pau Claris 126, 08009 Barcelona, España</p>
                    <p><strong>Email:</strong> lucia@estrellasecretas.com</p>
                    <p><strong>Teléfono:</strong> +34 658 239 441</p>
                    <p><strong>Actividad:</strong> Blog de noticias de espectáculos y entretenimiento</p>
                  </div>
                </Card>
              </section>

              {/* Section 2 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">2. Datos que recopilamos</h2>
                
                <div className="space-y-6">
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4">📧 Datos de suscripción al newsletter</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>Dirección de email:</strong> Para enviarte el newsletter premium</li>
                      <li>• <strong>Nombre (opcional):</strong> Para personalizar las comunicaciones</li>
                      <li>• <strong>Fecha de suscripción:</strong> Para gestionar tu cuenta</li>
                      <li>• <strong>Preferencias de contenido:</strong> Para enviarte información relevante</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4">🌐 Datos de navegación (automáticos)</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>Dirección IP:</strong> Para estadísticas geográficas anónimas</li>
                      <li>• <strong>Tipo de navegador:</strong> Para optimizar la experiencia</li>
                      <li>• <strong>Páginas visitadas:</strong> Para analizar el contenido más popular</li>
                      <li>• <strong>Tiempo de permanencia:</strong> Para mejorar el contenido</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4">💬 Datos de contacto</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>Formulario de contacto:</strong> Nombre, email, asunto y mensaje</li>
                      <li>• <strong>Comunicaciones directas:</strong> Emails o mensajes que nos envíes</li>
                    </ul>
                  </Card>
                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">3. Cómo utilizamos tus datos</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-primary">📨 Newsletter premium</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Envío de exclusivas y noticias</li>
                      <li>• Personalización de contenido</li>
                      <li>• Gestión de suscripciones</li>
                      <li>• Comunicaciones de servicio</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-primary">📊 Análisis y mejoras</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Estadísticas de audiencia</li>
                      <li>• Optimización del sitio web</li>
                      <li>• Mejora de la experiencia de usuario</li>
                      <li>• Análisis de contenido popular</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-primary">🔧 Servicios técnicos</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Funcionamiento del sitio web</li>
                      <li>• Prevención de fraude</li>
                      <li>• Soporte técnico</li>
                      <li>• Seguridad de la plataforma</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-primary">⚖️ Obligaciones legales</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Cumplimiento fiscal</li>
                      <li>• Respuesta a autoridades</li>
                      <li>• Protección de derechos</li>
                      <li>• Resolución de disputas</li>
                    </ul>
                  </Card>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">4. Base legal del tratamiento</h2>
                
                <Card className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-primary">✅ Consentimiento explícito</h3>
                      <p className="text-sm text-muted-foreground">
                        Al suscribirte al newsletter, nos das tu consentimiento explícito para enviarte 
                        contenido premium y comunicaciones relacionadas.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary">📋 Ejecución contractual</h3>
                      <p className="text-sm text-muted-foreground">
                        Necesitamos tu email para prestarte el servicio de newsletter premium que has contratado.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary">🎯 Interés legítimo</h3>
                      <p className="text-sm text-muted-foreground">
                        Para análisis de audiencia y mejora del servicio, siempre respetando tus derechos 
                        y libertades fundamentales.
                      </p>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Section 5 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">5. Compartir información con terceros</h2>
                
                <Card className="p-6 bg-red-50 border-red-200">
                  <h3 className="font-bold text-lg mb-4 text-red-800">🚫 NO vendemos ni alquilamos tus datos</h3>
                  <p className="text-red-700 mb-4">
                    Nunca vendemos, alquilamos o comercializamos tu información personal a terceros 
                    con fines comerciales.
                  </p>
                </Card>
                
                <div className="mt-6 space-y-4">
                  <Card className="p-6">
                    <h3 className="font-semibold mb-2">🔧 Proveedores de servicios técnicos</h3>
                    <p className="text-sm text-muted-foreground">
                      Compartimos datos mínimos con proveedores que nos ayudan a prestar el servicio 
                      (plataformas de email, hosting, analytics). Todos firman acuerdos de confidencialidad.
                    </p>
                  </Card>
                  
                  <Card className="p-6">
                    <h3 className="font-semibold mb-2">⚖️ Obligaciones legales</h3>
                    <p className="text-sm text-muted-foreground">
                      Solo cuando sea requerido por ley o autoridades competentes, y limitado al 
                      mínimo necesario.
                    </p>
                  </Card>
                </div>
              </section>

              {/* Section 6 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <Lock className="h-7 w-7 mr-3 text-primary" />
                  6. Seguridad de tus datos
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="font-semibold mb-3">🔒 Medidas técnicas</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Cifrado SSL en toda la web</li>
                      <li>• Servidores seguros en Europa</li>
                      <li>• Copias de seguridad regulares</li>
                      <li>• Actualizaciones de seguridad</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-6">
                    <h3 className="font-semibold mb-3">👥 Medidas organizativas</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Acceso restringido a datos</li>
                      <li>• Formación en protección de datos</li>
                      <li>• Políticas de confidencialidad</li>
                      <li>• Auditorías de seguridad</li>
                    </ul>
                  </Card>
                </div>
              </section>

              {/* Section 7 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">7. Tus derechos</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="font-semibold mb-3 text-primary">📋 Derecho de acceso</h3>
                    <p className="text-sm text-muted-foreground">
                      Puedes solicitar una copia de todos los datos personales que tenemos sobre ti.
                    </p>
                  </Card>
                  
                  <Card className="p-6">
                    <h3 className="font-semibold mb-3 text-primary">✏️ Derecho de rectificación</h3>
                    <p className="text-sm text-muted-foreground">
                      Puedes corregir o actualizar cualquier información inexacta o incompleta.
                    </p>
                  </Card>
                  
                  <Card className="p-6">
                    <h3 className="font-semibold mb-3 text-primary">🗑️ Derecho de supresión</h3>
                    <p className="text-sm text-muted-foreground">
                      Puedes solicitar que eliminemos tus datos personales ("derecho al olvido").
                    </p>
                  </Card>
                  
                  <Card className="p-6">
                    <h3 className="font-semibold mb-3 text-primary">⏸️ Derecho de limitación</h3>
                    <p className="text-sm text-muted-foreground">
                      Puedes solicitar que limitemos el procesamiento de tus datos en ciertas circunstancias.
                    </p>
                  </Card>
                  
                  <Card className="p-6">
                    <h3 className="font-semibold mb-3 text-primary">📦 Derecho de portabilidad</h3>
                    <p className="text-sm text-muted-foreground">
                      Puedes obtener tus datos en un formato estructurado para transferirlos a otro servicio.
                    </p>
                  </Card>
                  
                  <Card className="p-6">
                    <h3 className="font-semibold mb-3 text-primary">🚫 Derecho de oposición</h3>
                    <p className="text-sm text-muted-foreground">
                      Puedes oponerte al procesamiento de tus datos para marketing directo o interés legítimo.
                    </p>
                  </Card>
                </div>
                
                <Card className="p-6 mt-6 bg-primary/5 border-primary/20">
                  <h3 className="font-bold mb-3">📞 ¿Cómo ejercer tus derechos?</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Para ejercer cualquiera de estos derechos, contáctanos por:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span><strong>Email:</strong> lucia@estrellasecretas.com</span>
                    </div>
                    <div>
                      <span><strong>Asunto:</strong> "Ejercicio de derechos GDPR - [tu solicitud]"</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Responderemos en un plazo máximo de 1 mes desde la recepción de tu solicitud.
                  </p>
                </Card>
              </section>

              {/* Section 8 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">8. Retención de datos</h2>
                
                <Card className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">📧 Datos de suscriptores activos</h3>
                      <p className="text-sm text-muted-foreground">
                        Mantenemos tus datos mientras mantengas tu suscripción activa y durante 
                        1 año adicional para posibles reclamaciones.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold">📊 Datos analíticos</h3>
                      <p className="text-sm text-muted-foreground">
                        Los datos analíticos anonimizados se conservan durante 26 meses para 
                        tendencias y estadísticas.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold">💬 Comunicaciones de contacto</h3>
                      <p className="text-sm text-muted-foreground">
                        Las consultas y comunicaciones se conservan durante 3 años para 
                        referencia y seguimiento.
                      </p>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Section 9 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">9. Cookies y tecnologías similares</h2>
                
                <Card className="p-6">
                  <p className="mb-4">
                    Utilizamos cookies para mejorar tu experiencia. Para información detallada, 
                    consulta nuestra <a href="/cookies" className="text-primary underline hover:no-underline">
                    Política de Cookies</a>.
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold">🍪 Cookies esenciales</h3>
                      <p className="text-sm text-muted-foreground">
                        Necesarias para el funcionamiento básico del sitio web.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold">📊 Cookies analíticas</h3>
                      <p className="text-sm text-muted-foreground">
                        Para entender cómo interactúas con nuestro contenido (opcional).
                      </p>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Section 10 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">10. Transferencias internacionales</h2>
                
                <Card className="p-6">
                  <p className="mb-4">
                    <strong>🇪🇺 Datos en la UE:</strong> Todos tus datos se almacenan en servidores 
                    ubicados en la Unión Europea, garantizando el máximo nivel de protección del GDPR.
                  </p>
                  
                  <p className="text-sm text-muted-foreground">
                    En el caso excepcional de que necesitemos transferir datos fuera de la UE, 
                    lo haremos únicamente a países con decisión de adecuación o mediante 
                    las salvaguardas apropiadas (cláusulas contractuales tipo).
                  </p>
                </Card>
              </section>

              {/* Section 11 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">11. Menores de edad</h2>
                
                <Card className="p-6 bg-yellow-50 border-yellow-200">
                  <h3 className="font-bold mb-3 text-yellow-800">⚠️ Restricción de edad</h3>
                  <p className="text-yellow-700">
                    Nuestro servicio está dirigido a personas mayores de 16 años. No recopilamos 
                    conscientemente datos de menores de 16 años. Si detectamos que hemos recopilado 
                    datos de un menor, los eliminaremos inmediatamente.
                  </p>
                </Card>
              </section>

              {/* Section 12 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <Calendar className="h-7 w-7 mr-3 text-primary" />
                  12. Cambios en esta política
                </h2>
                
                <Card className="p-6">
                  <p className="mb-4">
                    Podemos actualizar esta Política de Privacidad ocasionalmente para reflejar 
                    cambios en nuestras prácticas o por razones legales.
                  </p>
                  
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <strong>📧 Notificación por email:</strong> Te informaremos por email de cambios 
                      significativos al menos 30 días antes de que entren en vigor.
                    </div>
                    
                    <div>
                      <strong>🌐 Publicación en web:</strong> La versión actual siempre estará disponible 
                      en esta página con la fecha de última actualización.
                    </div>
                    
                    <div>
                      <strong>📝 Historial de cambios:</strong> Mantenemos un registro de los cambios 
                      principales para tu consulta.
                    </div>
                  </div>
                </Card>
              </section>

              {/* Contact Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">13. Contacto y consultas</h2>
                
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <h3 className="font-bold mb-4">¿Tienes preguntas sobre tu privacidad?</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <strong>Email:</strong> lucia@estrellasecretas.com
                        <br />
                        <span className="text-sm text-muted-foreground">
                          Asunto: "Consulta sobre privacidad"
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <strong>Responsable de protección de datos:</strong> Lucía Romero
                    </div>
                    
                    <div>
                      <strong>Autoridad de control:</strong> Agencia Española de Protección de Datos (AEPD)
                      <br />
                      <span className="text-sm text-muted-foreground">
                        C/ Jorge Juan, 6, 28001 Madrid | www.aepd.es
                      </span>
                    </div>
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

export default Privacidad;