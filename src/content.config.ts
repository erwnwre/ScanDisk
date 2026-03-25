import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    section: z.enum(["chronik", "inside", "itw", "freescan"]),
    date: z.coerce.date(),
    author: z.string().default("ScanDisk"),
    cover: z.string(),
    rating: z.number().min(0).max(5).optional(),
    youtubeEmbed: z.string().url().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = { posts };
