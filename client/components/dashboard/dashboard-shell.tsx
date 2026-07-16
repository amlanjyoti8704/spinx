"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import type { LucideIcon } from "lucide-react";
import { LoaderCircle, LogOut, MessageSquareMore, Radar, Upload, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuthStore } from "@/store/auth-store";

export function DashboardShell() {
  const router = useRouter();
  const initialized = useAuthStore((state) => state.initialized);
  const status = useAuthStore((state) => state.status);
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    if (initialized && status === "guest") {
      router.replace("/login");
    }
  }, [initialized, router, status]);

  async function handleLogout() {
    await logout();
    router.push("/login");
  }

  if (!initialized || status === "loading") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#07111f] text-white">
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-5 py-3">
          <LoaderCircle className="size-4 animate-spin text-sky-300" />
          <span className="text-sm text-slate-200">Loading your SPINX session…</span>
        </div>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  const nextSlices: Array<{
    title: string;
    subtitle: string;
    icon: LucideIcon;
  }> = [
    { title: "Resume upload", subtitle: "Next slice", icon: Upload },
    { title: "Matching engine", subtitle: "After profile data", icon: Radar },
    { title: "Requests", subtitle: "Connection workflow", icon: Users },
    { title: "Chat", subtitle: "Real-time layer", icon: MessageSquareMore },
  ];

  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(59,130,246,0.22), transparent 30%), linear-gradient(180deg, #09111d 0%, #07111f 38%, #050913 100%)",
        }}
      />

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-slate-950/55 px-5 py-3 shadow-[0_12px_48px_rgba(5,10,18,0.45)] backdrop-blur-xl">
          <div>
            <p className="font-heading text-lg font-semibold tracking-[0.16em]">SPINX</p>
            <p className="text-xs text-slate-400">Authenticated product slice</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-slate-300 sm:block">{user.email}</span>
            <Button
              className="rounded-full border border-white/12 bg-white/8 px-4 text-white hover:bg-white/12"
              onClick={() => void handleLogout()}
              variant="ghost"
            >
              <LogOut className="size-4" />
              Logout
            </Button>
          </div>
        </header>

        <section className="grid flex-1 gap-6 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
          <Card className="border border-white/10 bg-slate-950/72 py-0 backdrop-blur-xl">
            <CardContent className="space-y-6 px-6 py-6">
              <div className="space-y-2">
                <p className="text-sm text-slate-400">Signed in as</p>
                <h1 className="font-heading text-2xl font-semibold text-white">
                  {user.name}
                </h1>
                <p className="text-sm text-slate-300">{user.email}</p>
              </div>

              <div className="grid gap-3">
                {nextSlices.map(({ title, subtitle, icon: Icon }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/8 bg-white/6 px-4 py-4"
                  >
                    <div className="mb-3 flex size-10 items-center justify-center rounded-2xl bg-sky-400/12 text-sky-200">
                      <Icon className="size-4" />
                    </div>
                    <p className="font-medium text-white">{title}</p>
                    <p className="text-sm text-slate-400">{subtitle}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <Card className="border border-white/10 bg-slate-950/72 py-0 backdrop-blur-xl">
              <CardContent className="space-y-5 px-6 py-6 sm:px-8 sm:py-8">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.24em] text-sky-200/80">
                    Milestone reached
                  </p>
                  <h2 className="font-heading text-3xl font-semibold text-white">
                    Authentication is fully wired.
                  </h2>
                  <p className="max-w-2xl text-base leading-7 text-slate-300">
                    You now have real account creation, login, logout, an authenticated
                    session, and a protected page. This is the first end-to-end product
                    slice beyond the landing page.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    ["Cookie auth", "HTTP-only session token"],
                    ["Protected route", "/dashboard checks current user"],
                    ["Backend contract", "Ready for resume upload next"],
                  ].map(([title, description]) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-white/8 bg-white/6 px-5 py-5"
                    >
                      <p className="font-medium text-white">{title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border border-white/10  py-0" style={{background:"linear-gradient(145deg,rgba(14,165,233,0.12),rgba(15,23,42,0.8))"}}>
              <CardContent className="space-y-4 px-6 py-6 sm:px-8 sm:py-8">
                <h3 className="font-heading text-2xl font-semibold text-white">
                  Recommended next build
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-slate-200">
                  Move straight into resume upload and parsing now. The auth slice is in
                  place, so the next high-value step is letting the signed-in user submit
                  their resume and generating the first structured profile.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-sky-100"
                    href="/"
                  >
                    Review landing page
                  </Link>
                  <button
                    className="inline-flex h-11 items-center justify-center rounded-full border border-white/12 bg-white/8 px-5 text-sm font-medium text-white transition hover:bg-white/12"
                    type="button"
                  >
                    Resume upload next
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
