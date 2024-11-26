import { Copyright } from "./components/Copyright";

export function Footer() {
  return (
    <div className="bg-black text-white dark:bg-white dark:text-black px-5 py-2">
      <footer className="px-3 md:px-0 md:max-w-7xl lg:mx-auto lg:justify-start items-center justify-center">
        <p>Redes</p>
        <p>Items</p>
        <div className="bg-slate-100 dark:bg-slate-800 h-px my-2">&nbsp;</div>
        <Copyright />
      </footer>
    </div>
  );
}
