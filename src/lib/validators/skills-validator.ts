import { z } from "zod";

const skillsSchema = z.object({
  name: z.string(),
  title: z.string(),
  type: z.literal("document"),
  fields: z.array(
    z.object({
      name: z.string(),
      title: z.string(),
      type: z.union([z.literal("string"), z.literal("image")]),
      options: z.optional(
        z.object({
          hotspot: z.optional(z.boolean()),
        })
      ),
    })
  ),
});

export type Skills = z.infer<typeof skillsSchema>;
