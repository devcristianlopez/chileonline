import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const parches = defineCollection({
  loader: glob({ pattern: '**/[!F]*.md', base: './patchs' }),
  schema: z.object({
    version: z.string(),
    season: z.number(),
    week: z.number(),
    title: z.string(),
    date: z.date(),
    subtitle: z.string(),
    status: z.enum(['LIVE', 'PENDIENTE', 'DEPRECATED']),
  }),
});

export const collections = { parches };
