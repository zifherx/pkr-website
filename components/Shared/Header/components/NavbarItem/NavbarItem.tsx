import { tNavbarItem } from "@/types";
import Link from "next/link";

export function NavbarItem({ isMenuHold, items }: tNavbarItem) {
  const { id, icon: Icon, link, name } = items;

  return (
    <>
      {isMenuHold ? (
        <Link
          className="px-3 py-2 transition duration-150 hover:bg-bluePKR/50 rounded-full cursor-pointer"
          key={id}
          href={link}
        >
          <Icon size={25} strokeWidth={2} />
        </Link>
      ) : (
        <Link
          key={id}
          href={link}
          className="block uppercase hover:text-bluePKR hover:border-b-[1px] hover:border-bluePKR"
        >
          {name}
        </Link>
      )}
    </>
  );
}
