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
    <Card className="app-project-item app__flex">
      <CardContent>
        <div className="app__project-img app__flex">
          <img src={urlFor(project.imgUrl).url()} alt={project.title} />

          <motion.div
            whileHover={{ opacity: [0, 1] }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              staggerChildren: 0.5,
            }}
            className="app__project-hover app__flex"
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
                  className="app__flex"
                >
                  <Icons.eye />
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
                  className="app__flex"
                >
                  <Icons.github />
                </motion.div>
              </a>
            )}
          </motion.div>
        </div>
      </CardContent>
      <CardHeader className="app__project-content app__flex">
        <CardTitle className="bold-text">{project.title}</CardTitle>
        <CardDescription className="p-text">
          {project.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
