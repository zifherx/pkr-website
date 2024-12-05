import { schemaFormContacto } from "@/forms";
import { iHeader, iItemCounter, iItemGallery, iService } from "@/interfaces";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { UseFormReturn } from "react-hook-form";

export type tNavbar = {
  openMobileMenu: boolean;
};

export type tNavbarItem = {
  isMenuHold: boolean;
  items: iHeader;
};

export type RevealProps = {
  children: ReactNode;
  className?: string;
  position: "right" | "bottom";
  delay?: number;
};

export type tCounter = {
  items: iItemCounter;
};

export type tGaleriaSwipe = {
  galeria: iItemGallery[];
};

export type tTitleSection = {
  title: string;
  className?: string;
};

export type tFormContact = {
  form: UseFormReturn<schemaFormContacto>;
  onSubmit: (values: schemaFormContacto) => void;
  isSubmitting: boolean;
};

export type tMotionIcon = {
  icon: LucideIcon;
  sizeIcon: number;
  colorIcon: string;
  scaleHover: number;
  scaleTap: number;
};

export type tServicio = {
  servicio: iService
}