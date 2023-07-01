"use client";

import { motion } from "framer-motion";

interface AboutCardProps {
  imageUrl: string;
  title: string;
  description: string;
}
export default function AboutCard({
  imageUrl,
  title,
  description,
}: AboutCardProps) {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, type: "tween" }}
      className="3xl:w-[370px] 3xl:my-8 3xl:mx-16 m-8 flex w-[250px] flex-col items-start"
    >
      <img
        className="3xl:h-20 h-[170px] w-full rounded-2xl object-cover"
        src={imageUrl}
        alt={title}
      />
      <h2 className="3xl:text-[2rem] xs:text-[0.9rem] mt-5 text-left text-[1.25rem] font-extrabold text-foreground">
        {title}
      </h2>
      <p className="3xl:text-[1.75rem] mt-[10px] text-left text-[1.25rem] leading-normal text-foreground/80">
        {description}
      </p>
    </motion.div>
  );
}
