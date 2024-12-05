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
    <header className="w-full py-4">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo-1.jpeg"
            width={200}
            height={250}
            alt="Logo PKR"
            className="w-auto h-20 rounded-sm"
          />
        </Link>

        <MenuResponsive />

        <Navbar openMobileMenu={openMobileMenu} />

        <ToogleTheme />
      </div>
    </header>
  );
}
