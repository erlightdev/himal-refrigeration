import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, PhoneCall } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <main className="bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <section className="relative isolate overflow-hidden">
        {/* AC image as hero top background — fades into theme bg */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70vh] min-h-[520px] overflow-hidden"
        >
          <img
            src="/Cold.png"
            alt=""
            className="block h-full w-full object-cover object-top opacity-70 dark:hidden"
          />
          <img
            src="/Warm.png"
            alt=""
            className="hidden h-full w-full object-cover object-top opacity-80 dark:block"
          />
          {/* Air-blow color gradient overlay (cool blue / warm red) */}
          <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_0%,rgba(25,118,210,0.30),transparent_75%)] dark:bg-[radial-gradient(60%_55%_at_50%_0%,rgba(168,28,42,0.40),transparent_75%)]" />
          {/* Fade into page bg so content below reads cleanly */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white dark:via-zinc-950/60 dark:to-zinc-950" />
        </div>

        {/* Brand glows (subtle, behind everything) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(40%_50%_at_50%_100%,rgba(168,28,42,0.10),transparent_70%)] dark:bg-[radial-gradient(40%_50%_at_50%_100%,rgba(168,28,42,0.22),transparent_70%)]"
        />
        {/* Dot grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-20 [background-image:radial-gradient(rgba(24,24,27,0.08)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_80%)] dark:[background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)]"
        />

        <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 pt-28 pb-24 text-center md:pt-36 md:pb-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1976d2] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1976d2]" />
            </span>
            Now booking installs across Nepal
          </span>

          <h1 className="mt-7 text-balance text-6xl font-black leading-[0.98] tracking-tight md:text-6xl lg:text-6xl">
            High Quality{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#1976d2] to-[#a81c2a] bg-clip-text text-transparent">
                HVAC
              </span>
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-[#1976d2] to-[#a81c2a] opacity-70"
              />
            </span>
            <span className="block">Installation & Repair</span>
          </h1>

          <p className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-zinc-600 md:text-lg dark:text-zinc-400">
            Air conditioning, refrigeration and cold storage — designed,
            installed and serviced for Nepal's climate by certified
            technicians.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-zinc-900/20 ring-1 ring-zinc-900/10 transition hover:bg-black active:translate-y-px dark:bg-white dark:text-zinc-900 dark:shadow-white/10 dark:ring-white/20 dark:hover:bg-zinc-100"
            >
              Get a free quote
              <span className="grid h-5 w-5 place-items-center rounded-full bg-white/15 transition group-hover:translate-x-0.5 dark:bg-zinc-900/10">
                <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
              </span>
            </button>
            <a
              href="tel:+9779800000000"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:border-zinc-300 hover:bg-zinc-50 active:translate-y-px dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
            >
              <PhoneCall className="h-4 w-4 text-[#1976d2]" strokeWidth={2} />
              Call a technician
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
