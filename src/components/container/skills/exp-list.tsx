"use client";

import { Tooltip } from "react-tooltip";

import { type Experiences } from "@/lib/validators/experiences-validator";
import { motion } from "framer-motion";
import { Fragment } from "react";

interface ExperiencesListProps {
  experiences?: Experiences;
}

export default function ExperiencesList({ experiences }: ExperiencesListProps) {
  return (
    <div className="mt-2 flex flex-1 flex-col items-start justify-start lg:mt-0">
      {experiences?.map((experience) => (
        <motion.div
          key={experience.year}
          className="mx-0 my-4 flex w-full items-start justify-start"
        >
          <div className="mr-12 xs:mr-1">
            <p className="text-left text-[1rem] font-extrabold text-foreground 3xl:text-[2rem] xs:text-[0.9rem]">
              {experience.year}
            </p>
          </div>
          <motion.div className="flex-1">
            {experience.works.map((work, index) => (
              <Fragment key={index}>
                <motion.div
                  key={work.name}
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="mb-4 flex cursor-pointer flex-col items-start justify-start"
                  data-tooltip-id={work.name}
                  data-tooltip-content={work.desc}
                >
                  <h4 className="text-left text-[1rem] font-medium text-foreground 3xl:text-[2rem] xs:text-[0.9rem]">
                    {work.name}
                  </h4>
                  <p className="mt-[5px] text-left text-[0.8rem] font-normal leading-6 text-foreground/80 3xl:text-[1.75rem]">
                    {work.company}
                  </p>
                </motion.div>
                <Tooltip
                  id={work.name}
                  className="!3xl:max-w-[500px] !3xl:text-sm !max-w-xs !rounded-sm !bg-slate-200 !p-4 !text-center !text-xs !text-slate-800 !opacity-100 !shadow-lg"
                />
              </Fragment>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
