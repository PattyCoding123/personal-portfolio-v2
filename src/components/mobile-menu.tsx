"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Icons } from "./icons";

export default function MobileMenu() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="relative flex h-9 w-9 items-center justify-center rounded-[50%] bg-background md:hidden">
      <Icons.hamburger
        className="h-[70%] w-[70%] text-foreground"
        onClick={() => setIsVisible(true)}
      />
      {isVisible && (
        <motion.div
          className="fixed bottom-0 right-0 top-0 z-[5] flex h-screen w-4/5 flex-col items-end justify-end bg-background bg-opacity-100 shadow-md md:hidden"
          whileInView={{ x: [200, 0] }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <Icons.close
            className="mx-4 my-2 h-9 w-9 text-foreground"
            onClick={() => setIsVisible(false)}
          />
          <ul className="m-0 flex h-full w-full list-none flex-col items-start justify-start p-0">
            {["home", "about", "projects", "skills", "contact"].map((item) => (
              <li key={item} className="m-4">
                <a
                  className="text-none 0.3s text-[1rem] font-medium uppercase text-foreground/80 transition-all ease-in-out hover:text-blue-500"
                  href={`#${item}`}
                  onClick={() => setIsVisible(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}
