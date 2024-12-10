import Image from "next/image";

export function LogoFooter() {
  return (
    <div className="max-w-md space-y-4">
      <Image
        src="/images/logo-2.jpeg"
        alt="PKR Logos"
        width={150}
        height={60}
        className="dark:invert mx-auto md:mx-0 rounded-lg"
      />
      <p className="text-muted-foreground text-sm leading-relaxed">
        PKR Tributarios es una firma líder en consultoría contable y tributaria,
        comprometida con la excelencia y el crecimiento de nuestros clientes
        desde 2015.
      </p>
    </div>
  );
}
