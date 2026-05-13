import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, PlayCircle, ShieldCheck, Snowflake, Wrench } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

const highlights = [
  { Icon: Snowflake, label: "Energy-efficient cooling" },
  { Icon: Wrench, label: "24/7 service network" },
  { Icon: ShieldCheck, label: "5-year warranty" },
];

function HomeComponent() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-white dark:bg-zinc-950">
        <div
          aria-hidden
          className="-z-10 pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(25,118,210,0.18),transparent_55%),radial-gradient(circle_at_5%_90%,rgba(25,118,210,0.08),transparent_60%)] dark:bg-[radial-gradient(circle_at_85%_10%,rgba(25,118,210,0.25),transparent_55%),radial-gradient(circle_at_5%_90%,rgba(168,28,42,0.18),transparent_60%)]"
        />
        <div
          aria-hidden
          className="-z-10 pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_85%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]"
        />

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-28 pb-20 md:px-10 md:pt-36 md:pb-28 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/60 px-3 py-1 text-xs text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1976d2]" />
              Trusted by 200+ businesses in Nepal
            </span>
            <h1 className="mt-5 text-balance font-light text-4xl text-zinc-900 leading-[1.05] tracking-tight md:text-6xl dark:text-zinc-100">
              Refrigeration that runs{" "}
              <span className="text-[#1976d2]">quietly</span>, lasts longer,
              and keeps costs predictable.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base text-zinc-600 leading-relaxed dark:text-zinc-400">
              From walk-in cold storage to industrial chiller rooms — Himal
              Refrigeration designs, installs, and services cooling systems
              for restaurants, hospitals, dairies, and logistics across the
              country.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1976d2] px-5 py-3 font-medium text-sm text-white transition hover:bg-[#1565c0] active:translate-y-px"
              >
                Get a free quote
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" strokeWidth={2} />
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-3 font-medium text-sm text-zinc-900 transition hover:border-zinc-300 hover:bg-zinc-50 active:translate-y-px dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
              >
                <PlayCircle className="h-4 w-4" strokeWidth={1.75} />
                Watch how we work
              </button>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-zinc-600 dark:text-zinc-400">
              {highlights.map(({ Icon, label }) => (
                <li key={label} className="inline-flex items-center gap-2">
                  <Icon className="h-4 w-4 text-[#1976d2]" strokeWidth={1.75} />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 shadow-[0_30px_60px_-30px_rgba(25,118,210,0.35)] sm:aspect-[5/4] lg:aspect-[4/5] dark:border-white/10 dark:bg-zinc-900">
              <img
                src="https://picsum.photos/seed/himal-refrigeration-hero/900/1100"
                alt="Industrial refrigeration installation"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/30 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-4 hidden w-64 rounded-2xl border border-zinc-200 bg-white p-4 shadow-xl sm:block dark:border-white/10 dark:bg-zinc-900">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#1976d2]/10 text-[#1976d2]">
                  <Snowflake className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                    -22°C maintained
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Cold storage, Bhairahawa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
