"use client";

import { motion, Variants } from "framer-motion";
import { FileQuestion, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bluePKR text-plataPKR p-4">
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-8" variants={itemVariants}>
          <FileQuestion size={80} className="mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-2">404</h1>
          <p className="text-xl">Página no encontrada</p>
        </motion.div>

        <motion.p className="mb-8 max-w-md mx-auto" variants={itemVariants}>
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-plataPKR rounded-md hover:bg-plataPKR hover:text-bluePKR transition-colors duration-300"
          >
            <Home className="mr-2" size={20} />
            Volver al inicio
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
