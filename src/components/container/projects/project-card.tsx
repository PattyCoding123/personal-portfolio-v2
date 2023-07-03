"use client";

import { type Projects } from "@/lib/validators/projects-validator";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { urlFor } from "@/lib/sanityClient";
import { Icons } from "@/components/icons";

interface ProjectCard {
  project: Projects[number];
}
export default function ProjectCard({ project }: ProjectCard) {
  return (
    <Card className="text-card-foreground-foreground m-8 flex w-[270px] cursor-pointer flex-col items-center justify-center rounded-[0.5rem] bg-card p-4 transition-all duration-300 hover:shadow-2xl dark:hover:scale-105">
      <CardContent className="p-0">
        <div className="relative flex h-[230px] w-full items-center justify-center 3xl:h-[350px]">
          <img
            src={urlFor(project.imgUrl).url()}
            alt={project.title}
            className="h-full w-full rounded-[0.5rem] object-cover"
          />

          <motion.div
            whileHover={{ opacity: [0, 1] }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              staggerChildren: 0.5,
            }}
            className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center rounded-[0.5rem] bg-[rgba(0,0,0,0.5)] opacity-0"
          >
            {project.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noreferrer noopener"
              >
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="m-4 flex h-14 w-14 cursor-pointer items-center justify-center rounded-[50%] bg-[rgba(0,0,0,0.5)] font-extrabold text-slate-100 transition-all"
                >
                  <Icons.eye className="h-1/2 w-1/2 text-slate-100" />
                </motion.div>
              </a>
            )}
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noreferrer noopener"
              >
                {/* 
                    The following motion.div will animate the anchor tag icon.
                    While hovered, the icon will become smaller. While in view,
                    they will increase in size.
                  */}
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="m-4 flex h-14 w-14 cursor-pointer items-center justify-center rounded-[50%] bg-[rgba(0,0,0,0.5)] font-extrabold text-slate-100 transition-all"
                >
                  <Icons.github className="h-1/2 w-1/2 text-slate-100" />
                </motion.div>
              </a>
            )}
          </motion.div>
        </div>
      </CardContent>
      <CardHeader className="relative flex w-full flex-col items-center justify-center p-1">
        <CardTitle className="mt-4 text-left text-[1rem] font-extrabold leading-6 text-foreground 3xl:mt-12 3xl:text-[2rem] xs:text-[0.9rem]">
          {project.title}
        </CardTitle>
        <CardDescription className="text-left text-[1rem] leading-6 text-foreground/80 3xl:text-[1.75rem]">
          {project.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
