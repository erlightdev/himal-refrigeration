import {
	ArrowRight,
	CheckCircle2,
	PhoneCall,
	Snowflake,
} from "lucide-react";

const SERVICE_CHIPS = [
	"AC installation",
	"Cold rooms",
	"Commercial kitchens",
	"Preventive maintenance",
];

export function Hero() {
	return (
		<section className="relative isolate overflow-hidden bg-[#f7f9fb] text-zinc-950 dark:bg-[#07090d] dark:text-white">
			<div
				aria-hidden
				className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1976d2]/50 to-transparent"
			/>
			<div
				aria-hidden
				className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent_75%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)]"
			/>
			<div
				aria-hidden
				className="-z-10 -translate-x-1/2 absolute top-0 left-1/2 h-[520px] w-[820px] rounded-full bg-[radial-gradient(circle,rgba(25,118,210,0.16),transparent_70%)] blur-2xl"
			/>

			<div className="mx-auto flex w-full max-w-5xl flex-col items-center px-5 pt-36 pb-16 text-center sm:px-6 lg:pt-44 lg:pb-20">
				<div className="inline-flex items-center gap-2 rounded-full border border-[#e20a17]/20 bg-white/80 px-3.5 py-1.5 font-medium text-[#a81c2a] text-sm shadow-sm shadow-zinc-950/5 backdrop-blur dark:border-[#ff4d57]/25 dark:bg-white/6 dark:text-[#ffb3b8]">
					<span className="grid size-5 place-items-center rounded-full bg-[#e20a17] text-white">
						<Snowflake className="size-3" strokeWidth={2.5} />
					</span>
					Nepal&apos;s refrigeration &amp; HVAC service partner
				</div>

				<h1 className="mt-7 max-w-4xl font-semibold text-5xl leading-[1.04] tracking-tight md:text-6xl lg:text-7xl">
					Cooling systems your business can{" "}
					<span className="bg-gradient-to-r from-[#1976d2] to-[#0ea5e9] bg-clip-text text-transparent">
						rely on
					</span>
					.
				</h1>

				<p className="mt-6 max-w-2xl text-lg text-zinc-600 leading-8 md:text-xl dark:text-zinc-300">
					From split ACs to cold-chain infrastructure, Himal Refrigeration
					designs, installs and services dependable cooling for homes, hotels,
					restaurants, healthcare and retail teams.
				</p>

				<div className="mt-9 flex flex-col gap-3 sm:flex-row">
					<a
						href="tel:+9779800000000"
						className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#e20a17] px-7 font-semibold text-sm text-white shadow-[0_18px_36px_-20px_rgba(226,10,23,0.9)] transition hover:bg-[#c90814] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e20a17]/35 active:translate-y-px"
					>
						<PhoneCall className="size-4" strokeWidth={2.25} />
						Call a technician
					</a>
					<a
						href="mailto:info@himalrefrigeration.com"
						className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-zinc-300 bg-white px-7 font-semibold text-sm text-zinc-950 transition hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1976d2]/30 active:translate-y-px dark:border-white/14 dark:bg-white/8 dark:text-white dark:hover:bg-white/12"
					>
						Get a free quote
						<ArrowRight className="size-4" strokeWidth={2.25} />
					</a>
				</div>

				<ul className="mt-8 flex flex-wrap justify-center gap-2.5">
					{SERVICE_CHIPS.map((chip) => (
						<li
							key={chip}
							className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-zinc-700 text-sm shadow-sm shadow-zinc-950/5 dark:border-white/10 dark:bg-white/6 dark:text-zinc-300"
						>
							<CheckCircle2 className="size-4 text-[#1976d2]" strokeWidth={2.25} />
							{chip}
						</li>
					))}
				</ul>

                
			</div>
		</section>
	);
}
