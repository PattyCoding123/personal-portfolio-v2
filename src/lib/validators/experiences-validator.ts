import { z } from "zod";

const workExperienceSchema = z.object({
  _id: z.string(),
  _type: z.literal("workExperience"),
  name: z.string(),
  company: z.string(),
  desc: z.string(),
});

type WorkExperience = z.infer<typeof workExperienceSchema>;

const experiencesSchema = z.array(
  z.object({
    _id: z.string(),
    _type: z.literal("experiences"),
    year: z.string(),
    works: z.array(workExperienceSchema),
  })
);

type Experiences = z.infer<typeof experiencesSchema>;

export { workExperienceSchema, experiencesSchema };
export type { WorkExperience, Experiences };
