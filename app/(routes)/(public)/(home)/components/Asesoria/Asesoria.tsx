"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import { PhoneCall } from "lucide-react";

export function Asesoria() {
  return (
    <div className="container px-0 md:px-4 py-28 mx-auto">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-bluePKR rounded-2xl overflow-hidden"
        >
          <div className="flex justify-between md:grid md:grid-cols-[70%,1fr] md:items-center md:max-w-4xl md:mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-white space-y-6 py-14 px-3 md:p-14"
            >
              <h2 className="text-xl md:text-3xl font-bold uppercase">
                ¿Necestas Asesoría?
              </h2>
              <p className="text-gray-200 md:leading-relaxed text-sm md:text-md leading-4 w-[230px] md:w-auto">
                Contáctanos a nuestra oficina más cercana y solciita una cita
                para experimentar una atención integral sobre el mundo
                empresarial.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-bluePKR font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 group"
                >
                  Contáctanos
                  <PhoneCall
                    className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300"
                    strokeWidth={2}
                  />
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute right-0 bottom-0 w-1/2 h-full md:h-[140%] md:-mt-16"
            >
              <Image
                src="/images/businessman-1.png"
                alt="Asesoria"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
