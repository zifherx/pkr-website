import { Home, Speech, Users, Wrench } from "lucide-react";

import { iHeader, iItemCounter, iItemGallery, iService, iValores } from "@/interfaces";

export const headerData: iHeader[] = [
  {
    id: 1,
    icon: Home,
    name: "Inicio",
    link: "/",
  },
  {
    id: 2,
    icon: Users,
    name: "Nosotros",
    link: "/nosotros",
  },
  {
    id: 3,
    icon: Wrench,
    name: "Servicios",
    link: "/servicios",
  },
  {
    id: 4,
    icon: Speech,
    name: "Contacto",
    link: "/contacto",
  },
];

export const counterData: iItemCounter[] = [
  {
    id: 1,
    endCounter: 250,
    text: "Clientes Satisfechos",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 2,
    endCounter: 550,
    text: "Empresas Constituidas",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 3,
    endCounter: 350,
    text: "Impuestos Declarados",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 4,
    endCounter: 1200,
    text: "Millones Invertidos",
    lineRight: true,
    lineRightMobile: false,
  },
];

export const galeriaData: iItemGallery[] = [
  {
    id: 1,
    name: "Local PKR",
    src: "/images/Local.jpeg",
  },
  {
    id: 2,
    name: "Logo 2 PKR",
    src: "/images/logo2-new.jpeg",
  },
  {
    id: 3,
    name: "Logo 3 PKR",
    src: "/images/logo3-plata.jpeg",
  },
];

export const aliadosData: iItemGallery[] = [
  {
    id: 1,
    name: "Acción Legal Abogados",
    src: "/images/aliados/accion-legal-abogados.png",
  },
  {
    id: 2,
    name: "D'Matias",
    src: "/images/aliados/d-matias.png",
  },
  {
    id: 3,
    name: "DGS Team",
    src: "/images/aliados/DGS-TEAM.png",
  },
  {
    id: 4,
    name: "Galase",
    src: "/images/aliados/galase.png",
  },
  {
    id: 5,
    name: "Golosinas Trujillo",
    src: "/images/aliados/golosinas-trujillo.png",
  },
  {
    id: 6,
    name: "Jonathan Silupu Arquitecto",
    src: "/images/aliados/jonathan-silupu-arquitecto.png",
  },
  {
    id: 7,
    name: "Luis Centurion Influencer",
    src: "/images/aliados/luis-centurion-influencer.png",
  },
  {
    id: 8,
    name: "Luxe Dent",
    src: "/images/aliados/luxedent.png",
  },
  {
    id: 9,
    name: "Magic Kingdom",
    src: "/images/aliados/magic-kingdom.png",
  },
  {
    id: 10,
    name: "Proferco Plus",
    src: "/images/aliados/proferco-plus.png",
  },
  {
    id: 11,
    name: "Protmen",
    src: "/images/aliados/protmen.png",
  },
];

export const valoresData: iValores[] = [
  {
    id: 1,
    title: "Integridad",
    description: "Honestidad y transparencia en todas nuestras interacciones.",
  },
  {
    id: 2,
    title: "Compromiso",
    description:
      "Dedicados al éxito de nuestros clientes, adaptándonos a sus necesidades específicas.",
  },
  {
    id: 3,
    title: "Excelencia",
    description:
      "Buscamos la perfección en cada aspecto de nuestro trabajo mediante la formación continua y el uso de prácticas tecnológicas.",
  },
  {
    id: 4,
    title: "Confidencialidad",
    description:
      "Mantenemos la máxima discreción y protección de la información de nuestros clientes.",
  },
  {
    id: 5,
    title: "Responsabilidad",
    description:
      "Cumplimos con todas las normativas y fomentamos el desarrollo sostenible de las empresas.",
  },
];

export const serviciosData: iService[] = [
  {
    id: 1,
    slug: "asesoria-tributaria",
    title: "Asesoría Tributaria",
    image: "https://placehold.co/800x400",
    cta: "Optimiza tu estrategia fiscal",
    parrafos: [
      {
        id: 1,
        parrafo: "Maximiza el potencial de tu empresa con nuestra asesoría tributaria especializada. "
      },
      {
        id: 2,
        parrafo: "Nuestro equipo de expertos se dedica a analizar exhaustivamente tu situación fiscal para desarrollar estrategias que optimicen tu carga tributaria dentro del marco legal."
      },
      {
        id: 3,
        parrafo: "Ofrecemos planificación fiscal preventiva, gestión de declaraciones, representación ante autoridades fiscales y asesoramiento continuo en normativas tributarias."
      },
      {
        id:4,
        parrafo: "Nos mantenemos actualizados con las últimas reformas fiscales para asegurar que tu empresa cumpla con todas las obligaciones mientras aprovecha los beneficios fiscales disponibles."
      }
    ],
  },
  {
    id: 2,
    slug: "contabilidad-general",
    title: "Contabilidad General",
    image: "https://placehold.co/800x400",
    cta: "Organiza tu contabilidad",
    parrafos: [
      {
        id: 1,
        parrafo: "Brindamos un servicio integral de contabilidad que va más allá de los números. "
      },
      {
        id: 2,
        parrafo: "Nuestro enfoque meticuloso abarca desde el registro diario de transacciones hasta la elaboración de estados financieros complejos. "
      },
      {
        id: 3,
        parrafo: "Implementamos sistemas contables eficientes, gestionamos nóminas, controlamos inventarios y generamos reportes personalizados que te permiten tomar decisiones informadas. "
      },
      {
        id: 4,
        parrafo: "Nuestro compromiso es mantener tu contabilidad actualizada, precisa y en cumplimiento con las normas vigentes, permitiéndote concentrarte en el crecimiento de tu negocio."
      }
    ],
  },
  {
    id: 3,
    slug: "auditoria-financiera",
    title: "Auditoría Financiera",
    image: "https://placehold.co/800x400",
    cta: "Verifica tu salud financiera",
    parrafos: [
      {
        id: 1,
        parrafo: "Realizamos auditorías financieras exhaustivas que proporcionan una visión clara y objetiva de la salud financiera de tu empresa."
      },
      {
        id: 2,
        parrafo: "Nuestro proceso incluye la revisión detallada de estados financieros, evaluación de controles internos, verificación de cumplimiento normativo y análisis de riesgos."
      },
      {
        id: 3,
        parrafo: "Implementamos metodologías avanzadas de auditoría para identificar áreas de mejora y ofrecer recomendaciones estratégicas."
      },
      {
        id:4,
        parrafo: "Garantizamos la transparencia y precisión de tu información financiera, fortaleciendo la confianza de inversores y stakeholders."
      }
    ],
  },
  {
    id: 4,
    slug: "planificacion-financiera",
    title: "Planificación Financiera",
    image: "https://placehold.co/800x400",
    cta: "Planifica tu futuro financiero",
    parrafos: [
      {
        id: 1,
        parrafo: ""
      },
      {
        id: 2,
        parrafo: ""
      },
      {
        id: 3,
        parrafo: ""
      }
    ],
  },
]