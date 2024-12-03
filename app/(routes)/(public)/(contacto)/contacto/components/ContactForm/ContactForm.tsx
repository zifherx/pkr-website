"use client";

import { motion } from "framer-motion";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { tFormContact } from "@/types";
import { MotionIcon } from "@/components/Shared/MotionIcon";
import { Calculator, DollarSign, PieChart } from "lucide-react";

export function ContactForm({ form, onSubmit, isSubmitting }: tFormContact) {
  return (
    <motion.div
      key="form"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-white space-y-8 p-8 rounded-xl shadow-lg border-2 border-bluePKR/40"
    >
      <div>
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mt-6">
          Contáctenos
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Estamos aquí para ayudarle con todas sus necesidades contables.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Tu nombre" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="tu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input placeholder="Tu número de teléfono" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensaje</FormLabel>
                <FormControl>
                  <Textarea placeholder="Tu mensaje" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </Form>

      <div className="flex justify-around mt-8">
        <MotionIcon
          icon={Calculator}
          colorIcon="indigo-500"
          sizeIcon={12}
          scaleHover={1.3}
          scaleTap={0.9}
        />
        <MotionIcon
          icon={PieChart}
          colorIcon="indigo-500"
          sizeIcon={12}
          scaleHover={1.3}
          scaleTap={0.9}
        />
        <MotionIcon
          icon={DollarSign}
          colorIcon="indigo-500"
          sizeIcon={12}
          scaleHover={1.3}
          scaleTap={0.9}
        />
      </div>
    </motion.div>
  );
}
