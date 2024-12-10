import { AnimatePresence } from "framer-motion";

import { NavbarItem } from "../NavbarItem";

import { headerData } from "@/data";
import { tNavbar } from "@/types";

export function Navbar(props: tNavbar) {
  const { openMobileMenu } = props;

  return (
    <AnimatePresence>
      <div
        className={`${
          openMobileMenu
            ? "absolute z-[1] left-0 top-20 bg-white r-0 w-full px-4 py-4"
            : "hidden"
        } text-xl gap-5 md:flex`}
      >
        {headerData.map((item) => (
          <NavbarItem key={item.id} isMenuHold={false} items={item} />
        ))}
      </div>
    </AnimatePresence>
  );
}
