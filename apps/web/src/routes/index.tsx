import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, PhoneCall, Snowflake, SunSnow } from "lucide-react";
import type React from "react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

// 6 floating icons at random positions / sizes / animation timings
const FLOATERS = [
  { top: "8%",  left: "8%",  size: 28, dur: 9,  delay: 0,   dx: 18,  dy: -22, rot: 24 },
  { top: "18%", left: "82%", size: 22, dur: 11, delay: 1.4, dx: -20, dy: 16,  rot: -18 },
  { top: "55%", left: "12%", size: 32, dur: 13, delay: 0.6, dx: 22,  dy: 20,  rot: 32 },
  { top: "62%", left: "78%", size: 26, dur: 10, delay: 2.2, dx: -16, dy: -18, rot: -28 },
  { top: "32%", left: "48%", size: 20, dur: 12, delay: 3.0, dx: 12,  dy: 24,  rot: 16 },
  { top: "78%", left: "42%", size: 24, dur: 14, delay: 1.8, dx: -22, dy: -14, rot: -22 },
] as const;

function HomeComponent() {
  return (
    <main className="overflow-x-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <section className="relative isolate flex min-h-svh flex-col justify-center overflow-hidden">
        {/* AC airflow video as hero top background — black bg dropped via blend */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          {/* Light: cold airflow — mobile uses mobile-cold-video, desktop uses cold-video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            key="cold-mobile"
            className="block h-full w-full object-cover object-top mix-blend-multiply md:hidden dark:hidden"
          >
            <source src="/mobile-cold-video.mp4" type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            key="cold-desktop"
            className="hidden h-full w-full object-cover object-top mix-blend-multiply md:block md:dark:hidden"
          >
            <source src="/cold-video.mp4" type="video/mp4" />
          </video>
          {/* Dark: warm airflow — mobile + desktop variants */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            key="warm-mobile"
            className="hidden h-full w-full object-cover object-top mix-blend-screen dark:block md:dark:hidden"
          >
            <source src="/mobile-warm-video.mp4" type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            key="warm-desktop"
            className="hidden h-full w-full object-cover object-top mix-blend-screen md:dark:block"
          >
            <source src="/warm-video.mp4" type="video/mp4" />
          </video>
          {/* Themed atmospheric overlay — cold (light) / warm (dark) */}
          <div
            className="absolute inset-0 block dark:hidden"
            style={{
              backgroundImage:
                "radial-gradient(60% 55% at 50% 0%, rgba(25,118,210,0.22), transparent 70%), linear-gradient(180deg, rgba(186,230,253,0.25) 0%, rgba(219,234,254,0.12) 40%, rgba(255,255,255,0) 100%)",
            }}
          />
          <div
            className="absolute inset-0 hidden dark:block"
            style={{
              backgroundImage:
                "radial-gradient(60% 55% at 50% 0%, rgba(255,138,107,0.28), transparent 70%), linear-gradient(180deg, rgba(168,28,42,0.22) 0%, rgba(120,40,20,0.12) 40%, rgba(0,0,0,0) 100%)",
            }}
          />

          {/* Readability scrim — lightens middle band in light mode, darkens in dark */}
          <div
            className="absolute inset-0 block dark:hidden"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 35%, rgba(255,255,255,0.55) 70%, rgba(255,255,255,0) 100%)",
            }}
          />
          <div
            className="absolute inset-0 hidden dark:block"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 30%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>

{/* Floating icons: keyframes */}
        <style>{`
          @keyframes hr-float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50%      { transform: translate(var(--dx), var(--dy)) rotate(var(--rot)); }
          }
          @keyframes hr-glow-cold {
            0%, 100% { opacity: 0.55; filter: drop-shadow(0 0 6px rgba(25,118,210,0.55)); }
            50%      { opacity: 1;    filter: drop-shadow(0 0 16px rgba(25,118,210,0.95)); }
          }
          @keyframes hr-glow-warm {
            0%, 100% { opacity: 0.6; filter: drop-shadow(0 0 8px rgba(255,138,107,0.65)); }
            50%      { opacity: 1;   filter: drop-shadow(0 0 18px rgba(255,138,107,0.95)); }
          }
          @media (prefers-reduced-motion: reduce) {
            .hr-floater { animation: none !important; }
          }
        `}</style>

        {/* Floating icon background — 6 icons, random drift + glow pulse */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
        >
          {FLOATERS.map((f) => (
            <span
              key={`${f.top}-${f.left}`}
              className="hr-floater absolute text-[#1976d2] dark:text-[#ff8a6b]"
              style={{
                top: f.top,
                left: f.left,
                "--dx": `${f.dx}px`,
                "--dy": `${f.dy}px`,
                "--rot": `${f.rot}deg`,
                animation: `hr-float ${f.dur}s ease-in-out ${f.delay}s infinite, hr-glow-cold ${(f.dur / 2).toFixed(1)}s ease-in-out ${f.delay}s infinite`,
              } as React.CSSProperties}
            >
              <Snowflake
                className="block dark:hidden"
                size={f.size}
                strokeWidth={1.6}
              />
              <SunSnow
                className="hidden dark:block"
                style={{ animation: `hr-glow-warm ${(f.dur / 2).toFixed(1)}s ease-in-out ${f.delay}s infinite` }}
                size={f.size}
                strokeWidth={1.6}
              />
            </span>
          ))}
        </div>

        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-20 text-center md:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1976d2] opacity-75 dark:bg-[#ff8a6b]" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1976d2] dark:bg-[#ff8a6b]" />
            </span>
            <span className="block dark:hidden">Booking AC installs across Nepal</span>
            <span className="hidden dark:block">24/7 heating &amp; emergency repairs</span>
          </span>

          {/* Light mode headline */}
          <h1 className="mt-7 block text-balance font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-zinc-900 md:text-6xl lg:text-7xl dark:hidden">
            Reliable cooling,
            <span className="mt-1 block font-medium italic text-[#1976d2]">
              for every season of business.
            </span>
          </h1>
          {/* Dark mode headline */}
          <h1 className="mt-7 hidden text-balance font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-zinc-100 md:text-6xl lg:text-7xl dark:block">
            Reliable Warmth,
            <span className="mt-1 block font-medium italic text-[#ff8a6b]">
              comfort that holds the line.
            </span>
          </h1>

          {/* Light subhead */}
          <p className="mt-7 block max-w-2xl text-pretty text-base leading-relaxed text-zinc-600 md:text-lg dark:hidden">
            Air conditioning, refrigeration and cold storage — designed,
            installed and serviced for Nepal&apos;s climate by certified
            technicians.
          </p>
          {/* Dark subhead */}
          <p className="mt-7 hidden max-w-2xl text-pretty text-base leading-relaxed text-zinc-100 [text-shadow:0_2px_8px_rgba(0,0,0,0.5)] md:text-lg dark:block">
            Heating systems, heat pumps and full HVAC service — keeping homes
            and businesses warm through every Himalayan winter.
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
