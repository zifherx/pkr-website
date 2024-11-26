import { ReactNode } from "react";

import { MotionTransition } from "@/components/Shared/MotionTransition";
import { Header } from "@/components/Shared/Header";
import { Footer } from "@/components/Shared/Footer";

export default function routeHomeLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <MotionTransition />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
