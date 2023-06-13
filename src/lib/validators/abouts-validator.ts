import { z } from "zod";

const aboutsSchema = z.object({
  _id: z.string(),
  _type: z.literal("abouts"),
  title: z.string(),
  description: z.string(),
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
});

export type Abouts = z.infer<typeof aboutsSchema>;
