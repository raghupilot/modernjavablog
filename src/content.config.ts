import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    track: z.enum(['java', 'enterprise', 'agentic-ai']),
    jdkVersion: z.string().optional(),
    featureStatus: z.enum(['preview', 'incubating', 'stable', 'final']).optional(),
    difficulty: z.enum(['intro', 'intermediate', 'advanced']).default('intermediate'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
