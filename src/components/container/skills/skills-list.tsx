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
    <motion.div className="app__skills-list">
      {skills?.map((skill) => (
        <motion.div
          key={skill.name}
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-item app__flex"
        >
          <div className={cn("app__flex", `${skill.bgColor}`)}>
            <img src={urlFor(skill.icon).url()} alt={skill.name} />
            <p className="p-text">{skill.name}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
