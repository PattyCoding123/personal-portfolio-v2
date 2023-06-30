import { client } from "@/lib/sanityClient";
import { skillsSchema } from "@/lib/validators/skills-validator";
import { experiencesSchema } from "@/lib/validators/experiences-validator";

import { z } from "zod";

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
}
