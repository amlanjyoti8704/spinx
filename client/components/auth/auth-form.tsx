"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { LoaderCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/store/auth-store";

type AuthMode = "login" | "signup";

export function AuthForm({ mode }: { mode: AuthMode }) {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const signup = useAuthStore((state) => state.signup);
  const error = useAuthStore((state) => state.error);
  const clearError = useAuthStore((state) => state.clearError);
  const status = useAuthStore((state) => state.status);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const isPending = status === "loading";
  const isSignup = mode === "signup";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    clearError();

    if (isSignup) {
      await signup({
        name: form.name,
        email: form.email,
        password: form.password,
      });
    } else {
      await login({
        email: form.email,
        password: form.password,
      });
    }

    router.push("/dashboard");
  }

  return (
    <CardContent className="space-y-6 px-6 py-6 sm:px-8 sm:py-8">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.24em] text-sky-200/80">
          {isSignup ? "Create account" : "Welcome back"}
        </p>
        <h2 className="font-heading text-2xl font-semibold text-white">
          {isSignup ? "Start your SPINX profile." : "Sign in to continue building."}
        </h2>
        <p className="text-sm leading-6 text-slate-400">
          {isSignup
            ? "Your first working product slice is ready. Create an account and move into the authenticated flow."
            : "Pick up where you left off and continue into the resume and matching flow."}
        </p>
      </div>

      <form className="space-y-4" onSubmit={(event) => void handleSubmit(event)}>
        {isSignup ? (
          <div className="space-y-2">
            <label className="text-sm text-slate-200" htmlFor="name">
              Full name
            </label>
            <Input
              className="h-11 rounded-2xl border-white/10 bg-white/6 px-4 text-white placeholder:text-slate-500"
              id="name"
              onChange={(event) =>
                setForm((current) => ({ ...current, name: event.target.value }))
              }
              placeholder="Amlan Jyoti"
              required
              value={form.name}
            />
          </div>
        ) : null}

        <div className="space-y-2">
          <label className="text-sm text-slate-200" htmlFor="email">
            Email
          </label>
          <Input
            className="h-11 rounded-2xl border-white/10 bg-white/6 px-4 text-white placeholder:text-slate-500"
            id="email"
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
            placeholder="you@example.com"
            required
            type="email"
            value={form.email}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-slate-200" htmlFor="password">
            Password
          </label>
          <Input
            className="h-11 rounded-2xl border-white/10 bg-white/6 px-4 text-white placeholder:text-slate-500"
            id="password"
            minLength={8}
            onChange={(event) =>
              setForm((current) => ({ ...current, password: event.target.value }))
            }
            placeholder="Minimum 8 characters"
            required
            type="password"
            value={form.password}
          />
        </div>

        {error ? (
          <div className="rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">
            {error}
          </div>
        ) : null}

        <Button
          className="h-11 w-full rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 text-sm font-semibold text-slate-950 hover:opacity-90"
          disabled={isPending}
          type="submit"
        >
          {isPending ? (
            <>
              <LoaderCircle className="size-4 animate-spin" />
              Processing
            </>
          ) : isSignup ? (
            "Create account"
          ) : (
            "Sign in"
          )}
        </Button>
      </form>

      <p className="text-center text-sm text-slate-400">
        {isSignup ? "Already have an account?" : "Need an account?"}{" "}
        <Link
          className="font-medium text-sky-200 transition hover:text-white"
          href={isSignup ? "/login" : "/signup"}
        >
          {isSignup ? "Log in" : "Create one"}
        </Link>
      </p>
    </CardContent>
  );
}
