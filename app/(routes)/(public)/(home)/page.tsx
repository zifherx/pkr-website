import { FirstBlock } from "./components/FirstBlock";
import { Counters } from "./components/Counters";
import { Nosotros } from "./components/Nosotros";
import { NuestrosAliados } from "./components/NuestroAliados";
import { Asesoria } from "./components/Asesoria";
import { NuestrosServicios } from "./components/NuestrosServicios";

export default function HomePage() {
  return (
    <>
      <FirstBlock />
      <Counters />
      <Nosotros />
      <NuestrosServicios />
      <NuestrosAliados />
      <Asesoria />
    </>
  );
}
