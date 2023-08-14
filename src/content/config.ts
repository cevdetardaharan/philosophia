import { defineCollection, z } from 'astro:content';

const philosopher = defineCollection({
  schema: ({ image }) => z.object({
    name: z.string(),
    image: image().refine((img) => img.width >= 320, {
      message: "Cover image must be at least 320 pixels wide!",
    }),
    bio: z.string(),

    nutshell: z.object({
      introduction: z.string(),
      concepts: z.array(z.object({
        title: z.string(),
        description: z.string(),
      })),
      quotes: z.string().array(),
    }),

    life: z.object({
      early_life: z.string(),
      works: z.string().array(),
      later_life: z.string(),
    }),

    ideas: z.array(z.object({
      title: z.string(),
      explanation: z.string(),
      impact: z.string(),
      funfact: z.string(),
    })),

    legacy: z.object({
      overview: z.string(),
      followers: z.string(),
      pop: z.string()
    }),

    criticism: z.object({
      overview: z.string(),
      critiques: z.string(),
      response: z.string(),
    }),

    resources: z.object({
      reading: z.string().array(),
      online: z.string().array(),
      academia: z.string().array()
    }),
  }),
});

export const collections = { philosopher };