"use client";

import { motion } from "framer-motion";

export function AnimatedNumber({ value }: { value: number }) {
  return (
    <motion.div
      key={value}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-gray-950 text-opacity-20 text-4xl font-bold absolute"
    >
      {value.toFixed(2)}
    </motion.div>
  );
}
