import { defineCollection, z } from "astro:content";

export const collections = {
  portfolio: defineCollection({
    schema: z.object({
      title: z.string(),
      category: z.string(),
      date: z.coerce.date(),
      img: z.string(),
      img_alt: z.string().optional(),
      preview: z.string(),
      video: z.string(),
    }),
  }),
};
