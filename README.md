# BProSys - Landing Page para Productos Financieros

Este proyecto es una landing page para una fintech o banco digital que muestra un catálogo de productos financieros simulados con detalles clave, filtros y un diseño moderno.

## Características

- **Home Page**: Catálogo de productos financieros con filtros por categoría
- **Página de Detalle**: Información detallada de cada producto con visualización gráfica
- **Diseño Responsive**: Mobile-first con experiencia optimizada en todos los dispositivos
- **Accesibilidad**: Implementación de prácticas a11y para una experiencia inclusiva

## Tecnologías Utilizadas

- Next.js 15 con App Router
- TypeScript
- TailwindCSS para layout y estructuras base
- Styled Components para componentes reutilizables
- Chart.js para visualizaciones de datos

## Estructura del Proyecto

```
bprosys/
├── public/           # Imágenes y assets estáticos
├── src/
│   ├── app/          # App router de Next.js
│   ├── components/   # Componentes de la aplicación
│   │   ├── ui/       # Componentes UI reutilizables
│   ├── lib/          # Utilidades, hooks, y datos
│   │   ├── data/     # Datos mock
│   │   ├── hooks/    # Custom hooks
│   │   ├── types/    # Definiciones de tipos
```

## Cómo ejecutar localmente

1. Clona el repositorio
   ```
   git clone https://github.com/tu-usuario/bprosys.git
   cd bprosys
   ```

2. Instala las dependencias
   ```
   npm install
   ```

3. Ejecuta el servidor de desarrollo
   ```
   npm run dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## Respuestas a Preguntas Técnicas

### ¿Qué criterios seguiste para diseñar la UI de productos financieros?

Para el diseño de la UI de productos financieros, se siguieron los siguientes criterios:

1. **Confiabilidad y profesionalismo**: Se utilizó una paleta de colores sobria y profesional, con azules y verdes que transmiten confianza y estabilidad.
2. **Claridad en la información**: Los productos financieros muestran sus atributos clave de forma clara y jerarquizada.
3. **Accesibilidad**: Se trabajó en el contraste, tamaños de fuente legibles y etiquetas ARIA.
4. **Consistencia visual**: Todos los elementos mantienen el mismo lenguaje visual en las diferentes secciones.

### ¿Cómo decidiste cuándo usar Tailwind y cuándo Styled Components?

La decisión sobre cuándo usar cada tecnología siguió estos criterios:

- **Tailwind CSS**: Para layouts, espaciados, y estilos base que siguen patrones comunes.
- **Styled Components**: Para componentes de UI complejos y reutilizables que necesitan:
  - Lógica de estilo basada en props
  - Anidación compleja
  - Componentes que integran comportamiento y estilos
  - Sobreescritura específica de estilos en componentes

Esta combinación permite aprovechar la rapidez de desarrollo con Tailwind para estructuras comunes, mientras mantiene la potencia y flexibilidad de Styled Components para componentes reutilizables.

### ¿Qué harías para escalar este proyecto en una aplicación real de banca digital?

Para escalar a una aplicación real de banca digital:

1. **Arquitectura escalable**:
   - Implementar una arquitectura de microservicios o serverless
   - Establecer APIs para separar frontend y backend

2. **Seguridad reforzada**:
   - Implementar autenticación multi-factor
   - Cifrado de datos sensibles
   - Auditorías de seguridad regulares

3. **Infraestructura robusta**:
   - CI/CD para despliegues seguros
   - Monitoreo de rendimiento y errores
   - Escalado automático para manejar picos de tráfico

4. **Mejoras funcionales**:
   - Autenticación y autorización con roles de usuario
   - Área personal de cliente
   - Notificaciones en tiempo real
   - Integración con APIs bancarias reales

### ¿Qué herramientas usarías para mejorar el rendimiento y monitoreo en producción?

Para mejorar el rendimiento y monitoreo en producción utilizaría:

1. **Análisis de rendimiento**:
   - Lighthouse para auditorías automáticas
   - Web Vitals para métricas de rendimiento
   - Next.js Analytics

2. **Monitoreo y observabilidad**:
   - Datadog o New Relic para monitoreo general
   - Sentry para seguimiento de errores
   - LogRocket para sesiones de usuario

3. **Optimizaciones de rendimiento**:
   - Estrategias avanzadas de caching
   - CDN para distribución global
   - Lazy loading y code splitting
   - Optimización de recursos estáticos

4. **Testing automatizado**:
   - Testing e2e con Playwright
   - Pruebas de carga con k6 o JMeter
   - Performance testing automatizado en CI/CD 