import type { Prisma } from "@prisma/client/manager/index.js";
import { getCurrentTimeISOString } from "@repo/util/date/date.util";

class _select {
  public static oneForLoginByEmail(tx: Prisma.TransactionClient, email: string) {
    return tx.user.findFirst({
      where: {
        email,
      },
      select: {
        sub: true,
        hashedPassword: true,
      },
    });
  }
  public static oneForConfirmedByEmail(tx: Prisma.TransactionClient, email: string) {
    return tx.user.findFirst({
      where: {
        email,
      },
      select: {
        confirmed: true,
        hashedPassword: true,
      },
    });
  }
}

class _insert {
  public static create(
    tx: Prisma.TransactionClient,
    sub: string,
    email: string,
    name: string,
    hashedPassword: string,
    confirmed: boolean,
  ) {
    return tx.user.create({
      data: {
        email,
        name,
        sub,
        hashedPassword,
        confirmed,
        createdAt: getCurrentTimeISOString(),
      },
    });
  }
}

class _update {
  public static confirmed(tx: Prisma.TransactionClient, email: string) {
    return tx.user.update({
      where: {
        email,
      },
      data: {
        confirmed: true,
      },
    });
  }
}

class _delete {}

export default class UserRepository {
  public static readonly select = _select;
  public static readonly insert = _insert;
  public static readonly update = _update;
  public static readonly delete = _delete;
}
