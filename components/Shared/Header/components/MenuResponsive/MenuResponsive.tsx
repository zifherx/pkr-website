import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { CiMenuFries } from "react-icons/ci";

export function MenuResponsive() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <CiMenuFries className="block text-2xl" />
        </SheetTrigger>
        <SheetContent side="left">
          <p>Rutas</p>
        </SheetContent>
      </Sheet>
    </div>
  );
}
