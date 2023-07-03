import { Icons } from "./icons";
import MobileMenu from "./mobile-menu";

export default function Navbar() {
  return (
    <nav className="app__navbar-blur fixed z-10 flex w-full items-center justify-between border border-l-0 border-r-0 border-solid border-[rgba(255,255,255,0.18)] px-8 py-4">
      <div className="flex items-center justify-start">
        {/* Use personal logo */}
        <Icons.logo className="h-8 w-[90px] text-foreground 3xl:h-10 3xl:w-[180px]" />
      </div>
      <ul className="hidden flex-1 list-none items-center justify-center md:flex">
        {["home", "about", "projects", "skills", "contact"].map((item) => (
          <li
            key={`link-${item}`}
            className="group mx-4 my-0 flex cursor-pointer flex-col items-center justify-center text-left text-[0.8rem] leading-6 text-foreground 3xl:text-[1.75rem]"
          >
            <div className="mb-[5px] h-[5px] w-[5px] rounded-[50%] bg-transparent group-hover:bg-foreground" />
            <a
              className="font-medium uppercase text-foreground no-underline transition-all duration-300 ease-in-out group-hover:text-blue-500"
              href={`#${item}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <MobileMenu />
    </nav>
  );
}
