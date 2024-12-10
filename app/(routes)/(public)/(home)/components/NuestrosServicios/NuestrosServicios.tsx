import { TitleSection } from "@/components/Shared/TitleSection";
import { serviciosData } from "@/data";
import { ItemService } from "./components/ItemService";

export function NuestrosServicios() {
  return (
    <div className="w-full px-4 py-8 md:px-0 md:pt-20">
      <TitleSection
        title="Nuestros Servicios"
        className="text-center text-3xl uppercase text-gray-800"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
        {serviciosData.map((item, index) => (
          <ItemService key={index} servicio={item} />
        ))}
      </div>
    </div>
  );
}
