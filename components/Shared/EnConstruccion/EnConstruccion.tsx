"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export function EnConstruccion() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#7e99b4] text-white overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-bold mb-8 relative z-10"
      >
        En Construcción
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl md:text-2xl mb-12 text-center max-w-md relative z-10"
      >
        Estamos trabajando duro para traerte algo increíble. ¡Vuelve pronto!
      </motion.p>
      <div className="relative">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="w-40 h-40 md:w-60 md:h-60 rounded-full border-8 border-[#F1D7C0] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="w-20 h-20 md:w-32 md:h-32 bg-transparent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src="/images/logo-1.jpeg"
            alt="Logo PKR"
            width={200}
            height={150}
            priority
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="h-1 bg-white absolute bottom-0 left-0"
      />
    </div>
  );
}
