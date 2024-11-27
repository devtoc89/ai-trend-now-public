"use server";

import { serviceWrapper } from "#lib/helper/service/service.helper.ts";
import { getPrismaClient } from "#lib/instance/prisma/prisma.instance.ts";
import { getUserPrismaClient } from "#lib/instance/prisma/user.prisma.instance.ts";
import { createId } from "@paralleldrive/cuid2";
import type { Prisma } from "@repo/prisma-manager";
import { getCurrentTimeISOString } from "@repo/util/date/date.util.ts";

export async function publishAiPost({ aiPostId }: { aiPostId: string }) {
  const managerPrisma = getPrismaClient();
  const id = createId();
  const createdAt = getCurrentTimeISOString();

  return await serviceWrapper(publishAiPost.name, async () => {
    const aiPost = await managerPrisma.aiPost.findUnique({
      where: {
        id: aiPostId,
      },
      select: {
        id: true,
        title: true,
        content: true,
        insights: true,
        summary: true,
        createdAt: true,
        metadata: true,
      },
    });

    const aiPostRelation = await managerPrisma.originalPostAndAiPostRelation.findMany({
      where: {
        aiPostId,
      },
      select: {
        originalPostBase: {
          select: {
            originalPostMeta: {
              select: {
                source: true,
                category: true,
              },
            },
            originalPostSource: {
              select: {
                title: true,
                url: true,
              },
            },
          },
        },
      },
    });

    if (!aiPost) throw new Error("AI Post not found");
    const metadata = aiPost.metadata as Prisma.JsonObject;

    const userPrismaClient = getUserPrismaClient();
    // TODO: AI Image 생성
    const res = await userPrismaClient.postBase.create({
      data: {
        id,
        createdAt,
        aiPostId,
        postDetail: {
          create: {
            id: createId(),
            title: aiPost.title,
            content: aiPost.content,
            summary: aiPost.summary,
            createdAt,
          },
        },
        postMeta: {
          create: {
            id: createId(),
            metadata: {
              insights: JSON.parse(aiPost.insights),
              keywords: (metadata.keywords as Array<string>) ?? [],
              imageUrl: "", // 뭔가 이미지 url
              references: aiPostRelation.map((v) => ({
                title: v.originalPostBase.originalPostSource?.title ?? "",
                source: v.originalPostBase.originalPostMeta?.source ?? "",
                category: v.originalPostBase.originalPostMeta?.category ?? "",
                url: v.originalPostBase.originalPostSource?.url ?? "",
              })),
            },
            createdAt,
          },
        },
      },
    });

    await managerPrisma.aiPost.update({
      where: {
        id: aiPostId,
      },
      data: {
        updatedAt: getCurrentTimeISOString(),
        isPublished: true,
      },
    });
    return { id: res.id };
  });
}
