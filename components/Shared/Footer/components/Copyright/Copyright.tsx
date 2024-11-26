import Link from "next/link";

export function Copyright() {
  const actualYear = new Date().getFullYear();

  return (
    <div className="flex justify-between text-xs pb-3 mt-2 md:mx-0 mx-2">
      <div>© {actualYear}. Todos los derechos reservados</div>
      <div className="text-right">
        Diseñado por&nbsp;
        <Link href="https://ziphonex.com" className="uppercase font-bold">
          Ziphonex
        </Link>
      </div>
    </div>
  );
}
