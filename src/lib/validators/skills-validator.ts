import { z } from "zod";

export const skillsSchema = z.array(
  z.object({
    _id: z.string(),
    _updatedAt: z.string().optional(),
    _createdAt: z.string().optional(),
    _rev: z.string().optional(),
    _type: z.literal("skills"),
    name: z.string(),
    bgColor: z.string(),
    icon: z.object({
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
  })
);

export type Skills = z.infer<typeof skillsSchema>;
