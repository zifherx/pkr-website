"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { tServicio } from "@/types";

export function ItemService({ servicio }: tServicio) {
  const { title, slug, cta, image, parrafos } = servicio;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-xl h-[450px] flex flex-col">
        <CardHeader className="p-0">
          <Image
            src={image}
            width={800}
            height={400}
            alt={title}
            className="w-full h-48 object-cover"
          />
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 line-clamp-4">
            {parrafos[0].parrafo}
          </p>
        </CardContent>
        <CardFooter className="p-6 mt-auto">
          <Link href={`/servicios/${slug}`} passHref className="w-full">
            <Button className="w-full">
              {cta}
              <Info className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
