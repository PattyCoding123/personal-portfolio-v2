"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { type Projects } from "@/lib/validators/projects-validator";
import ProjectCard from "./project-card";

interface ProjectsFilterProps {
  projects: Projects;
}

export default function ProjectsFilter({ projects }: ProjectsFilterProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [animateCard, setAnimateCard] = useState<{
    y: number;
    opacity: number;
  }>({ y: 0, opacity: 1 });

  const filteredProjects = projects?.filter((project) =>
    project.tags.includes({ tag: activeFilter })
  );

  // When a filter tab is clicked, the handleProjectFilter function
  // will be invoked.
  const handleProjectFilter = (tag: string) => {
    // Set activeFilter state to whatever filter item was clicked.
    setActiveFilter(tag);

    // Retrigger shuffle animation of the cards when a new filter
    // is picked. This will cause the cards to disappear in the air.
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      // Reset animation to appearing into view while becoming fully
      // visible.
      setAnimateCard({ y: 0, opacity: 1 });
    }, 500);
  };

  return (
    <>
      <div className="app__project-filter">
        {["UI/UX", "Web App", "Mobile App", "All"].map((tag, index) => (
          <div
            key={index}
            onClick={() => handleProjectFilter(tag)}
            className={`app__project-filter-item app__flex p-text ${
              activeFilter === tag ? "item-active" : ""
            }`}
          >
            {tag}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__project-portfolio"
      >
        {filteredProjects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </motion.div>
    </>
  );
}
