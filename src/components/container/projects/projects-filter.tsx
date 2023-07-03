"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { type Projects } from "@/lib/validators/projects-validator";
import ProjectCard from "./project-card";
import { cn } from "@/lib/utils";

interface ProjectsFilterProps {
  projects?: Projects;
}

export default function ProjectsFilter({ projects }: ProjectsFilterProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [animateCard, setAnimateCard] = useState<{
    y: number;
    opacity: number;
  }>({ y: 0, opacity: 1 });

  const [filteredProjects, setFilteredProjects] = useState<
    Projects | undefined
  >(projects);

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

      // If the user chooses the "All" tag, then set the
      // filterProject state to be just all the Projects.
      if (tag === "All") {
        setFilteredProjects(projects);
      } else {
        /*
          If the tag is specific, then call the filter method
          on the Projects array and set it to the filterProject state.
          A Project item passes so long as it contains the active
          filter in its tag array.
        */

        setFilteredProjects(
          projects?.filter((project) => project.tags.includes(tag))
        );
      }
    }, 500);
  };

  return (
    <>
      <div className="mx-0 mb-8 mt-16 flex flex-wrap items-center justify-start">
        {["UI/UX", "Web App", "Mobile App", "All"].map((tag, index) => (
          <div
            key={index}
            onClick={() => handleProjectFilter(tag)}
            className={cn(
              "m-2 flex cursor-pointer items-center justify-center rounded-[0.5rem] bg-primary px-4 py-2 text-left text-[0.8rem] font-extrabold leading-6 text-primary-foreground transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground 3xl:rounded-md 3xl:px-8 3xl:py-4 3xl:text-[1.75rem]",
              { "bg-blue-500 text-slate-200": activeFilter === tag }
            )}
          >
            {tag}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex flex-wrap items-center justify-center 3xl:w-[470px] 3xl:rounded-[0.75rem] 3xl:p-5 xs:m-4 xs:w-full"
      >
        {filteredProjects?.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </motion.div>
    </>
  );
}
