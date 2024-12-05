import { LucideIcon } from "lucide-react";

export interface iHeader {
  id: number;
  icon: LucideIcon;
  name: string;
  link: string;
}

export interface iItemCounter {
  id: number;
  text: string;
  lineRight: boolean;
  lineRightMobile: boolean;
  endCounter: number;
}

export interface iItemGallery {
  id: number;
  src: string;
  name: string;
}

export interface iNumberBG {
  id: number;
  value: number;
  x: number;
  y: number;
}

export interface iValores {
  id: number;
  title: string;
  description: string;
}

export interface iService{
  id: number;
  slug: string
  title: string;
  parrafos: iParrafo[];
  image: string;
  cta: string
}

export interface iParrafo{
  id: number
  parrafo: string
}