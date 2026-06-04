import { ArrowRight, PhoneCall } from "lucide-react";

/** Foreground hero copy: status badge, headline, subhead and CTAs. */
export function HeroContent() {
	return (
		<div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-20 text-center md:py-24">
			{/* Status badge */}
			<span className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/70 px-3 py-1 font-medium text-xs text-zinc-700 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
				<span className="relative flex h-1.5 w-1.5">
					<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1976d2] opacity-75 dark:bg-[#ff8a6b]" />
					<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1976d2] dark:bg-[#ff8a6b]" />
				</span>
				<span className="block dark:hidden">
					Booking AC installs across Nepal
				</span>
				<span className="hidden dark:block">
					24/7 heating &amp; emergency repairs
				</span>
			</span>

			{/* Headline — light mode */}
			<h1 className="mt-7 block text-balance font-semibold font-serif text-5xl text-zinc-900 leading-[1.02] tracking-tight md:text-6xl lg:text-7xl dark:hidden">
				Reliable cooling,
				<span className="mt-1 block font-medium text-[#1976d2] italic">
					for every season of business.
				</span>
			</h1>
			{/* Headline — dark mode */}
			<h1 className="mt-7 hidden text-balance font-semibold font-serif text-5xl text-zinc-100 leading-[1.02] tracking-tight md:text-6xl lg:text-7xl dark:block">
				Reliable Warmth,
				<span className="mt-1 block font-medium text-[#ff8a6b] italic">
					comfort that holds the line.
				</span>
			</h1>

			{/* Subhead — light mode */}
			<p className="mt-7 block max-w-2xl text-pretty text-base text-zinc-600 leading-relaxed md:text-lg dark:hidden">
				Air conditioning, refrigeration and cold storage — designed, installed
				and serviced for Nepal&apos;s climate by certified technicians.
			</p>
			{/* Subhead — dark mode */}
			<p className="mt-7 hidden max-w-2xl text-pretty text-base text-zinc-100 leading-relaxed [text-shadow:0_2px_8px_rgba(0,0,0,0.5)] md:text-lg dark:block">
				Heating systems, heat pumps and full HVAC service — keeping homes and
				businesses warm through every Himalayan winter.
			</p>

			{/* Calls to action */}
			<div className="mt-9 flex flex-wrap items-center justify-center gap-3">
				<button
					type="button"
					className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 font-medium text-sm text-white shadow-lg shadow-zinc-900/20 ring-1 ring-zinc-900/10 transition hover:bg-black active:translate-y-px dark:bg-white dark:text-zinc-900 dark:shadow-white/10 dark:ring-white/20 dark:hover:bg-zinc-100"
				>
					Get a free quote
					<span className="grid h-5 w-5 place-items-center rounded-full bg-white/15 transition group-hover:translate-x-0.5 dark:bg-zinc-900/10">
						<ArrowRight className="h-3 w-3" strokeWidth={2.5} />
					</span>
				</button>
				<a
					href="tel:+9779800000000"
					className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 font-medium text-sm text-zinc-900 transition hover:border-zinc-300 hover:bg-zinc-50 active:translate-y-px dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
				>
					<PhoneCall className="h-4 w-4 text-[#1976d2]" strokeWidth={2} />
					Call a technician
				</a>
			</div>
		</div>
	);
}
