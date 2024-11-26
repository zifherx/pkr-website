import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ToogleTheme } from "@/components/Shared/ToogleTheme/ToogleTheme";
import { NavbarItem } from "../NavbarItem";

import { headerData } from "@/data";
import { tNavbar } from "@/types";

const animationNavbar = {
  initial: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 100,
      damping: 20,
      type: "spring",
    },
  },
  exit: {
    y: -20,
    opacity: 0,
  },
};

export function Navbar(props: tNavbar) {
  const { openMobileMenu } = props;
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight - 600) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isScrolling ? (
        <motion.div
          key={1}
          variants={animationNavbar}
          initial="initial"
          animate="animate"
          exit="exit"
          className="ml-auto mr-auto md:fixed z-[9999] mt-auto left-0 right-0 px-6 py-3 w-fit h-max text-white bg-bluePKR rounded-3xl backdrop-blur bottom-14"
        >
          <div className="items-center hidden gap-7 md:flex md:justify-center">
            {headerData.map((item) => (
              <NavbarItem key={item.id} isMenuHold={true} items={item} />
            ))}
            <ToogleTheme />
          </div>
        </motion.div>
      ) : (
        <div
          className={`${
            openMobileMenu
              ? "absolute z-[1] left-0 top-20 bg-white r-0 w-full px-4 py-4"
              : "hidden"
          } text-2xl gap-5 md:flex`}
        >
          {headerData.map((item) => (
            <NavbarItem key={item.id} isMenuHold={false} items={item} />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
