"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ToogleTheme } from "../ToogleTheme/ToogleTheme";
import { Navbar } from "./components/Navbar";
import { MenuResponsive } from "./components/MenuResponsive";

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <header className="w-full md:px-8 md:py-5 mt-2 md:mt-0 border-4 border-orange-500">
      <div className="flex items-center justify-between px-5 md:px-0">
        <Link href="/">
          <Image
            src="/images/logo-1.jpeg"
            width={100}
            height={100}
            alt="Logo PKR"
            className="w-auto h-16 rounded-sm"
          />
        </Link>

        <MenuResponsive />

        <Navbar openMobileMenu={openMobileMenu} />

        <ToogleTheme />
      </div>
    </header>
  );
}
