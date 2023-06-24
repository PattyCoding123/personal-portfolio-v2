import { cn } from "@/lib/utils";

interface NavigationDotsProps {
  active: string;
}

export default function NavigationDots({ active }: NavigationDotsProps) {
  const sections = ["home", "about", "projects", "skills", "contact"];

  return (
    <div className="app__navigation">
      {sections.map((section, index) => (
        <a
          key={`${section} ${index}`}
          href={`#${section}`}
          className={cn("app__navigation-dot", {
            "bg-blue-500": active === section,
          })}
        />
      ))}
    </div>
  );
}
