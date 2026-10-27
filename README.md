# Mendoza & Asociados · versión 1

Web profesional en español para Alejandro Mendoza, abogado en Los Vilos, Región de Coquimbo. Entrega del 27 de octubre de 2026.

## Abrir la página

Abre **index.html** con tu navegador. No requiere instalación, cuenta, compilación ni claves.

La carpeta solicitada es:
Escritorio / Mendoza & Asociados / version 1

También se entrega una copia en el chat y un ZIP. El ZIP contiene directamente los archivos de la web: descomprímelo antes de subirlos.

## Publicar en GitHub y Vercel

1. Crea tu repositorio de GitHub y sube **todo el contenido de version 1**, incluida la carpeta assets. index.html y vercel.json deben quedar en la raíz del repositorio.
2. En Vercel, importa ese repositorio.
3. Selecciona el tipo de proyecto **Other**. Si Vercel pregunta por la carpeta raíz, usa la que contiene index.html y vercel.json.
4. No hace falta instalar dependencias ni ejecutar una compilación. La carpeta de salida es **.**. vercel.json incluye estos ajustes.
5. Publica y comprueba los botones de WhatsApp, teléfono, correo y ruta.

Si subes la carpeta completa de la empresa al repositorio, selecciona **version 1** como carpeta raíz en Vercel.

Esta entrega es local: no se ha creado un repositorio ni un proyecto en tu cuenta, ni se ha publicado el sitio.

Documentación oficial consultada: https://vercel.com/docs/project-configuration/vercel-json y https://vercel.com/docs/git/vercel-for-github.

## Qué incluye

- Portada con retrato de Alejandro Mendoza mejorado desde la imagen entregada.
- Áreas laboral, familia y penal con fotografías y temas desplegables.
- Accesos a derecho civil y policía local.
- Presentación del estudio y fotografía de trabajo editada.
- Tres pasos con imágenes propias para explicar cómo iniciar la consulta.
- Preguntas frecuentes.
- Un comentario público real con autor y enlace al original.
- Formulario de opiniones para enviar al estudio y enlace a Facebook.
- Contacto, mapa embebido por dirección y enlace independiente de ruta.
- Formulario que prepara un mensaje de WhatsApp.
- Menú móvil, animaciones de entrada, preferencia de movimiento reducido y navegación con teclado.
- Fuentes locales, imágenes WebP, favicon y configuración para Vercel.

## Funcionamiento de formularios y opiniones

Los formularios preparan el mensaje y abren WhatsApp. La persona revisa y envía el mensaje allí. **La web no lo envía por sí sola**. Si el navegador bloquea la ventana nueva, aparece un enlace para abrir el mensaje.

Las opiniones enviadas al estudio se revisan antes de cualquier publicación. Para incorporar una nueva opinión a esta web, el administrador edita el HTML después de contar con autorización. Las opiniones públicas nuevas pueden dejarse en Facebook, dentro de las posibilidades y requisitos de esa plataforma. **No hay un muro compartido, base de datos ni publicación automática de comentarios en el sitio.**

No se recopilan datos de consulta en un servidor propio ni se usa localStorage. Los formularios no son un sistema de reserva confirmada.

## Archivos

- index.html: contenido, datos de contacto y metadatos.
- styles.css: identidad visual, tamaños y adaptación a dispositivos.
- script.js: menú, formularios, ventanas y animaciones.
- assets/: únicamente imágenes y tipografías finales usadas; sin subcarpetas.
- vercel.json: publicación estática, caché y cabeceras.
- robots.txt: rastreo básico.
- 404.html: página para rutas inexistentes.
- brief-marca.md: fuentes, decisiones, límites y tratamiento de imágenes.
- VERIFICACION.md: comprobaciones de esta entrega.
- LICENCIA-DM-SANS.txt y LICENCIA-LIBRE-CASLON.txt: licencias de las fuentes.

## Imágenes y fuentes

Las dos imágenes de Alejandro parten de los archivos proporcionados y fueron limpiadas y ampliadas con la herramienta de imágenes integrada. La segunda incluye reconstrucción de fondo, por lo que no sirve para acreditar las instalaciones, diplomas o mobiliario reales.

Las seis fotografías de servicios y proceso son ilustraciones fotográficas generadas para la web; no se presentan como clientes, resultados ni instalaciones del estudio. El símbolo de la balanza se extrajo y limpió desde el material de la marca; el nombre es texto editable. El detalle y los prompts están en brief-marca.md.

Fuentes: Libre Caslon Display y DM Sans, distribuidas bajo SIL Open Font License, incluidas localmente.

## Datos a completar al tener un dominio definitivo

No se inventó una dirección web oficial. Cuando se defina el dominio:

- Agregar una URL canonical absoluta en el head de index.html.
- Agregar og:url y convertir og:image en una URL HTTPS absoluta del dominio.
- Crear sitemap.xml con la URL principal, sin fragmentos #.
- Añadir su dirección absoluta a robots.txt.
- Verificar la propiedad y enviar el sitemap en Google Search Console.

Si se edita el bloque JSON-LD, actualizar también su hash en la cabecera Content-Security-Policy de vercel.json.

Confirmar con el abogado el texto de servicios y el proceso de atención antes de publicar: las áreas generales están verificadas, pero los subtemas y el recorrido son una propuesta editorial. No se anuncian honorarios, años de experiencia, premios, porcentajes de éxito ni atención presencial permanente.

## Investigación

Se revisaron el perfil y las piezas públicas accesibles de Instagram, la página de Facebook, publicaciones recientes y el comentario enlazado. Algunas piezas de Instagram y funciones sociales requieren iniciar sesión. No se inició sesión, no se copiaron expedientes y no se reutilizaron fotografías de terceros identificables. El inventario está en brief-marca.md.
