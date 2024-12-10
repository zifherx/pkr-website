"use client";

import Link from "next/link";
import { Search } from "lucide-react";

import { RevealElement } from "@/components/Shared/RevealElement";
import { GaleriaSwipe } from "@/components/Shared/GaleriaSwipe";

import { galeriaData } from "@/data";

export function Nosotros() {
  return (
    <div className="bg-black dark:bg-white lg:py-24 lg:px-14 px-2 py-10 rounded-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[60%,1fr] text-white dark:text-black gap-10">
        <RevealElement
          position="bottom"
          className="flex flex-row items-center justify-center"
        >
          <GaleriaSwipe galeria={galeriaData} />
        </RevealElement>
        <div className="flex flex-col items-center md:items-start justify-center leading-tight px-5 md:px-0">
          <h1 className="uppercase text-2xl font-bold lg:max-w-md mb-3">
            Acerca de Nosotros
          </h1>

          <p className="text-left md:text-justify font-light text-xs md:text-sm md:leading-4">
            PKR Tributarios es una firma especializada en servicios contables y
            tributarios en Perú, dedicada a ofrecer soluciones personalizadas
            que se adaptan a las necesidades específicas de cada cliente.
            Nuestro enfoque se centra en la excelencia y el cumplimiento
            normativo, garantizando la optimización de la carga tributaria y el
            crecimiento sostenible de las empresas. Con un equipo altamente
            capacitado y en constante formación, buscamos liderar el sector
            mediante la innovación tecnológica, generando un impacto positivo en
            la economía y la sociedad. En PKR Tributarios, su éxito es nuestra
            misión.
          </p>

          <Link
            href="/nosotros"
            className="bg-black w-full md:w-fit mt-10 px-4 py-2 flex flex-row justify-center border-2 border-slate-100 rounded-xl transition-transform hover:scale-110 duration-300 hover:bg-whitePKR hover:text-black"
          >
            Más información
            <Search className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
