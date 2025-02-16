"use client";

import { Button } from "@repo/ui/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@repo/ui/components/ui/card";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { useActionState } from "react";
import { login } from "#layer/action/auth/auth.action";

export default function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <form action={action}>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>
            <b>Sign in</b> Sevice
          </CardTitle>
          <CardDescription>
            Sign in AI Trend Now Manager Service.
            <br />
            <p className="text-xs  underline">Sign up is only available by admin.</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" placeholder="your email" />
              {state?.errors?.email && <p className="text-red-600 text-xs">{state.errors.email}</p>}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" placeholder="Your password" />
              {state?.errors?.password && (
                <div>
                  <p className="text-red-600 text-xs">Password must:</p>
                  <ul>
                    {state.errors.password.map((error) => (
                      <li key={error}>
                        <p className="text-red-600 text-xs">- {error}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          {state?.errors?.global?.map((v) => (
            <p key={v} className="text-red-600 text-xs">
              {v}
            </p>
          ))}
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button disabled={pending} type="submit" variant="default">
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
