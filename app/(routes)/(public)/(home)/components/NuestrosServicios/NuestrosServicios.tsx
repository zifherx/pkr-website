import { TitleSection } from "@/components/Shared/TitleSection";
import { serviciosData } from "@/data";
import { ItemService } from "./components/ItemService";

export function NuestrosServicios() {
  return (
    <div className="max-w-4xl lg:max-w-6xl mx-auto px-14 py-4 md:px-0 md:py-14 items-center">
      <TitleSection
        title="Nuestros Servicios"
        className="text-center text-3xl uppercase text-gray-800"
      />

      <div className="px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {
          serviciosData.map((item, index) => (
            <ItemService key={index} servicio={item}/>
          ))
        }
        </div>
      </div>
    </div>
  );
}
