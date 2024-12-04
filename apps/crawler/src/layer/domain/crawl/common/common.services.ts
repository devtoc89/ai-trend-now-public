import type { PrismaClient } from "@prisma/client/manager/index.js";
import { getMissingItems } from "@repo/util/collection/collection.util";

export async function getUniqueItems<T extends { id: string }>(prisma: PrismaClient, list: T[]): Promise<T[]> {
  const entries = list.sort((a, b) => b.id.localeCompare(a.id)) || [];
  const existingRecords = await prisma.originalPostBase.findMany({
    where: {
      id: {
        in: entries.map((v) => v.id),
      },
    },
    select: {
      id: true,
    },
    orderBy: {
      id: "desc",
    },
  });

  return getMissingItems(entries, existingRecords);
}
