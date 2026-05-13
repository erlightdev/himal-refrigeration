import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, Phone, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

import { ModeToggle } from "../mode-toggle";

const nav = [
  { to: "/", label: "Home" },
  { to: "/", label: "Services" },
  { to: "/", label: "Industries" },
  { to: "/", label: "Projects" },
  { to: "/", label: "About" },
  { to: "/", label: "Contact" },
] as const;

const BRAND_RED = "#a81c2a";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [banner, setBanner] = useState(true);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {banner && (
        <div className="relative text-white" style={{ backgroundColor: BRAND_RED }}>
          <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-3 px-10 py-2 text-xs sm:text-sm">
            <Sparkles className="h-4 w-4 shrink-0" strokeWidth={1.75} />
            <p className="truncate">
              Monsoon servicing — free system inspection on bookings before
              June 30.
            </p>
            <a
              href="/"
              className="hidden shrink-0 items-center gap-1 font-medium underline-offset-4 hover:underline sm:inline-flex"
            >
              Book now
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
            </a>
          </div>
          <button
            type="button"
            aria-label="Dismiss announcement"
            onClick={() => setBanner(false)}
            className="absolute top-1/2 right-3 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-md text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>
      )}

      <div className="pointer-events-none absolute inset-x-0 top-full px-3 pt-3 md:px-6 md:pt-4">
        <div className="pointer-events-auto mx-auto flex w-full max-w-7xl items-center justify-between gap-4 rounded-lg border border-zinc-200/70 bg-white/80 px-4 py-3 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.18)] backdrop-blur-xl md:px-6 md:py-4 dark:border-white/10 dark:bg-zinc-950/70 dark:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)]">
          <Link to="/" aria-label="Himal Refrigeration" className="inline-flex items-center">
            <img
              src="https://placehold.co/200x44/8A0303/ffffff/png?text=HIMAL+REFRIGERATION&font=inter"
              alt="Himal Refrigeration"
              className="h-9 w-auto object-contain md:h-10"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="rounded-md px-3 py-2 font-medium text-[15px] text-zinc-800 tracking-tight transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-200 dark:hover:bg-white/5 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+97714000000"
              className="hidden items-center gap-2 rounded-md px-3 py-1.5 text-sm text-zinc-700 hover:bg-zinc-100 md:inline-flex dark:text-zinc-300 dark:hover:bg-white/5"
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={1.75} />
              +977 1 400 0000
            </a>
            <ModeToggle />
            <button
              type="button"
              className="hidden items-center gap-2 rounded-md bg-[#1976d2] px-4 py-2 font-medium text-sm text-white transition hover:bg-[#1565c0] active:translate-y-px md:inline-flex"
            >
              Book a call
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </button>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-md border border-zinc-200 text-zinc-700 lg:hidden dark:border-white/10 dark:text-zinc-300"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="pointer-events-auto fixed inset-x-3 top-24 bottom-3 z-40 overflow-y-auto rounded-lg border border-zinc-200 bg-white px-6 py-6 shadow-2xl lg:hidden dark:border-white/10 dark:bg-zinc-950">
          <nav className="flex flex-col divide-y divide-zinc-200 dark:divide-white/10">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 font-medium text-lg text-zinc-900 dark:text-zinc-100"
              >
                {item.label}
                <ArrowRight className="h-4 w-4 text-zinc-400" strokeWidth={1.75} />
              </Link>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#1976d2] px-5 py-3 font-medium text-sm text-white"
          >
            Book a call
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>
      )}
    </header>
  );
}
