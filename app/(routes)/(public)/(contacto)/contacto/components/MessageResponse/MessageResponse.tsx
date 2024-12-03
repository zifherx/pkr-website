import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function MessageResponse() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full space-y-8 text-center bg-white p-8 rounded-xl shadow-lg"
    >
      <div className="rounded-full bg-green-100 p-6 mx-auto w-24 h-24 flex items-center justify-center">
        <Send className="h-12 w-12 text-green-600" />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        ¡Mensaje enviado!
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Gracias por contactarnos. Nos pondremos en contacto con usted pronto.
      </p>
    </motion.div>
  );
}
