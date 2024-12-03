"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ContactForm } from "./components/ContactForm";
import { MessageResponse } from "./components/MessageResponse";

import { formContacto, schemaFormContacto } from "@/forms";
import { useRouter } from "next/navigation";

export default function ContactoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const formSchema = useForm<schemaFormContacto>({
    resolver: zodResolver(formContacto),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        router.refresh();
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted, router]);

  const onSubmit = async (values: schemaFormContacto) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    console.log("formPadre:", values);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-8">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <ContactForm
            form={formSchema}
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
          />
        ) : (
          <MessageResponse key="confirmation" />
        )}
      </AnimatePresence>
    </div>
  );
}
