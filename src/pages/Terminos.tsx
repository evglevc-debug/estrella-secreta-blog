import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Scale, Euro, UserCheck, Shield, Clock } from "lucide-react";

const Terminos = () => {
  const lastUpdated = "15 de enero de 2025";
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-celebrity-pink/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-celebrity-gold text-foreground">
              <Scale className="h-4 w-4 mr-1" />
              Términos legales
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Términos y Condiciones de Uso
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Estos términos regulan el uso de nuestro sitio web y servicios. 
              Por favor, léelos atentamente antes de utilizar Estrellas Secretas.
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
                <FileText className="h-6 w-6 mr-2 text-primary" />
                Resumen de términos importantes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-semibold mb-2 text-primary">🎯 Uso permitido:</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Leer y compartir nuestro contenido</li>
                    <li>• Suscribirte al newsletter premium</li>
                    <li>• Contactar para consultas legítimas</li>
                    <li>• Usar para fines informativos personales</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">🚫 Uso prohibido:</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Copiar contenido sin autorización</li>
                    <li>• Uso comercial sin permiso</li>
                    <li>• Enviar información falsa</li>
                    <li>• Intentar hackear o dañar el sitio</li>
                  </ul>
                </div>
              </div>
            </Card>

            <div className="prose prose-lg max-w-none">
              
              {/* Section 1 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">1. Información general</h2>
                
                <Card className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">📰 Sitio web:</h3>
                      <p className="text-sm text-muted-foreground">
                        estrellasecretas.com - Blog de noticias de espectáculos y entretenimiento
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold">👩‍💼 Titular:</h3>
                      <p className="text-sm text-muted-foreground">
                        Lucía Romero, periodista independiente<br/>
                        NIF: [número de identificación]<br/>
                        Domicilio: Carrer de Pau Claris 126, 08009 Barcelona, España
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold">📧 Contacto:</h3>
                      <p className="text-sm text-muted-foreground">
                        Email: lucia@estrellasecretas.com<br/>
                        Teléfono: +34 658 239 441
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold">⚖️ Legislación aplicable:</h3>
                      <p className="text-sm text-muted-foreground">
                        Estos términos se rigen por la legislación española y europea aplicable.
                      </p>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Section 2 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">2. Objeto y ámbito de aplicación</h2>
                
                <Card className="p-6">
                  <p className="mb-4">
                    Estos Términos y Condiciones regulan el acceso y uso del sitio web 
                    <strong> estrellasecretas.com</strong> y todos los servicios ofrecidos a través del mismo.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">🎯 Servicios que ofrecemos:</h3>
                      <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                        <li>• Blog gratuito con artículos de espectáculos</li>
                        <li>• Newsletter premium de pago con contenido exclusivo</li>
                        <li>• Formulario de contacto para consultas</li>
                        <li>• Información sobre el periodista y su trabajo</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold">📋 Aceptación de términos:</h3>
                      <p className="text-sm text-muted-foreground">
                        El acceso y uso de este sitio web implica la aceptación plena de estos términos. 
                        Si no estás de acuerdo con alguna de estas condiciones, no utilices nuestros servicios.
                      </p>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Section 3 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <UserCheck className="h-7 w-7 mr-3 text-primary" />
                  3. Condiciones de acceso y uso
                </h2>
                
                <div className="space-y-6">
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4">✅ Uso permitido</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>Lectura personal:</strong> Leer y disfrutar del contenido para uso personal</li>
                      <li>• <strong>Compartir responsablemente:</strong> Compartir enlaces a nuestros artículos en redes sociales</li>
                      <li>• <strong>Suscripción legítima:</strong> Suscribirte al newsletter con datos reales</li>
                      <li>• <strong>Contacto adecuado:</strong> Usar el formulario de contacto para consultas legítimas</li>
                      <li>• <strong>Navegación normal:</strong> Navegar por el sitio de forma habitual</li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-red-50 border-red-200">
                    <h3 className="text-xl font-semibold mb-4 text-red-800">🚫 Uso prohibido</h3>
                    <ul className="space-y-2 text-red-700">
                      <li>• <strong>Copia no autorizada:</strong> Reproducir, distribuir o publicar nuestro contenido sin autorización</li>
                      <li>• <strong>Uso comercial:</strong> Utilizar nuestro contenido para fines comerciales sin permiso expreso</li>
                      <li>• <strong>Información falsa:</strong> Proporcionar datos falsos en formularios o suscripciones</li>
                      <li>• <strong>Actividades maliciosas:</strong> Intentar hackear, interferir o dañar el funcionamiento del sitio</li>
                      <li>• <strong>Spam:</strong> Enviar mensajes masivos o no solicitados</li>
                      <li>• <strong>Contenido inapropiado:</strong> Enviar contenido ofensivo, ilegal o difamatorio</li>
                    </ul>
                  </Card>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">4. Propiedad intelectual</h2>
                
                <Card className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-primary">📝 Contenido original</h3>
                      <p className="text-sm text-muted-foreground">
                        Todos los artículos, textos, imágenes, diseños y demás contenido de este sitio web 
                        son propiedad exclusiva de Lucía Romero o se utilizan con la debida autorización.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary">©️ Derechos de autor</h3>
                      <p className="text-sm text-muted-foreground">
                        Todo el contenido está protegido por derechos de autor y otras leyes de propiedad intelectual. 
                        No puedes copiar, modificar, distribuir o usar comercialmente ningún contenido sin autorización escrita.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary">🔗 Enlaces y citas</h3>
                      <p className="text-sm text-muted-foreground">
                        Puedes enlazar a nuestros artículos y hacer citas breves (máximo 150 palabras) 
                        siempre que incluyas un enlace claro al artículo original y menciones la autoría.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary">🏢 Uso periodístico</h3>
                      <p className="text-sm text-muted-foreground">
                        Los medios de comunicación pueden usar extractos de nuestro contenido para 
                        información periodística, siempre citando la fuente y enlazando al artículo original.
                      </p>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Section 5 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <Euro className="h-7 w-7 mr-3 text-primary" />
                  5. Newsletter Premium - Condiciones de pago
                </h2>
                
                <div className="space-y-6">
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4">💳 Suscripción premium</h3>
                    <div className="space-y-3">
                      <div>
                        <strong>Precio:</strong> 9,99€ al mes (IVA incluido)
                      </div>
                      <div>
                        <strong>Facturación:</strong> Mensual, con renovación automática
                      </div>
                      <div>
                        <strong>Métodos de pago:</strong> Tarjeta de crédito/débito, PayPal
                      </div>
                      <div>
                        <strong>Moneda:</strong> Euro (EUR)
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4">📦 ¿Qué incluye la suscripción?</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>Exclusivas 24h antes:</strong> Acceso a noticias exclusivas un día antes que el público general</li>
                      <li>• <strong>Newsletter semanal:</strong> Resumen con análisis en profundidad</li>
                      <li>• <strong>Contenido premium:</strong> Artículos exclusivos solo para suscriptores</li>
                      <li>• <strong>Sin publicidad:</strong> Experiencia de lectura sin anuncios</li>
                      <li>• <strong>Acceso directo:</strong> Contacto directo con la periodista para sugerencias</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4">🔄 Renovación y cancelación</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <strong>Renovación automática:</strong> Tu suscripción se renueva automáticamente 
                        cada mes hasta que la canceles.
                      </div>
                      <div>
                        <strong>Cancelación:</strong> Puedes cancelar en cualquier momento enviando un 
                        email a lucia@estrellasecretas.com con asunto "Cancelar suscripción".
                      </div>
                      <div>
                        <strong>Acceso tras cancelación:</strong> Mantienes acceso hasta el final del 
                        período ya pagado.
                      </div>
                      <div>
                        <strong>Reembolsos:</strong> No se realizan reembolsos por períodos parciales, 
                        excepto en casos excepcionales a nuestra discreción.
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Section 6 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">6. Política de reembolsos</h2>
                
                <Card className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-primary">💰 Política general</h3>
                      <p className="text-sm text-muted-foreground">
                        Dada la naturaleza digital instantánea de nuestro servicio (newsletter), 
                        no ofrecemos reembolsos por períodos ya iniciados.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary">✅ Excepciones para reembolso</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Error técnico que impida recibir el servicio</li>
                        <li>• Doble cobro por error del sistema de pago</li>
                        <li>• Cancelación en las primeras 48 horas de la primera suscripción</li>
                        <li>• Casos excepcionales evaluados individualmente</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary">⏱️ Proceso de reembolso</h3>
                      <p className="text-sm text-muted-foreground">
                        Si tu caso cumple las condiciones para reembolso, contacta con nosotros. 
                        Los reembolsos se procesan en 5-7 días laborables al método de pago original.
                      </p>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Section 7 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">7. Responsabilidades y limitaciones</h2>
                
                <div className="space-y-6">
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4">📰 Nuestras responsabilidades</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>Veracidad:</strong> Verificar la información antes de publicarla</li>
                      <li>• <strong>Privacidad:</strong> Proteger tus datos según nuestra Política de Privacidad</li>
                      <li>• <strong>Servicio:</strong> Proporcionar el contenido prometido a los suscriptores</li>
                      <li>• <strong>Disponibilidad:</strong> Mantener el sitio web operativo en la medida de lo posible</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4">👤 Tus responsabilidades</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>Uso adecuado:</strong> Utilizar el sitio web conforme a estos términos</li>
                      <li>• <strong>Información real:</strong> Proporcionar datos veraces en formularios</li>
                      <li>• <strong>Pago puntual:</strong> Mantener al día los pagos de suscripción</li>
                      <li>• <strong>Respeto:</strong> No enviar contenido ofensivo o inapropiado</li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-yellow-50 border-yellow-200">
                    <h3 className="text-xl font-semibold mb-4 text-yellow-800">⚠️ Limitaciones de responsabilidad</h3>
                    <div className="space-y-2 text-yellow-700 text-sm">
                      <div>
                        <strong>Contenido de terceros:</strong> No nos responsabilizamos por la exactitud 
                        de información obtenida de fuentes externas.
                      </div>
                      <div>
                        <strong>Disponibilidad técnica:</strong> No garantizamos que el sitio web esté 
                        disponible 24/7 sin interrupciones.
                      </div>
                      <div>
                        <strong>Enlaces externos:</strong> No nos responsabilizamos por el contenido 
                        de sitios web enlazados desde el nuestro.
                      </div>
                      <div>
                        <strong>Uso de la información:</strong> El uso que hagas de la información 
                        publicada es bajo tu propia responsabilidad.
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Section 8 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">8. Privacidad y protección de datos</h2>
                
                <Card className="p-6">
                  <p className="mb-4">
                    El tratamiento de tus datos personales se rige por nuestra 
                    <a href="/privacidad" className="text-primary underline hover:no-underline ml-1">
                      Política de Privacidad
                    </a>, que forma parte integral de estos términos.
                  </p>
                  
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <strong>🔒 Compromiso:</strong> Proteger tu privacidad y cumplir estrictamente 
                      con el GDPR y la legislación española de protección de datos.
                    </div>
                    <div>
                      <strong>📧 Datos mínimos:</strong> Solo recopilamos los datos estrictamente 
                      necesarios para prestarte el servicio.
                    </div>
                    <div>
                      <strong>🎯 Finalidad específica:</strong> Utilizamos tus datos únicamente 
                      para los fines informados y consentidos.
                    </div>
                  </div>
                </Card>
              </section>

              {/* Section 9 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">9. Modificaciones de los términos</h2>
                
                <Card className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">📝 Derecho a modificar</h3>
                      <p className="text-sm text-muted-foreground">
                        Nos reservamos el derecho a modificar estos términos en cualquier momento 
                        para adaptarlos a cambios legales, técnicos o en nuestros servicios.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold">📧 Notificación de cambios</h3>
                      <p className="text-sm text-muted-foreground">
                        Te notificaremos cualquier cambio significativo por email (si eres suscriptor) 
                        y mediante aviso en el sitio web al menos 15 días antes de su entrada en vigor.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold">✅ Aceptación de cambios</h3>
                      <p className="text-sm text-muted-foreground">
                        El uso continuado del sitio web tras la entrada en vigor de los nuevos términos 
                        constituye su aceptación. Si no estás de acuerdo, puedes cancelar tu suscripción.
                      </p>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Section 10 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">10. Resolución de conflictos</h2>
                
                <div className="space-y-6">
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4">🤝 Resolución amistosa</h3>
                    <p className="text-muted-foreground mb-3">
                      Ante cualquier controversia, intentaremos resolverla de forma amistosa. 
                      Contacta con nosotros en primer lugar:
                    </p>
                    <div className="text-sm">
                      <div><strong>Email:</strong> lucia@estrellasecretas.com</div>
                      <div><strong>Asunto:</strong> "Reclamación - [describir problema]"</div>
                      <div><strong>Tiempo de respuesta:</strong> 48-72 horas</div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4">⚖️ Jurisdicción</h3>
                    <div className="text-sm text-muted-foreground space-y-2">
                      <div>
                        <strong>Legislación aplicable:</strong> Estos términos se rigen por la 
                        legislación española.
                      </div>
                      <div>
                        <strong>Jurisdicción:</strong> Para cualquier disputa legal, ambas partes 
                        se someten a los Juzgados y Tribunales de Barcelona, España.
                      </div>
                      <div>
                        <strong>Mediación:</strong> Antes de acudir a los tribunales, las partes 
                        intentarán resolver el conflicto mediante mediación.
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4">🛡️ Protección del consumidor</h3>
                    <p className="text-sm text-muted-foreground">
                      Como consumidor, tienes derecho a reclamar ante las autoridades competentes 
                      de protección al consumidor de tu comunidad autónoma, así como ante la 
                      Agencia Española de Consumo, Seguridad Alimentaria y Nutrición (AECOSAN).
                    </p>
                  </Card>
                </div>
              </section>

              {/* Section 11 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">11. Disposiciones generales</h2>
                
                <Card className="p-6">
                  <div className="space-y-4 text-sm">
                    <div>
                      <h3 className="font-semibold">📄 Integridad del contrato</h3>
                      <p className="text-muted-foreground">
                        Estos términos, junto con la Política de Privacidad y la Política de Cookies, 
                        constituyen el acuerdo completo entre tú y nosotros.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold">⚖️ Separabilidad</h3>
                      <p className="text-muted-foreground">
                        Si alguna disposición de estos términos es declarada inválida, el resto 
                        de condiciones seguirán siendo válidas y aplicables.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold">🔄 Supervivencia</h3>
                      <p className="text-muted-foreground">
                        Las disposiciones sobre propiedad intelectual, limitación de responsabilidad 
                        y resolución de conflictos sobrevivirán a la terminación de estos términos.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold">🌍 Idioma</h3>
                      <p className="text-muted-foreground">
                        Estos términos están redactados en español. En caso de traducción a otros 
                        idiomas, prevalecerá siempre la versión en español.
                      </p>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Contact Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <Clock className="h-7 w-7 mr-3 text-primary" />
                  12. Información de contacto
                </h2>
                
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <h3 className="font-bold mb-4">📞 ¿Preguntas sobre estos términos?</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong>Titular:</strong> Lucía Romero<br/>
                      <strong>Actividad:</strong> Periodista independiente - Blog de espectáculos
                    </div>
                    
                    <div>
                      <strong>📧 Email:</strong> lucia@estrellasecretas.com<br/>
                      <strong>📞 Teléfono:</strong> +34 658 239 441
                    </div>
                    
                    <div>
                      <strong>📍 Dirección postal:</strong><br/>
                      Carrer de Pau Claris 126<br/>
                      08009 Barcelona, España
                    </div>
                    
                    <div>
                      <strong>⏰ Horario de atención:</strong><br/>
                      Lunes a Viernes: 9:00 - 18:00 (CET)<br/>
                      Respuesta por email: 24-48 horas
                    </div>
                  </div>
                </Card>
              </section>

              <Card className="p-6 text-center bg-muted/30">
                <p className="text-sm text-muted-foreground">
                  <strong>Fecha de entrada en vigor:</strong> {lastUpdated}<br/>
                  <strong>Versión:</strong> 1.0
                </p>
              </Card>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terminos;