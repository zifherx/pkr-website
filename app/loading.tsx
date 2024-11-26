"use client";

import { motion, Variants } from "framer-motion";

import { DollarSign, Hash, Percent } from "lucide-react";

export default function LoadingPage() {
  const iconVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-bluePKR">
      <motion.div
        className="flex space-x-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[DollarSign, Hash, Percent].map((Icon, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            variants={iconVariants}
          >
            <motion.div
              className="text-plataPKR mb-4"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <Icon size={56} />
            </motion.div>
            <motion.div
              className="w-16 h-1 bg-plataPKR"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
