"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import { TitleSection } from "@/components/Shared/TitleSection";
import { aliadosData } from "@/data";

export function NuestrosAliados() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <motion.div
      className="w-full bg-gradient-to-r from-gray-50 to-gray-100 py-16 rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TitleSection
        title="Nuestros Aliados"
        className="text-center text-3xl uppercase text-gray-800"
      />

      <Carousel
        className="w-full max-w-6xl mx-auto px-4"
        opts={{ align: "start", loop: true }}
        plugins={[plugin.current]}
      >
        <CarouselContent>
          {aliadosData.map(({ id, name, src }) => (
            <CarouselItem key={id} className="md:basis-1/3 lg:basis-1/4 pl-4">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-lg border border-gray-200">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="w-48 h-48 relative mb-4">
                    <Image
                      src={src}
                      alt={`Aliado ${name}`}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {name}
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex bg-transparent" />
        <CarouselNext className="hidden md:flex bg-transparent" />
      </Carousel>
    </motion.div>
  );
}
