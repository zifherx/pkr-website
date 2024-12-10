import Link from "next/link";

export function Copyright() {
  const actualYear = new Date().getFullYear();

  return (
    <div className="flex flex-col gap-0 justify-center items-center text-xs pb-3 mt-2 md:mx-0 mx-2">
      <div>
        <strong>PKR Tributarios</strong> © {actualYear}. Todos los derechos
        reservados
      </div>
      <div>
        Diseñado por&nbsp;
        <Link href="https://ziphonex.com" className="uppercase font-bold">
          Ziphonex
        </Link>
      </div>
    </div>
  );
}
