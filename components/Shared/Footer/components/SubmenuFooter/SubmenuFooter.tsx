import Link from "next/link";

export function SubmenuFooter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:space-x-10">
      <div>
        <h3 className="font-semibold mb-4 uppercase text-bluePKR">Compañia</h3>
        <nav className="space-y-3">
          <Link
            href="/"
            className="block text-sm text-muted-foreground hover:text-bluePKR transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="/nosotros"
            className="block text-sm text-muted-foreground hover:text-bluePKR transition-colors"
          >
            Nosotros
          </Link>
          <Link
            href="/servicios"
            className="block text-sm text-muted-foreground hover:text-bluePKR transition-colors"
          >
            Servicios
          </Link>
          <Link
            href="/contacto"
            className="block text-sm text-muted-foreground hover:text-bluePKR transition-colors"
          >
            Contacto
          </Link>
        </nav>
      </div>
      <div>
        <h3 className="font-semibold mb-4 uppercase text-bluePKR">Síguenos</h3>
        <nav className="space-y-3 text-sm text-muted-foreground">
          <p>
            <Link
              href="tel:+999999999"
              className="hover:text-bluePKR transition-colors"
            >
              +51-999-999-999
            </Link>
          </p>
          <p>
            <Link
              href="mailto:contacto@pkr.com.pe"
              className=" hover:text-bluePKR transition-colors"
            >
              contacto@pkr.com.pe
            </Link>
          </p>
        </nav>
      </div>
    </div>
  );
}
