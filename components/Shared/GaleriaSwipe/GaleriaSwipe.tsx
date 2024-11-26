import { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { tGaleriaSwipe } from "@/types";

export function GaleriaSwipe({ galeria }: tGaleriaSwipe) {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  return (
    <div className="w-full h-auto">
      <Carousel opts={{ loop: true }} plugins={[plugin.current]}>
        <CarouselContent>
          {galeria.map((item) => (
            <CarouselItem key={item.id}>
              <Image
                src={item.src}
                alt={item.name}
                width={700}
                height={300}
                className="w-auto h-auto rounded-2xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
