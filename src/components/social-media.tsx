import { Icons } from "./icons";
export default function SocialMedia() {
  return (
    <div className="hidden flex-col items-center justify-end p-4 sm:flex">
      <a
        href="https://www.linkedin.com/in/patrick-ducusin-879b25208/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="group mx-0 my-1 flex h-10 w-10 items-center justify-center rounded-full border border-gray-400/80 bg-background transition-all duration-300 ease-in-out hover:bg-foreground 3xl:my-2 3xl:h-[70px] 3xl:w-[70px]">
          <Icons.linkedin className="h-5 w-5 group-hover:text-background 3xl:h-[30px] 3xl:w-[30px]" />
        </div>
      </a>

      <a
        href="https://github.com/PattyCoding123"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="group mx-0 my-1 flex h-10 w-10 items-center justify-center rounded-full border border-gray-400/80 bg-background transition-all duration-300 ease-in-out hover:bg-foreground">
          <Icons.github className="h-5 w-5 group-hover:text-background 3xl:h-[30px] 3xl:w-[30px]" />
        </div>
      </a>
    </div>
  );
}
