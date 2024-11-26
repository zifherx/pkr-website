import { cn } from "@/lib/utils";
import { tTitleSection } from "@/types";

export function TitleSection({ title, className }: tTitleSection) {
  return (
    <div className="mb-10 text-center">
      <h3 className={cn("font-bold", className)}>{title}</h3>
      <div className="bg-bluePKR h-2 w-8 mx-auto rounded-lg">&nbsp;</div>
    </div>
  );
}
