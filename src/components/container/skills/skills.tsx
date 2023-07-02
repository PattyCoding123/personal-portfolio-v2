import { z } from "zod";

import { client } from "@/lib/sanityClient";
import { skillsSchema } from "@/lib/validators/skills-validator";
import { experiencesSchema } from "@/lib/validators/experiences-validator";
import ContainerWrapper from "../../wrapper/container-wrapper";
import MotionWrapper from "../../wrapper/motion-wrapper";
import SkillsList from "./skills-list";
import ExperiencesList from "./exp-list";

const getSkills = async () => {
  try {
    const skillsQuery = '*[_type == "skills"]';
    const experiencesQuery = '*[_type == "experiences"]';

    const [skillsData, experiencesData] = await Promise.all([
      client
        .fetch(skillsQuery)
        .then((skillsRes) => skillsSchema.parse(skillsRes)),
      client
        .fetch(experiencesQuery)
        .then((experiencesRes) => experiencesSchema.parse(experiencesRes)),
    ]);

    experiencesData.sort((a, b) => (a.year < b.year ? 1 : -1));

    return { skills: skillsData, experiences: experiencesData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error("Invalid skills or experiences data");
    }
  }
};

export default async function Skills() {
  const data = await getSkills();
  return (
    <ContainerWrapper id="skills">
      <MotionWrapper className="w-full flex-1 flex-col">
        <h2 className="text-center text-[2.75rem] font-extrabold text-foreground 3xl:text-[4rem] xs:text-[2rem]">
          {" "}
          <span className="text-blue-500">Skills</span> and{" "}
          <span className="text-blue-500">Experiences</span>
          <div className="mt-12 flex w-full flex-col lg:w-4/5 lg:flex-row">
            <SkillsList skills={data?.skills} />
            <ExperiencesList experiences={data?.experiences} />
          </div>
        </h2>
      </MotionWrapper>
    </ContainerWrapper>
  );
}
