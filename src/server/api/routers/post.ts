import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  // Get all posts, ordered by the most recent
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.post.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        createdAt: true,
      },
    });
  }),
  
  getById: publicProcedure
    .input(z.object({ 
      id: z.string().transform(id => parseInt(id, 10)) // Convert string to integer
    }))
    .query(async ({ ctx, input }) => {
      return ctx.db.post.findUnique({
        where: { id: input.id },
      });
    }),
 
  // Create a new post 
  create: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1),
        slug: z.string().min(1),
        excerpt: z.string().min(10),
        content: z.string().min(20),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          title: input.title,
          slug: input.slug,
          excerpt: input.excerpt,
          content: input.content,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),
});