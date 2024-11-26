import { iHeader, iItemCounter, iItemGallery } from "@/interfaces";
import { ReactNode } from "react";

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
