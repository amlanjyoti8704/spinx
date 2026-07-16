import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  BrainCircuit,
  CheckCircle2,
  Code2,
  MapPinned,
  MessageSquareMore,
  Network,
  Radar,
  ShieldCheck,
  Sparkles,
  Upload,
  Users,
  Workflow,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Docker",
  "Redis",
  "AWS",
  "TypeScript",
];

const steps = [
  {
    title: "Upload your resume",
    description:
      "Start with the work you have already done instead of filling out a long profile from scratch.",
    icon: Upload,
  },
  {
    title: "Extract technical signals",
    description:
      "SPINX reads projects, tools, roles, and experience to build a structured developer profile.",
    icon: BrainCircuit,
  },
  {
    title: "Find meaningful overlap",
    description:
      "Recommendations combine shared stacks, adjacent technologies, project context, and career stage.",
    icon: Radar,
  },
  {
    title: "Connect and chat",
    description:
      "Send requests with context, see why you matched, and start the conversation with a useful head start.",
    icon: MessageSquareMore,
  },
];

const features = [
  {
    title: "Resume-first onboarding",
    description:
      "A faster entry point for developers who already have a body of work they want the product to understand.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Explainable matches",
    description:
      "Every recommendation shows the overlap in skills, project patterns, seniority, and technical interests.",
    icon: Sparkles,
  },
  {
    title: "Skill-aware networking",
    description:
      "Meet people with similar technical journeys without flattening everything into generic social profiles.",
    icon: Network,
  },
  {
    title: "Real-time conversations",
    description:
      "Chat becomes part of the product flow once both sides are ready, keeping outreach intentional.",
    icon: Workflow,
  },
  {
    title: "Privacy-first profile control",
    description:
      "Users can refine their experience, replace their resume, and narrow or widen recommendation quality.",
    icon: ShieldCheck,
  },
  {
    title: "Built for builders",
    description:
      "The product language, visuals, and interaction model are tuned for engineering and product-minded users.",
    icon: Code2,
  },
];

const matches = [
  {
    name: "Aarav Singh",
    role: "Backend Engineer",
    score: "94%",
    skills: ["Node.js", "MongoDB", "Docker"],
    note: "2 similar infrastructure-heavy projects",
  },
  {
    name: "Mira Thomas",
    role: "Full-Stack Developer",
    score: "91%",
    skills: ["React", "TypeScript", "Redis"],
    note: "Shared work on collaborative tools",
  },
];

const highlights = [
  "Resume parsed in under a minute",
  "Why-you-matched explanations",
  "Active chats stay even after rematching",
];

function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
}) {
  return (
    <div className={cn("space-y-4", center && "mx-auto max-w-2xl text-center")}>
      <Badge
        variant="outline"
        className="rounded-full border-white/14 bg-white/8 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-sky-100/80"
      >
        {eyebrow}
      </Badge>
      <div className="space-y-3">
        <h2 className="font-heading text-3xl leading-tight font-semibold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-7 text-slate-300">{description}</p>
      </div>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm text-slate-300 transition hover:text-white"
    >
      {children}
    </Link>
  );
}

export function LandingPage() {
  return (
    <main className="relative isolate overflow-hidden bg-[#07111f] text-white">
      <div className="absolute inset-0 -z-20" style={{background:"radial-gradient(circle_at_top_left,_rgba(59,130,246,0.28),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(34,211,238,0.16),_transparent_24%),linear-gradient(180deg,_#09111d_0%,_#07111f_38%,_#050913_100%)"}} />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:88px_88px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.7),transparent_95%)]" />
      <div className="absolute left-1/2 top-24 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-20 sm:px-8 lg:px-10">
        <header className="sticky top-0 z-30 pt-5">
          <div className="flex items-center justify-between rounded-full border border-white/10 bg-slate-950/55 px-5 py-3 shadow-[0_12px_48px_rgba(5,10,18,0.45)] backdrop-blur-xl">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 text-sm font-semibold text-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
                S
              </div>
              <div>
                <p className="font-heading text-lg font-semibold tracking-[0.16em]">
                  SPINX
                </p>
                <p className="text-xs text-slate-400">
                  Shared technical journeys
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              <NavLink href="#how-it-works">How it works</NavLink>
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#matches">Matches</NavLink>
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="#how-it-works"
                className="hidden text-sm text-slate-300 transition hover:text-white sm:block"
              >
                Explore demo
              </Link>
              <Link
                href="/signup"
                className="inline-flex h-10 items-center justify-center rounded-full bg-white px-4 text-sm font-medium text-slate-950 transition hover:bg-sky-100"
              >
                Get started
              </Link>
            </div>
          </div>
        </header>

        <section className="relative grid flex-1 items-center gap-14 py-16 lg:grid-cols-[minmax(0,1fr)_460px] lg:py-24">
          <div className="space-y-10">
            <Badge
              variant="outline"
              className="rounded-full border-sky-400/25 bg-sky-400/10 px-4 py-1 text-[11px] uppercase tracking-[0.24em] text-sky-100"
            >
              Developer networking, rebuilt
            </Badge>

            <div className="space-y-6">
              <h1 className="max-w-4xl font-heading text-5xl leading-[1.02] font-semibold text-balance text-white sm:text-6xl lg:text-7xl">
                Find developers who share your{" "}
                <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent">
                  tech journey.
                </span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Upload your resume, surface the work that matters, and connect
                with professionals whose technical paths actually overlap with yours.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 px-6 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(34,211,238,0.25)] transition hover:translate-y-[-1px]"
              >
                Upload resume
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="#matches"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/14 bg-white/6 px-6 text-sm font-medium text-white transition hover:bg-white/10"
              >
                See match preview
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/6 px-4 py-4 backdrop-blur-sm"
                >
                  <div className="mb-3 flex size-9 items-center justify-center rounded-2xl bg-sky-400/12 text-sky-200">
                    <CheckCircle2 className="size-4" />
                  </div>
                  <p className="text-sm leading-6 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-8 top-8 -z-10 h-48 rounded-full bg-blue-500/20 blur-3xl" />
            <Card className="border border-white/10 bg-slate-950/70 py-0 shadow-[0_24px_80px_rgba(2,8,23,0.55)] backdrop-blur-xl">
              <CardContent className="space-y-6 px-6 py-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400">Resume intelligence</p>
                    <h2 className="mt-2 text-white font-heading text-2xl font-semibold">
                      Profile parsing pipeline
                    </h2>
                  </div>
                  <Badge className="rounded-full bg-emerald-400/16 px-3 py-1 text-emerald-200">
                    live
                  </Badge>
                </div>

                <div className="space-y-3">
                  {[
                    ["Resume uploaded", "done"],
                    ["Skills extracted", "done"],
                    ["Project summary built", "done"],
                    ["Similar developers loading", "active"],
                  ].map(([label, state]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "size-2.5 rounded-full",
                            state === "active" ? "bg-sky-300" : "bg-emerald-300"
                          )}
                        />
                        <span className="text-sm text-slate-100">{label}</span>
                      </div>
                      <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        {state}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(145deg,rgba(14,165,233,0.12),rgba(15,23,42,0.76))] p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-300">Recommendation focus</p>
                      <p className="mt-1 text-white font-heading text-xl font-semibold">
                        Shared backend paths
                      </p>
                    </div>
                    <div className="rounded-full bg-white/8 px-3 py-1 text-sm text-sky-100">
                      93%
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {matches.map((match) => (
                      <div
                        key={match.name}
                        className="rounded-2xl border border-white/10 bg-slate-950/65 p-4"
                      >
                        <div className="mb-4 flex items-start justify-between">
                          <div>
                            <p className="font-medium text-white">{match.name}</p>
                            <p className="text-sm text-slate-400">{match.role}</p>
                          </div>
                          <span className="text-sm font-semibold text-cyan-200">
                            {match.score}
                          </span>
                        </div>
                        <div className="mb-3 flex flex-wrap gap-2">
                          {match.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="outline"
                              className="rounded-full border-white/12 bg-white/6 text-slate-200"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-sm leading-6 text-slate-300">{match.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="border-y border-white/8 py-8">
          <div className="flex flex-wrap items-center gap-3">
            <p className="mr-4 text-sm uppercase tracking-[0.2em] text-slate-500">
              Built around modern stacks
            </p>
            {technologies.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="space-y-10 py-20">
          <SectionHeading
            eyebrow="How it works"
            title="A clearer path from resume to relevant conversations."
            description="The product flow is designed to feel professional and lightweight, with just enough intelligence to make recommendations trustworthy."
          />

          <div className="grid gap-5 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Card
                  key={step.title}
                  className="border border-white/10 bg-white/6 py-0 backdrop-blur-sm"
                >
                  <CardContent className="space-y-5 px-6 py-6">
                    <div className="flex items-center justify-between">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-sky-400/12 text-sky-200">
                        <Icon className="size-5" />
                      </div>
                      <span className="font-mono text-xs tracking-[0.24em] text-slate-500">
                        0{index + 1}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading text-xl font-medium text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-7 text-slate-300">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="features" className="space-y-10 py-20">
          <SectionHeading
            eyebrow="Product focus"
            title="Designed to feel like a startup product, not a generic template."
            description="SPINX is positioned as intelligent professional networking for developers, with matching logic and communication tools that stay tied to real technical context."
            center
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <Card
                  key={feature.title}
                  className="border border-white/10 py-0 backdrop-blur-sm"
                  style={{
                    background: "linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))",
                  }}
                >
                  <CardContent className="space-y-5 px-6 py-6">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-white/8 text-cyan-200">
                      <Icon className="size-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading text-xl font-medium text-white">
                        {feature.title}
                      </h3>
                      <p className="text-sm leading-7 text-slate-300">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="matches" className="grid gap-8 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="border border-white/10 px-6 py-10 shadow-[0_24px_80px_rgba(2,8,23,0.45)] py-0 backdrop-blur-xl" style={{background:"linear-gradient(135deg,rgba(56,189,248,0.16),rgba(15,23,42,0.82))"}}>
            <CardContent className="space-y-8 px-6 py-6 sm:px-8 sm:py-8">
              <div className="space-y-4">
                <Badge
                  variant="outline"
                  className="rounded-full border-white/12 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-sky-100/80"
                >
                  Match explanation
                </Badge>
                <h3 className="font-heading text-3xl font-semibold text-white">
                  Recommendations should earn trust.
                </h3>
                <p className="text-base leading-7 text-slate-300">
                  Instead of showing a score in isolation, SPINX explains why a
                  match surfaced and gives users enough context to decide whether
                  they want to connect.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                  <p className="font-heading text-5xl font-semibold text-white">92%</p>
                  <p className="mt-2 text-sm text-slate-400">Compatibility score</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                  <p className="font-heading text-5xl font-semibold text-white">4</p>
                  <p className="mt-2 text-sm text-slate-400">Shared technical themes</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Both built MERN products with production deployment workflows.",
                  "Strong overlap in Docker, Redis, and AWS-backed architecture.",
                  "Similar experience range, with backend-heavy project history.",
                  "Conversation starter can reference shared real-time app work.",
                ].map((reason) => (
                  <div
                    key={reason}
                    className="flex gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-4"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan-200" />
                    <p className="text-sm leading-6 text-slate-200">{reason}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-5">
            <Card className="border border-white/10 bg-white/6 py-0 backdrop-blur-sm">
              <CardContent className="space-y-6 px-6 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Profile context</p>
                    <h3 className="mt-2 font-heading text-2xl font-semibold text-white">
                      What gets matched
                    </h3>
                  </div>
                  <Users className="size-5 text-sky-200" />
                </div>
                <div className="grid gap-3">
                  {[
                    { label: "Tech stack overlap", value: "React, Node.js, Redis" },
                    { label: "Project pattern", value: "Chat, tooling, SaaS dashboards" },
                    { label: "Career stage", value: "2 to 4 years experience" },
                    { label: "Location preference", value: "Remote-friendly, India" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/8 bg-slate-950/50 px-4 py-4"
                    >
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-100">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border border-white/10  py-0" style={{background:"linear-gradient(145deg,rgba(34,197,94,0.14),rgba(15,23,42,0.75))"}}>
              <CardContent className="space-y-5 px-6 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-300">Active connection safety</p>
                    <h3 className="mt-2 font-heading text-2xl font-semibold text-white">
                      Existing chats stay intact
                    </h3>
                  </div>
                  <MapPinned className="size-5 text-emerald-200" />
                </div>
                <p className="text-sm leading-7 text-slate-200">
                  If a resume changes later, SPINX can refresh recommendations
                  without wiping active conversations. That keeps matching dynamic
                  without making the social graph feel unstable.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* <section
          id="launch"
          className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(56,189,248,0.16),rgba(15,23,42,0.82))] px-6 py-10 shadow-[0_24px_80px_rgba(2,8,23,0.45)] sm:px-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <Badge className="rounded-full bg-white/10 px-3 py-1 text-sky-100">
                MVP week
              </Badge>
              <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
                A clean product foundation for the July 21 push.
              </h2>
              <p className="text-base leading-7 text-slate-200">
                This homepage gives SPINX a strong public face. From here, the next
                practical build steps are auth, resume upload, rule-based matching,
                requests, and chat.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#how-it-works"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/8 px-6 text-sm font-medium text-white transition hover:bg-white/12"
              >
                Review flow
              </Link>
              <Link
                href="#features"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-sky-100"
              >
                Continue building
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section> */}

        <footer className="flex flex-col gap-4 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>SPINX is a developer-first networking platform built around real technical experience.</p>
          <div className="flex items-center gap-4">
            <Link href="#features" className="transition hover:text-white">
              Features
            </Link>
            <Link href="#matches" className="transition hover:text-white">
              Matches
            </Link>
            <Link href="/signup" className="transition hover:text-white">
              Get started
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
