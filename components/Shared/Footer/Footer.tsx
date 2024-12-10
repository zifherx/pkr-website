import { Copyright } from "./components/Copyright";
import { LogoFooter } from "./components/LogoFooter";
import { SubmenuFooter } from "./components/SubmenuFooter";

export function Footer() {
  return (
    <footer className="p-2 md:py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-5 md:gap-2">
        <LogoFooter />
        <SubmenuFooter />
      </div>
      <div className="bg-black h-px my-5">&nbsp;</div>
      <Copyright />
    </footer>
  );
}
