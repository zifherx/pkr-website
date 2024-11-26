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
