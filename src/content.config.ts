import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const caseStudies = defineCollection({
  loader: glob({ base: './src/content/case-studies', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      tagline: z.string(),
      category: z.enum(['Web Design', 'Social Media', 'SEO / GEO', 'Automation']),
      services: z.array(z.string()),
      stats: z.array(
        z.object({
          label: z.string(),
          value: z.string(),
        })
      ),
      heroImage: z.optional(image()),
      pubDate: z.coerce.date(),
      featured: z.boolean().default(false),
      testimonial: z
        .object({
          quote: z.string(),
          author: z.string(),
          role: z.string(),
        })
        .optional(),
      timeline: z.string().optional(),
      budget: z.string().optional(),
      ongoing: z.string().optional(),
    }),
});

export const collections = { caseStudies };
