"use client";

import { RevealElement } from "@/components/Shared/RevealElement";
import { TitleSection } from "@/components/Shared/TitleSection";
import { CounterItem } from "./CounterItem";

import { counterData } from "@/data";

export function Counters() {
  return (
    <div className="py-14 md:py-20">
      <TitleSection
        title="Nuestras Cifras"
        className="text-center text-3xl uppercase text-gray-800"
      />
      <RevealElement
        position="bottom"
        className="grid grid-cols-2 gap-3 md:max-w-5xl mx-auto py-4 md:py-12 md:flex justify-between md:grid-cols-4 md:gap-8"
      >
        {counterData.map((item, index) => (
          <CounterItem key={index} items={item} />
        ))}
      </RevealElement>
    </div>
  );
}
