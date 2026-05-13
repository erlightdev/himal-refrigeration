import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Beef,
  Building2,
  ChevronDown,
  Gauge,
  HeartPulse,
  Menu,
  Phone,
  Pill,
  ShieldCheck,
  ShoppingCart,
  Snowflake,
  Sparkles,
  Truck,
  Utensils,
  Wind,
  Wrench,
  X,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { useEffect, useState } from "react";

import { ModeToggle } from "../mode-toggle";

type MegaItem = {
  label: string;
  category: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

type MegaFeature = {
  tag: string;
  title: string;
  description: string;
  image: string;
};

type MegaMenu = {
  items: MegaItem[];
  feature: MegaFeature;
};

type NavItem = {
  to: string;
  label: string;
  mega?: MegaMenu;
};

const nav: NavItem[] = [
  { to: "/", label: "Home" },
  {
    to: "/",
    label: "Services",
    mega: {
      items: [
        { label: "Cooling Systems", category: "Design & install", Icon: Snowflake },
        { label: "Preventive Maintenance", category: "Service plans", Icon: Wrench },
        { label: "Cold Storage", category: "Industrial", Icon: Building2 },
        { label: "Commercial Kitchens", category: "Hospitality", Icon: Utensils },
        { label: "HVAC & Ventilation", category: "Air systems", Icon: Wind },
        { label: "Reefer & Transport", category: "Cold chain", Icon: Truck },
        { label: "Energy Audits", category: "Optimization", Icon: Gauge },
        { label: "Emergency Repair", category: "24/7 support", Icon: ShieldCheck },
      ],
      feature: {
        tag: "New",
        title: "Cold-Chain for Logistics",
        description:
          "End-to-end refrigerated transport solutions — from reefer trucks to last-mile delivery.",
        image:
          "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    },
  },
  {
    to: "/",
    label: "Industries",
    mega: {
      items: [
        { label: "Restaurants & Cafés", category: "Hospitality", Icon: Utensils },
        { label: "Hotels & Resorts", category: "Hospitality", Icon: Building2 },
        { label: "Logistics & Reefer", category: "Transport", Icon: Truck },
        { label: "Cold Storage", category: "Industrial", Icon: Snowflake },
        { label: "Supermarkets", category: "Retail", Icon: ShoppingCart },
        { label: "Pharmaceuticals", category: "Healthcare", Icon: Pill },
        { label: "Dairy & Meat", category: "Food processing", Icon: Beef },
        { label: "Hospitals", category: "Medical", Icon: HeartPulse },
      ],
      feature: {
        tag: "Case Study",
        title: "Soaltee Crowne Plaza",
        description:
          "How we cut energy costs by 28% across 280+ rooms with a centralised cooling retrofit.",
        image:
          "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    },
  },
  { to: "/", label: "Projects" },
  { to: "/", label: "About" },
  { to: "/", label: "Contact" },
];

const BRAND_RED = "#a81c2a";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [banner, setBanner] = useState(true);
  const [hovered, setHovered] = useState<string | null>(null);

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
        {/* biome-ignore lint/a11y/noStaticElementInteractions: hover dismiss zone */}
        <div
          className="pointer-events-auto mx-auto w-full max-w-7xl"
          onMouseLeave={() => setHovered(null)}
        >
          <div className="flex items-center justify-between gap-4 rounded-lg border border-zinc-200/70 bg-white/80 px-4 py-3 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.18)] backdrop-blur-xl md:px-6 md:py-4 dark:border-white/10 dark:bg-zinc-950/70 dark:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)]">
            <Link to="/" aria-label="Himal Refrigeration" className="inline-flex items-center">
              <img
                src="https://placehold.co/200x44/8A0303/ffffff/png?text=HIMAL+REFRIGERATION&font=inter"
                alt="Himal Refrigeration"
                className="h-9 w-auto object-contain md:h-10"
              />
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {nav.map((item) => {
                const isActive = hovered === item.label;
                const base =
                  "inline-flex items-center gap-1 rounded-md px-3 py-2 font-medium text-[15px] text-zinc-800 tracking-tight transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-200 dark:hover:bg-white/5 dark:hover:text-white";
                if (item.mega) {
                  return (
                    <button
                      key={item.label}
                      type="button"
                      onMouseEnter={() => setHovered(item.label)}
                      onFocus={() => setHovered(item.label)}
                      aria-expanded={isActive}
                      className={base}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          isActive ? "rotate-180" : ""
                        }`}
                        strokeWidth={1.75}
                      />
                    </button>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    onMouseEnter={() => setHovered(null)}
                    className={base}
                  >
                    {item.label}
                  </Link>
                );
              })}
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

          {nav.map((item) => {
            if (!item.mega || hovered !== item.label) return null;
            const { items, feature } = item.mega;
            return (
              // biome-ignore lint/a11y/noStaticElementInteractions: hover-keepalive zone for desktop dropdown
              <div
                key={item.label}
                className="mx-auto mt-2 hidden w-fit max-w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_25px_60px_-25px_rgba(0,0,0,0.25)] lg:block dark:border-white/10 dark:bg-zinc-950"
                onMouseEnter={() => setHovered(item.label)}
              >
                <div className="grid grid-cols-[minmax(0,560px)_300px] gap-4 p-3">
                  <ul className="grid grid-cols-2 gap-0.5">
                    {items.map(({ label, category, Icon }) => (
                      <li key={label}>
                        <a
                          href="/"
                          className="group flex items-center gap-4 rounded-xl px-3 py-3 transition hover:bg-zinc-100 dark:hover:bg-white/5"
                        >
                          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#1976d2]/10 text-[#1976d2]">
                            <Icon className="h-5 w-5" strokeWidth={1.75} />
                          </span>
                          <span className="flex-1">
                            <span className="block font-semibold text-[15px] text-zinc-900 dark:text-zinc-100">
                              {label}
                            </span>
                            <span className="block text-xs text-zinc-500 dark:text-zinc-400">
                              {category}
                            </span>
                          </span>
                          <ArrowRight className="h-4 w-4 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-zinc-700 dark:group-hover:text-zinc-200" strokeWidth={1.75} />
                        </a>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/"
                    className="group relative overflow-hidden rounded-xl"
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <span className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-zinc-900">
                      <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <div className="absolute right-4 bottom-4 left-4 text-white">
                      <span className="inline-block rounded bg-white px-2 py-0.5 font-semibold text-[10px] text-zinc-900 uppercase tracking-wider">
                        {feature.tag}
                      </span>
                      <h4 className="mt-2 font-semibold text-base leading-tight">
                        {feature.title}
                      </h4>
                      <p className="mt-1 text-xs text-white/80 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
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
