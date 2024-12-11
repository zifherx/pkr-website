import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";

import NextTopLoader from "nextjs-toploader";

import { Toaster } from "@/components/ui/toaster";

import { ScrollToTop } from "@/components/Shared/ScrollToTop";
import { ThemeProvider } from "@/components/Shared/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "PKR Tributarios",
  },
  description:
    "En PKR Tributarios, ofrecemos servicios contables y tributarios de alta calidad en Perú, adaptados a las necesidades de tu empresa. Nuestro compromiso es proporcionar soluciones innovadoras que optimicen tu carga tributaria y garanticen el cumplimiento normativo. Con un enfoque centrado en el cliente y un equipo altamente capacitado, buscamos ser el estudio contable de referencia, contribuyendo al crecimiento sostenible y éxito financiero de nuestros clientes.",
  creator: "Ziphonex Tech",
  generator: "Clean Native Code",
  applicationName: "PKR Tributarios",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  alternates: {
    canonical: "https://www.pkr.com.pe",
    languages: {
      "es-PE": "/es-PE",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            color="#21476E"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #21476E,0 0 5px #21476E"
          />
          {children}
          <ScrollToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
