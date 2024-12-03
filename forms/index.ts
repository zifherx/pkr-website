import { z } from "zod";

export const formContacto = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Por favor, ingrese un email válido." }),
  phone: z.string().min(9, {
    message: "El número de teléfono debe tener al menos 9 dígitos.",
  }),
  message: z
    .string()
    .min(5, { message: "El mensaje debe tener al menos 5 caracteres." }),
});

export type schemaFormContacto = z.infer<typeof formContacto>;
