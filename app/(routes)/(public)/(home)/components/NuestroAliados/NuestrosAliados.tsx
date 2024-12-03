"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { TitleSection } from "@/components/Shared/TitleSection";
import { aliadosData } from "@/data";
import Image from "next/image";

export function NuestrosAliados() {
  const plugin = useRef(Autoplay({ delay: 3000 }));

  return (
    <div className="w-full">
      <div className="max-w-4xl px-14 lg:max-w-6xl mx-auto py-4 md:px-0 md:py-14 items-center">
        <TitleSection
          title="Nuestros Aliados"
          className="text-center text-3xl uppercase text-gray-800"
        />

        <Carousel
          className="mt-10"
          opts={{ loop: true }}
          plugins={[plugin.current]}
        >
          <CarouselContent className="gap-3">
            {aliadosData.map(({ id, name, src }) => (
              <CarouselItem
                key={id}
                className="basis-2/3 md:basis-1/6 my-auto mx-auto"
              >
                <Image
                  className="object-contain cursor-pointer rounded-xl"
                  src={src}
                  alt={`Aliado ${name}`}
                  width={250}
                  height={300}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
