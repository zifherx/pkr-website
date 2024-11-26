"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

import { RevealElement } from "@/components/Shared/RevealElement";

export function FirstBlock() {
  return (
    <div className="z-20 w-full bg-bluePKR/10">
      <div className="z-20 grid items-center h-full mx-auto max-w-6xl p-6 py-10 md:py-0 md:grid-cols-2">
        <RevealElement
          position="bottom"
          className="flex flex-col justify-center max-w-md mt-10"
        >
          <h1 className="text-5xl text-center font-bold text-bluePKR leading-tight mb-5 md:text-6xl md:mb-10 md:text-left">
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
              className="block font-semibold text-black ml-5 dark:text-white"
            />
          </h1>
          <p className="mx-auto max-w-sm mb-2 text-xl md:text-2xl md:mx-0 md:mb-8">
            Nuestro <strong>equipo especializado</strong> será tu mejor aliado
            para alcanzar el éxito de tu empresa.
          </p>
        </RevealElement>
        <RevealElement position="bottom">
          <Image
            src="/images/portada-2.png"
            alt="Banner PKR"
            className="lg:h-auto w-auto sm:h-[300px] mx-auto md:mx-0"
            width={800}
            height={800}
            priority
          />
        </RevealElement>
      </div>
    </div>
  );
}
