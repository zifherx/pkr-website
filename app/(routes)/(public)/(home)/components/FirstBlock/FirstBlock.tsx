"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight } from "lucide-react";

import { RevealElement } from "@/components/Shared/RevealElement";
import { Button } from "@/components/ui/button";

export function FirstBlock() {
  const router = useRouter();

  return (
    <div className="w-full bg-bluePKR rounded-xl text-whitePKR">
      <div className="grid grid-cols-1 md:grid-cols-[60%,1fr] items-center">
        <RevealElement
          position="bottom"
          className="p-8 md:px-20 md:py-6 flex flex-col justify-center"
        >
          <h1 className="text-3xl font-extralight mb-5 md:text-5xl text-left">
            Outsourcing
            <TypeAnimation
              sequence={[
                "Contable",
                1000,
                "Laboral",
                1000,
                "Tributario",
                1000,
                "Empresarial",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block text-4xl md:text-6xl font-bold ml-24 md:ml-16 text-plataPKR"
            />
          </h1>
          <p className="mb-4 text-md md:text-xl md:mx-0 md:mb-8 font-light leading-tight">
            Nuestro <strong>equipo especializado</strong> será tu mejor aliado
            para alcanzar el éxito de tu empresa.
          </p>
          <Button
            className="w-fit rounded-2xl bg-whitePKR text-black font-semibold text-sm md:text-lg hover:bg-whitePKR transition-transform duration-300 hover:scale-110"
            size="lg"
            onClick={() => router.push("servicios")}
          >
            Ver Servicios
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </RevealElement>
        <RevealElement position="bottom" className="hidden md:block">
          <Image
            src="/images/portada-2.png"
            alt="Banner PKR"
            className="lg:h-auto w-auto sm:h-[300px] mx-auto md:mx-0"
            width={600}
            height={800}
            priority
          />
        </RevealElement>
      </div>
    </div>
  );
}
