"use client";

import { RevealElement } from "@/components/Shared/RevealElement";
import { CounterItem } from "./CounterItem";

import { counterData } from "@/data";

export function Counters() {
  return (
    <RevealElement
      position="bottom"
      className="grid gird-cols-2 gap-4 max-w-5xl mx-auto py-10 md:py-16 md:flex justify-between md:grid-cols-4 md:gap-8"
    >
      {counterData.map((item, index) => (
        <CounterItem key={index} items={item} />
      ))}
    </RevealElement>
  );
}
