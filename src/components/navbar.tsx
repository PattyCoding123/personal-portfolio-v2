"use client";

import { useState } from "react";
import { Icons } from "./icons";
import Link from "next/link";

export default function Navbar() {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar--logo">
        {/* Use personal logo */}
        <Icons.logo />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "projects", "skills", "contact"].map((item) => (
          <li key={`link-${item}`} className="app__flex p-text">
            <div />
            <Link href={`#${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
