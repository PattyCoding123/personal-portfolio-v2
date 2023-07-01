"use client";

import { motion } from "framer-motion";

import { type Skills } from "@/lib/validators/skills-validator";

interface SkillsListProps {
  skills: Skills;
}
export default function SkillsList({ skills }: SkillsListProps) {
  return <motion.div className="app__skills-list"></motion.div>;
}
