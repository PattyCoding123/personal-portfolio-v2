import { cn } from "@/lib/utils";

interface NavigationDotsProps {
  active: string;
}

export default function NavigationDots({ active }: NavigationDotsProps) {
  const sections = ["home", "about", "projects", "skills", "contact"];

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {sections.map((section, index) => (
        <a
          key={`${section} ${index}`}
          href={`#${section}`}
          className={cn(
            "m-2 h-[10px] w-[10px] rounded-[50%] bg-foreground transition-colors duration-200 ease-in-out hover:bg-blue-500 3xl:h-5 3xl:w-5",
            {
              "bg-blue-500": active === section,
            }
          )}
        />
      ))}
    </div>
  );
}
