"use client";

import { Button } from "@repo/ui/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@repo/ui/components/ui/card";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { useActionState } from "react";
import { signup } from "#layer/action/auth/auth.action";

export default function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined);

  return (
    <form action={action}>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>
            <b>Sign up</b> Service
          </CardTitle>
          <CardDescription>
            Sign up for AI Trend Now Manager Service.
            <br />
            <p className="text-xs underline">Admin approval is required after signup.</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your name" />
              {state?.errors?.name && <p className="text-red-600 text-xs">{state.errors.name}</p>}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" placeholder="Your email" />
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
                      <li key={error} className="text-red-600 text-xs">
                        - {error}
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
            Sign Up
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
