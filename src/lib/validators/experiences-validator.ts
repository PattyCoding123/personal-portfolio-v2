import { z } from "zod";

const workExperienceSchema = z.object({
  name: z.string(),
  title: z.string(),
  type: z.literal("document"),
  fields: z.array(
    z.object({
      name: z.string(),
      title: z.string(),
      type: z.literal("string"),
    })
  ),
});

type WorkExperience = z.infer<typeof workExperienceSchema>;

const experiencesSchema = z.object({
  name: z.string(),
  title: z.string(),
  type: z.literal("document"),
  fields: z.array(
    z.object({
      name: z.string(),
      title: z.string(),
      type: z.literal("array"),
      of: z.array(workExperienceSchema),
    })
  ),
});

type Experiences = z.infer<typeof experiencesSchema>;

export { workExperienceSchema, experiencesSchema };
export type { WorkExperience, Experiences };
