"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

import { LoadingSpinner } from "../LoadingSpinner";

import { tListaServicios } from "@/types";

export function ListaServicios({ servicios }: tListaServicios) {
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleImageLoad = (id: number) => {
    setImagesLoaded((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {servicios.map((servicio) => (
        <motion.div
          key={servicio.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white  rounded-lg shadow-lg overflow-hidden"
        >
          <Link href={`/servicios/${servicio.slug}`} className="block">
            <div className="relative h-52">
              {!imagesLoaded[servicio.id] && <LoadingSpinner />}
              <Image
                src={`images/services/${servicio.image}`}
                alt={servicio.title}
                layout="fill"
                objectFit="cover"
                className={`transition-transform duration-300 transform hover:scale-110 ${
                  imagesLoaded[servicio.id] ? "opacity-100" : " opacity-0"
                }`}
                onLoad={() => handleImageLoad(servicio.id)}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">
                  Ver más
                </span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{servicio.title}</h2>
              <p className="text-gray-600 mb-4">
                {servicio.parrafos[0].parrafo}
              </p>
              <span className="inline-block bg-blue-100 text-bluePKR text-sm font-medium mr-2 px-2.5 py.0.5 rounded">
                {servicio.cta}
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
