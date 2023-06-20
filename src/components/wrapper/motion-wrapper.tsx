"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

/**
 * Component which will wrap the child component in a motion.div
 * that will create an "appearing" animation whenerver the component
 * comes into view.
 */

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function MotionWrapper({
  children,
  className,
}: MotionWrapperProps) {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={cn("flex items-center justify-center", className)}
    >
      {children}
    </motion.div>
  );
}
