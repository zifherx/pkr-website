import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export function RedesSociales() {
  return (
    <div className="flex flex-row gap-2">
      <p className="uppercase text-md">Siguenos en:</p>
      <div className="flex flex-row items-center justify-center gap-3">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="#">
                <Facebook className="h-6 w-6" strokeWidth={2} />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Ir a Facebook</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="#">
                <Instagram className="h-6 w-6" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Ir a Instagram</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
