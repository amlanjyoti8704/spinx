import Link from "next/link";

import { Badge } from "@/components/ui/badge";

export function AuthShell({
  title,
  subtitle,
  badge,
  children,
}: {
  title: string;
  subtitle: string;
  badge: string;
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07111f] text-white">
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(59,130,246,0.28), transparent 32%), radial-gradient(circle at top right, rgba(34,211,238,0.16), transparent 24%), linear-gradient(180deg, #09111d 0%, #07111f 38%, #050913 100%)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:88px_88px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.8),transparent_100%)]" />
      <div className="absolute left-1/2 top-12 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/18 blur-3xl" />

      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-slate-950/55 px-5 py-3 shadow-[0_12px_48px_rgba(5,10,18,0.45)] backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 text-sm font-semibold text-slate-950">
              S
            </div>
            <div>
              <p className="font-heading text-lg font-semibold tracking-[0.16em]">
                SPINX
              </p>
              <p className="text-xs text-slate-400">Shared technical journeys</p>
            </div>
          </Link>

          <Link className="text-sm text-slate-300 transition hover:text-white" href="/">
            Back to landing
          </Link>
        </header>

        <section className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[1.1fr_460px] lg:py-16">
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="rounded-full border-sky-400/25 bg-sky-400/10 px-4 py-1 text-[11px] uppercase tracking-[0.24em] text-sky-100"
            >
              {badge}
            </Badge>
            <div className="space-y-4">
              <h1 className="max-w-2xl font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl">
                {title}
              </h1>
              <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                {subtitle}
              </p>
            </div>
            <div className="grid gap-3 sm:max-w-xl sm:grid-cols-2">
              {[
                "HTTP-only cookie auth",
                "MongoDB-backed user accounts",
                "Protected dashboard session",
                "Ready for resume upload next",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/6 px-4 py-4 text-sm text-slate-200 backdrop-blur-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/72 p-2 shadow-[0_24px_80px_rgba(2,8,23,0.55)] backdrop-blur-xl">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}
