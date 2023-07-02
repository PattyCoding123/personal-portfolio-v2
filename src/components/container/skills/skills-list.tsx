"use client";

import { motion } from "framer-motion";

import { type Skills } from "@/lib/validators/skills-validator";
import { cn } from "@/lib/utils";
import { urlFor } from "@/lib/sanityClient";

interface SkillsListProps {
  skills?: Skills;
}
export default function SkillsList({ skills }: SkillsListProps) {
  return (
    <motion.div className="mr-0 flex flex-1 flex-wrap items-center justify-center lg:mr-20 lg:items-start lg:justify-start">
      {skills?.map((skill) => (
        <motion.div
          key={skill.name}
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="m-4 flex flex-col items-center justify-center text-center transition-all duration-300 ease-in-out 3xl:mx-8 3xl:my-4"
        >
          <div
            className={cn(
              "flex h-24 w-24 items-center justify-center rounded-full duration-300 hover:shadow-2xl dark:hover:scale-110 3xl:h-36 3xl:w-36 xs:h-16 xs:w-16",
              `bg-[${skill.bgColor}]`
            )}
          >
            <img
              src={urlFor(skill.icon).url()}
              alt={skill.name}
              className="h-1/2 w-1/2"
            />
          </div>
          <p className="mt-2 text-left text-[0.8rem] font-medium leading-6 text-foreground/80 3xl:mt-4 3xl:text-[1.75rem]">
            {skill.name}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
