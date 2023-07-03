import { z } from "zod";
export const projectsSchema = z.array(
  z.object({
    _id: z.string(),
    _type: z.literal("projects"),
    _updatedAt: z.string().optional(),
    _createdAt: z.string().optional(),
    _rev: z.string().optional(),
    title: z.string(),
    description: z.string(),
    projectLink: z.string().optional(),
    codeLink: z.string().optional(),
    imgUrl: z.object({
      _type: z.literal("image"),
      asset: z.object({
        _ref: z.string(),
        _type: z.literal("reference"),
      }),
      hotspot: z
        .object({
          x: z.number(),
          y: z.number(),
          height: z.number(),
          width: z.number(),
        })
        .optional(),
    }),
    tags: z.array(z.string()),
  })
);

export type Projects = z.infer<typeof projectsSchema>;
