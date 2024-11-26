import { FirstBlock } from "./components/FirstBlock";
import { Counters } from "./components/Counters";
import { Nosotros } from "./components/Nosotros";
import { NuestrosAliados } from "./components/NuestroAliados";
import { Asesoria } from "./components/Asesoria";

export default function HomePage() {
  return (
    <>
      <FirstBlock />
      <Counters />
      <Nosotros />
      <p>Servicios</p>
      <p>Nuestros Rubros</p>
      <NuestrosAliados />
      <Asesoria />
    </>
  );
}
