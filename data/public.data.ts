import { Home, Speech, Users, Wrench } from "lucide-react";

import { iHeader, iItemCounter, iItemGallery, iValores } from "@/interfaces";

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
