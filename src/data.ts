import { Service, PortfolioItem, FAQItem, PricingPlan, ProcessStep } from "./types";

export const CRM_URL = "https://palmyracrm.onrender.com";
export const WHATSAPP_NUMBER = "5355581669";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const services: Service[] = [
  {
    id: "landing-page",
    name: "Landing Pages",
    description: "Páginas de aterrizaje de alta conversión para captar leads y ventas.",
    price: "60 - 300",
    time: "3-5 días",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3",
    features: [
      "Diseño UX/UI Premium (1 página)",
      "Formulario de captación de leads",
      "Integración de botón WhatsApp",
      "Optimización Móvil (Responsive)",
      "Soporte técnico y mantenimiento inicial"
    ],
    idealFor: [
      "Captar clientes potenciales (Leads)",
      "Lanzar nuevos productos o servicios",
      "Promocionar eventos o sucursales locales",
      "Campañas publicitarias (Google/Facebook Ads)"
    ],
    benefits: [
      "Alta tasa de conversión de visitantes a clientes",
      "Estructura clara y orientada a la acción (CTA)",
      "Tiempos de carga ultrarrápidos"
    ]
  },
  {
    id: "ecommerce",
    name: "Tiendas Online",
    description: "E-commerce completo con gestión de pedidos y catálogo avanzado.",
    price: "150 - 1000",
    time: "2-3 semanas",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3",
    features: [
      "Carrito de compras avanzado",
      "Gestión integral de pedidos",
      "Panel administrador de productos",
      "Gestión de inventario automática",
      "Reportes de ventas detallados"
    ],
    idealFor: [
      "Vender productos físicos o digitales 24/7",
      "Negocios que buscan vender a nivel nacional",
      "Automatizar procesos de ventas"
    ],
    benefits: [
      "Control total de tu catálogo y stock sin intermediarios",
      "Generación de ventas incluso mientras duermes",
      "Experiencia de compra moderna, rápida y segura"
    ]
  },
  {
    id: "pos-software",
    name: "Software de Punto de Venta (POS)",
    description: "Sistema de caja y ventas para negocios que necesitan registrar operaciones, controlar productos y consultar reportes con una experiencia clara.",
    price: "Consultar según alcance",
    time: "Según necesidades",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000",
    features: [
      "Registro de ventas desde caja",
      "Gestión de productos y precios",
      "Control de inventario según configuración",
      "Historial y consulta de operaciones",
      "Reportes disponibles según alcance del proyecto"
    ],
    idealFor: [
      "Tiendas y comercios minoristas",
      "Negocios con inventario de productos",
      "Empresas que desean digitalizar su punto de venta"
    ],
    benefits: [
      "Flujo de venta más ordenado",
      "Información operativa más fácil de consultar",
      "Posibilidad de adaptar el sistema al negocio"
    ]
  },
  {
    id: "catalog",
    name: "Catálogos con pedidos por WhatsApp",
    description: "Catálogos digitales interactivos enlazados directamente a tu WhatsApp.",
    price: "150 - 500",
    time: "1 semana",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3",
    features: [
      "Hasta 50 productos con imágenes",
      "Buscador y filtros inteligentes",
      "Carrito de compras integrado",
      "Botón de pedido directo a WhatsApp",
      "Panel para actualizar precios"
    ],
    idealFor: [
      "Negocios locales, bodegas y emprendedores",
      "Restaurantes, pizzerías y comidas rápidas",
      "Vendedores en redes sociales (Instagram/Facebook)"
    ],
    benefits: [
      "Atención directa, cálida y personalizada al cliente",
      "Proceso de compra sin fricciones ni registros largos",
      "Costo de mantenimiento mínimo"
    ]
  },
  {
    id: "crm-erp",
    name: "CRM & ERP",
    description: "Sistemas de gestión empresarial, inventarios y facturación a medida.",
    price: "150 - 1500",
    time: "1-2 meses",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3",
    features: [
      "Gestión integral de clientes y leads",
      "Módulo de facturación y recibos",
      "Control avanzado de inventario",
      "Reportes en tiempo real y gráficos",
      "Control de roles y permisos de usuario"
    ],
    idealFor: [
      "Empresas en fase de crecimiento (Scale-ups)",
      "Equipos de ventas que necesitan seguimiento riguroso",
      "Centralizar operaciones, contabilidad y stock en un solo lugar"
    ],
    benefits: [
      "Optimización y automatización de procesos repetitivos",
      "Toma de decisiones rápidas basadas en datos y métricas",
      "Seguridad de alto nivel para información sensible"
    ]
  },
  {
    id: "app-web",
    name: "Aplicaciones Web & Móviles",
    description: "Soluciones de software personalizadas, Dashboards y aplicaciones.",
    price: "1000 - 2500",
    time: "2-3 meses",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3",
    features: [
      "Desarrollo Full Stack a medida",
      "Bases de datos escalables en la nube",
      "PWA (Aplicación Web Progresiva)",
      "APIs personalizadas e integraciones",
      "Publicación y despliegue seguro"
    ],
    idealFor: [
      "Startups tecnológicas con modelos de negocio innovadores",
      "Plataformas SaaS (Software as a Service) o suscripciones",
      "Digitalización y modernización de servicios tradicionales"
    ],
    benefits: [
      "Solución 100% personalizada a las necesidades de tu empresa",
      "Accesibilidad garantizada desde cualquier dispositivo",
      "Ventaja competitiva y tecnológica frente a la competencia"
    ]
  },
  {
    id: "ia-bot",
    name: "ChatBots & Automatización IA",
    description: "Atención al cliente automatizada 24/7 con Inteligencia Artificial.",
    price: "300 - 600",
    time: "2 semanas",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3",
    features: [
      "Integración total con WhatsApp y Web",
      "Respuestas inteligentes 24/7",
      "Entrenamiento con datos de tu empresa",
      "Derivación automática a humanos",
      "Estadísticas y análisis de conversaciones"
    ],
    idealFor: [
      "Dar soporte técnico masivo y responder preguntas frecuentes",
      "Filtrar clientes potenciales de curiosos automáticamente",
      "Agendar citas, reservas y toma de pedidos básica"
    ],
    benefits: [
      "Atención ininterrumpida sin aumentar los costos de personal",
      "Aumento en la satisfacción del cliente por respuestas instantáneas",
      "Tus agentes humanos se enfocan en tareas de mayor valor"
    ]
  },
  {
    id: "custom-project",
    name: "Proyecto a la Medida",
    description: "Desarrollo de software y soluciones tecnológicas únicas según las necesidades de tu empresa.",
    price: "100 - 5000",
    time: "A convenir",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3",
    features: [
      "Análisis profundo de requerimientos",
      "Arquitectura escalable a medida",
      "Integración de múltiples APIs (Pagos, mapas, etc)",
      "Testing intensivo y QA",
      "Documentación completa del código"
    ],
    idealFor: [
      "Startups con modelos de negocio complejos",
      "Empresas que requieren integraciones con sistemas legacy",
      "Ideas disruptivas sin plantillas existentes"
    ],
    benefits: [
      "Software 100% tuyo sin limitaciones",
      "Escalabilidad garantizada a largo plazo",
      "Ventaja competitiva y tecnológica frente al mercado"
    ]
  }
];

export const portfolio: PortfolioItem[] = [
  {
    id: "p1",
    title: "Sistema de Gestión para Clínicas",
    category: "CRM / Dashboard",
    description: "Plataforma administrativa integral para clínicas y centros médicos, optimizando tiempos de atención.",
    features: ["Gestión de citas", "Historial clínico", "Facturación", "Panel de doctores"],
    idealFor: ["Clínicas médicas", "Consultorios odontológicos", "Centros de estética"],
    benefits: ["Control centralizado de pacientes", "Reducción de inasistencias", "Reportes financieros automáticos"],
    price: "150 - 1500",
    time: "1.5 meses",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3"
  },
  {
    id: "p2",
    title: "E-Commerce de Moda Premium",
    category: "Tienda Online",
    description: "Tienda virtual de alto rendimiento enfocada en la experiencia de usuario y conversión de ventas.",
    features: ["Gestión de pedidos", "Variaciones de producto", "Panel admin", "SEO optimizado"],
    idealFor: ["Marcas de ropa", "Boutiques", "Diseñadores independientes"],
    benefits: ["Aumento de ventas online", "Gestión de stock en tiempo real", "Experiencia de compra fluida"],
    price: "150 - 900",
    time: "3 semanas",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3"
  },
  {
    id: "p3",
    title: "App de Reservas para Restaurantes",
    category: "Aplicación Web",
    description: "Sistema para reservas y pedidos integrado con QR, diseñado para el sector gastronómico.",
    features: ["Reserva de mesas", "Menú digital QR", "Pedidos online", "Gestión de turnos"],
    idealFor: ["Restaurantes", "Bares", "Cafeterías de especialidad"],
    benefits: ["Menos filas y esperas", "Actualización de menú sin costos de impresión", "Base de datos de clientes recurrentes"],
    price: "600 - 1200",
    time: "4 semanas",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3"
  },
  {
    id: "p4",
    title: "Calculadora Solar Inteligente",
    category: "Aplicación Web",
    description: "Ejemplo conceptual de una herramienta que estima necesidades solares a partir del consumo y de parámetros técnicos definidos.",
    features: ["Cálculo preciso de Wh", "Recomendación de equipos", "Generación de PDF", "Base de datos de paneles"],
    idealFor: ["Instaladores solares", "Empresas de energía", "Consultores energéticos"],
    benefits: ["Agiliza la preparación de propuestas", "Ayuda a comparar escenarios", "Presentación clara de estimaciones"],
    price: "300 - 600",
    time: "2-3 semanas",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3"
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Landing Page Esencial",
    price: "60 - 300",
    time: "3-5 días",
    features: [
      "Diseño Premium de 1 página",
      "Formulario de contacto",
      "Botón WhatsApp flotante",
      "Optimización Móvil",
      "Soporte técnico y mantenimiento inicial"
    ]
  },
  {
    name: "Catálogo Negocios",
    price: "150 - 500",
    time: "1-2 semanas",
    recommended: true,
    features: [
      "Hasta 50 productos/servicios",
      "Buscador y filtros",
      "Carrito con envío a WhatsApp",
      "Panel autoadministrable",
      "SEO Básico"
    ]
  },
  {
    name: "Tienda Online Pro",
    price: "150 - 1000",
    time: "3-4 semanas",
    features: [
      "Productos ilimitados",
      "Gestión de pedidos integral",
      "Gestión de inventario",
      "Cuentas de usuario",
      "Reportes de ventas"
    ]
  }
];

export const processSteps: ProcessStep[] = [
  { number: 1, title: "Contacto", description: "Nos cuentas tu idea y objetivos principales a través de WhatsApp o formulario." },
  { number: 2, title: "Reunión", description: "Agendamos una videollamada para definir el alcance y requerimientos técnicos." },
  { number: 3, title: "Cotización", description: "Te enviamos una propuesta detallada con tiempos y costos exactos." },
  { number: 4, title: "Diseño", description: "Creamos prototipos visuales de alta fidelidad para tu aprobación." },
  { number: 5, title: "Desarrollo", description: "Programamos tu proyecto con tecnologías modernas y código limpio." },
  { number: 6, title: "Revisión", description: "Pruebas de calidad y ajustes finales en un entorno de staging." },
  { number: 7, title: "Entrega", description: "Lanzamiento oficial de tu proyecto al público." },
  { number: 8, title: "Soporte", description: "Acompañamiento continuo y mantenimiento técnico." }
];

export const faqs: FAQItem[] = [
  {
    question: "¿Necesito conocimientos técnicos para administrar mi página?",
    answer: "No. En todos los proyectos autoadministrables incluimos un panel de control intuitivo y capacitación en video para que puedas gestionar tu contenido fácilmente."
  },
  {
    question: "¿El pago es en una sola cuota?",
    answer: "No, trabajamos por etapas. Normalmente requerimos un anticipo del 20% para iniciar, 30% tras aprobar el diseño, 30% al finalizar el desarrollo y el 20% restante previo a la entrega final."
  },
  {
    question: "¿Qué incluye el servicio de soporte?",
    answer: "Nuestro soporte cubre corrección de errores (bugs), monitoreo de tiempo de actividad y consultas técnicas menores. Las nuevas funcionalidades se cotizan por separado."
  },
  {
    question: "¿Mi página estará optimizada para Google (SEO)?",
    answer: "Sí, todos nuestros desarrollos incluyen estructura HTML semántica, metaetiquetas, optimización de velocidad y buenas prácticas SEO desde el código base."
  }
];
