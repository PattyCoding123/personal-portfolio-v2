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
    <div className="app__skils-exp">
      {experiences?.map((experience) => (
        <motion.div key={experience.year} className="app__skills-exp-item">
          <div className="app__skills-exp-year">
            <p className="bold-text">{experience.year}</p>
          </div>
          <motion.div className="app__skills-exp-works">
            {experience.works.map((work, index) => (
              <Fragment key={index}>
                <motion.div
                  key={work.name}
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-exp-work"
                  data-tooltip-id={work.name}
                  data-tooltip-content={work.desc}
                >
                  <h4 className="bold-text">{work.name}</h4>
                  <p className="p-text">{work.company}</p>
                </motion.div>
                <Tooltip id={work.name} />
              </Fragment>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
