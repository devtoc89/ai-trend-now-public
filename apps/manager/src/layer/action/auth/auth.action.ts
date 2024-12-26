"use server";

import type { AuthenticationResultType } from "@aws-sdk/client-cognito-identity-provider";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import { ACCESS_TOKEN_KEY, ID_TOKEN_KEY, REFRESH_TOKEN_KEY } from "#constants/token.constant";
import * as authService from "#layer/service/auth/auth.service";

const requiredForm = {
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
};

const SignupFormSchema = z.object({
  ...requiredForm,
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }).trim(),
});

const SignupConfirmFormSchema = z.object({
  ...requiredForm,
  verifyCode: z.string().min(2, { message: "verify code must be 6 characters." }).trim(),
});

const LoginFormSchema = z.object({ ...requiredForm });

export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export async function signup(
  _state: FormState,
  formData: FormData,
): Promise<{
  success: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
    global?: string[];
  };
}> {
  // parse and validate
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, name, password } = validatedFields.data;

  // do signup
  const res = await authService.signup(email, name, password);

  // response
  if (!res.success) {
    return {
      success: false,
      errors: {
        global: [res.error],
      },
    };
  }

  if (res.data.UserConfirmed) {
    redirect("/login");
  } else {
    redirect("/signup/confirm");
  }
}

export async function confirmSignup(
  _state: FormState,
  formData: FormData,
): Promise<{
  success: boolean;
  message?: string;
  errors?: {
    verifyCode?: string[];
    email?: string[];
    password?: string[];
    global?: string[];
  };
}> {
  const validatedFields = SignupConfirmFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    verifyCode: formData.get("verifyCode"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password, verifyCode } = validatedFields.data;

  const res = await authService.confirmSignup(email, password, verifyCode);

  if (!res.success) {
    return {
      success: false,
      errors: {
        global: [res.error],
      },
    };
  }
  await login(_state, formData);

  redirect("/");
}

export async function login(
  _state: FormState,
  formData: FormData,
): Promise<{
  errors?: {
    email?: string[];
    password?: string[];
    global?: string[];
  };
}> {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { email, password } = validatedFields.data;

  const loginRes = await authService.signin(email, password);
  if (!loginRes.success) {
    return {
      errors: {
        global: [loginRes.error],
      },
    };
  }

  if (!loginRes.success || !loginRes.data.AuthenticationResult) {
    return {
      errors: {
        global: ["can't login."],
      },
    };
  }

  const res = loginRes.data.AuthenticationResult;

  if (!authService.isValidAuth(res)) {
    return {
      errors: {
        global: ["can't login."],
      },
    };
  }

  await storeUserSession(res);
  redirect("/");
}

async function storeUserSession(
  userSession: Required<Pick<AuthenticationResultType, "AccessToken" | "RefreshToken" | "ExpiresIn" | "IdToken">>,
) {
  await authService.storeUserSession(userSession);
  // TODO: cognito 이외의 로그인 이력을 남길 필요가 있으면, DB에 쌓기
  await setCookieForAuthByUserSession(userSession);
}

export async function checkUserHasAuthOrRenew() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(ACCESS_TOKEN_KEY);

  if (!accessToken || !accessToken?.value) {
    return false;
  }
  const storedUserSessionString = await authService.getUserSession(accessToken.value);
  if (!storedUserSessionString) {
    return false;
  }
  const storedUserSession = JSON.parse(storedUserSessionString) as {
    renewTime: string;
    [REFRESH_TOKEN_KEY]: string;
  };

  if (new Date() >= new Date(storedUserSession.renewTime)) {
    const refreshTokenUserHas = cookieStore.get(REFRESH_TOKEN_KEY)?.value;
    if (refreshTokenUserHas !== storedUserSession[REFRESH_TOKEN_KEY]) {
      return false;
    }
    const newUserSessionRes = await authService.refresh(refreshTokenUserHas);
    if (!newUserSessionRes.success || !newUserSessionRes.data.AuthenticationResult) return false;

    const res = newUserSessionRes.data.AuthenticationResult;
    if (!authService.isValidAuth(res)) return false;

    await storeUserSession(res);
  }
  return true;
}

export async function doAuthInAction() {
  const res = await checkUserHasAuthOrRenew();
  if (!res) redirect("/login");
}

async function setCookieForAuthByUserSession(
  userSession: Required<Pick<AuthenticationResultType, "AccessToken" | "RefreshToken" | "ExpiresIn" | "IdToken">>,
) {
  const expires = new Date(new Date().getTime() + userSession.ExpiresIn * 1000);

  const cookieStore = await cookies();

  const setAuthCookie = (key: string, value: string) => {
    cookieStore.set(key, value, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires,
      sameSite: "strict",
      path: "/",
    });
  };

  setAuthCookie(ACCESS_TOKEN_KEY, userSession.AccessToken);
  setAuthCookie(REFRESH_TOKEN_KEY, userSession.RefreshToken);
  setAuthCookie(ID_TOKEN_KEY, userSession.IdToken);
}
