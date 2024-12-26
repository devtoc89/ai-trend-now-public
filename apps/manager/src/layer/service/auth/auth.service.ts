import type { AuthenticationResultType } from "@aws-sdk/client-cognito-identity-provider";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "#constants/token.constant";
import UserRepository from "#layer/repository/user/user.repo";
import * as cognito from "#lib/auth/client/cognito.client";
import { hashPassword, verifyPassword } from "#lib/auth/hash/argon2.hash";
import { serviceWrapper } from "#lib/helper/service/service.helper";
import { getPrismaClient } from "#lib/instance/prisma/manager.prisma.instance";
import { redis } from "#lib/instance/redis/redis.instance";

export async function signup(email: string, name: string, password: string) {
  return await serviceWrapper(signup.name, async () => {
    const prismaManager = getPrismaClient();

    const user = await UserRepository.select.oneForLoginByEmail(prismaManager, email);

    if (user) {
      throw new Error("already exists user.");
    }

    try {
      const res = await cognito.signup(email, password);
      await UserRepository.insert.create(
        prismaManager,
        res.UserSub ?? email,
        email,
        name,
        await hashPassword(password),
        res.UserConfirmed ?? false,
      );
      return res;
    } catch (_e) {
      // TODO: improve handler to error.
      console.log(_e);
      throw new Error("failed to signup user.");
    }
  });
}

export async function confirmSignup(email: string, password: string, confirmCode: string) {
  return await serviceWrapper(confirmSignup.name, async () => {
    const prismaManager = getPrismaClient();

    const user = await UserRepository.select.oneForConfirmedByEmail(prismaManager, email);

    if (!user || user.confirmed || !(await verifyPassword(user.hashedPassword, password))) {
      throw new Error("confirmation code is invalid.");
    }

    try {
      const res = await cognito.confirmSignup(email, confirmCode);
      if (res.Session) {
        await UserRepository.update.confirmed(prismaManager, email);
      }
      return res;
    } catch (_e) {
      // TODO: improve handler to error.
      throw new Error("failed to confirm user signup.");
    }
  });
}

export async function signin(email: string, password: string) {
  return await serviceWrapper(signin.name, async () => {
    const prismaManager = getPrismaClient();

    const user = await UserRepository.select.oneForConfirmedByEmail(prismaManager, email);

    if (!user || !(await verifyPassword(user.hashedPassword, password))) {
      throw new Error("check signup confirmation or email or password.");
    }

    if (!user.confirmed) {
      throw new Error("failed to signin. confirm your email.");
    }

    try {
      return await cognito.signin(email, password);
    } catch (_e) {
      // TODO: improve handler to error.
      throw new Error("failed to signin.");
    }
  });
}

export async function refresh(refreshToken: string) {
  return await serviceWrapper(refresh.name, async () => {
    return await cognito.refresh(refreshToken);
  });
}

export function isValidAuth(
  res: AuthenticationResultType,
): res is Required<Pick<AuthenticationResultType, "AccessToken" | "RefreshToken" | "ExpiresIn" | "IdToken">> {
  if (!res.AccessToken || !res.RefreshToken || !res.ExpiresIn || !res.IdToken) {
    return false;
  }
  return true;
}

export async function storeUserSession(
  userSession: Required<Pick<AuthenticationResultType, "AccessToken" | "ExpiresIn" | "RefreshToken">>,
) {
  await redis.setex(
    `${ACCESS_TOKEN_KEY}_${userSession.AccessToken}`,
    userSession.ExpiresIn * 2, // TODO: refresh 토큰 가능 시간. expireIn *2? 고민중
    JSON.stringify({
      renewTime: String(new Date().getTime() + userSession.ExpiresIn * 1000 - 600000),
      [REFRESH_TOKEN_KEY]: userSession.RefreshToken,
    }),
  );
}

export async function getUserSession(accessToken: string) {
  return await redis.get(`${ACCESS_TOKEN_KEY}_${accessToken}`);
}
