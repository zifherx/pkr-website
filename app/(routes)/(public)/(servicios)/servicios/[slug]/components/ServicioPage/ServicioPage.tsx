"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import { tServicio } from "@/types";

export function ServicioPage({ servicio }: tServicio) {
  const { title, cta, image, parrafos } = servicio;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-ful px-4 py-6"
    >
      <div className="flex justify-between items-center mb-0">
        <div />
        <Link
          href="/"
          className="inline-flex items-center text-lg mb-6 md:mb-0 text-bluePKR/70 hover:text-bluePKR"
        >
          <ArrowLeft className="mr-2" strokeWidth={2} />
          Volver al inicio
        </Link>
      </div>

      <div className="flex flex-col items-start mb-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-bold mb-6"
        >
          {title}
        </motion.h1>
        <motion.span className="bg-bluePKR text-white text-sm font-medium mr-2 px-3 py-1.5 rounded-sm">
          {cta}
        </motion.span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-6 md:mb-0"
        >
          <Image
            src={`/images/services/${image}`}
            alt={title}
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {parrafos.map((parrafo, index) => (
            <motion.p
              key={parrafo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              className="mb-4"
            >
              {parrafo.parrafo}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <Link href="/contacto" passHref>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-bluePKR text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
              >
                ¡Hablemos de tu proyecto!
              </motion.a>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
