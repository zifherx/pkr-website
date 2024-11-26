import { Home, Speech, Users, Wrench } from "lucide-react";

import { iHeader, iItemCounter, iItemGallery } from "@/interfaces";

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
    name: "DGS Team",
    src: "/images/aliados/DGS-TEAM.png",
  },
];
