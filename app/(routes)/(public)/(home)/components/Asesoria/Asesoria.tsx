import { RevealElement } from "@/components/Shared/RevealElement";
import { Button } from "@/components/ui/button";
import { Headset } from "lucide-react";
import Link from "next/link";

export function Asesoria() {
  return (
    <div className="bg-blackPKR/10 md:flex md:justify-center md:items-center md:py-28 p-10">
      <RevealElement position="bottom" className="max-w-3xl md:pr-40">
        <h3 className="text-2xl md:text-3xl font-bold uppercase mb-5">
          ¿Necestas Asesoría?
        </h3>
        <p className="text-lg text-justify font-medium leading-tight">
          Contáctanos a nuestra oficina más cercana y solciita una cita para
          experimentar una atención integral sobre el mundo empresarial.
        </p>
      </RevealElement>
      <RevealElement position="bottom" className="mt-10">
        <Link href="/contacto">
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent w-full text-lg rounded-xl border-2 border-black transition ease-in-out delay-150 duration-300 hover:bg-black hover:text-white md:w-fit"
          >
            Contáctanos
            <Headset className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </RevealElement>
    </div>
  );
}
