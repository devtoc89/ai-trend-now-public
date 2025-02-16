"use server";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import {} from "#constants/token.constant";
import { checkUserHasAuthOrRenew } from "#layer/action/auth/auth.action";

async function Auth({ children }: { children: ReactNode }) {
  if (!(await checkUserHasAuthOrRenew())) {
    redirect("/login");
  }
  return <>{children}</>;
}

export default Auth;
