import { motion } from "framer-motion";

export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-48">
      <motion.div
        className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
