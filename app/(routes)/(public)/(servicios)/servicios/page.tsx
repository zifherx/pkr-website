import { Metadata } from "next";

import { ListaServicios } from "../components/ListaServicios";
import { serviciosData } from "@/data";

export const metadata: Metadata = {
  title: {
    default: "Nuestros Servicios",
    template: "",
  },
};

export default function ServicioPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">
        Nuestros Servicios
      </h1>
      <ListaServicios servicios={serviciosData} />
    </div>
  );
}
