interface NavigationDotsProps {
  active: "home" | "about" | "projects" | "skills" | "contact";
}

export default function NavigationDots({ active }: NavigationDotsProps) {
  return <div className="app__navigation">{[]}</div>;
}
