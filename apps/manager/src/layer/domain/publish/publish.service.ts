"use server";

import { serviceWrapper } from "#lib/helper/service/service.helper.ts";
import { getPrismaClient } from "#lib/instance/prisma/prisma.instance.ts";
import { createId } from "@paralleldrive/cuid2";
import { getCurrentTimeISOString } from "@repo/util/date/date.util.ts";

export async function publishAiPost({ aiPostId }: { aiPostId: string }) {
  const prisma = getPrismaClient();
  const id = createId();
  const createdAt = getCurrentTimeISOString();

  return await serviceWrapper(publishAiPost.name, async () => {
    const aiPost = await prisma.aiPost.findUnique({
      where: {
        id: aiPostId,
      },
      select: {
        id: true,
        title: true,
        content: true,
        insights: true,
        createdAt: true,
      },
    });

    const aiPostRelation = await prisma.originalPostAndAiPostRelation.findMany({
      where: {
        aiPostId,
      },
      select: {
        originalPostBase: {
          select: {
            originalPostSource: {
              select: {
                url: true,
              },
            },
          },
        },
      },
    });

    if (!aiPost) throw new Error("AI Post not found");

    const res = await prisma.postBase.create({
      data: {
        id,
        createdAt,
        aiPostId,
        postDetail: {
          create: {
            id: createId(),
            title: aiPost.title,
            content: aiPost.content,
            createdAt,
          },
        },
        postMeta: {
          create: {
            id: createId(),
            metadata: {
              insights: JSON.parse(aiPost.insights),
              references: aiPostRelation.map((v) => v.originalPostBase.originalPostSource?.url ?? ""),
            },
            createdAt,
          },
        },
      },
    });
    return { id: res.id };
  });
}
