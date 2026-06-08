import { ArrowRight, Play } from "lucide-react";

const STATS = [
	{
		label: "Residences serviced",
		value: "$5M+",
		caption: "Residences and offices",
	},
	{
		label: "Our clients",
		value: "500+",
		caption: "Highly trained, satisfied clients",
	},
];

export function About() {
	return (
		<section className="bg-white text-zinc-950 dark:bg-[#07090d] dark:text-white">
			<div className="mx-auto w-full px-6 py-12 md:px-12 md:py-16 lg:max-w-[1024px] lg:px-8 xl:max-w-[1280px] xl:px-12 2xl:max-w-[1440px] 2xl:px-16">
				<div className="mb-12 grid grid-cols-1 gap-6 lg:mb-16 lg:grid-cols-12 lg:gap-12">
					<div className="pt-2 lg:col-span-2">
						<div className="flex items-center gap-2 font-semibold text-[#e20a17] text-xs uppercase tracking-wider dark:text-[#ff4d57]">
							<span className="size-1.5 rounded-full bg-current" />
							About Us
						</div>
					</div>

					<div className="flex flex-col items-start lg:col-span-10">
						<h2 className="max-w-[1100px] font-medium text-[28px] leading-[36px] tracking-tight text-[#1c1c1c] sm:text-[36px] sm:leading-[44px] md:text-[42px] md:leading-[52px] lg:text-[46px] lg:leading-[56px] xl:text-[52px] xl:leading-[64px] dark:text-white">
							Discover how our commitment to quality, reliability, and
							eco-friendly practices transforms spaces into healthier
							environments. We bring peace of mind to our clients, ensuring
							every space shines.
						</h2>

						<a href="#about" className="group mt-8 inline-flex items-center">
							<span className="rounded-l-lg border border-[#e20a17] bg-[#e20a17] px-5 py-3.5 font-medium text-[15px] text-white transition-colors duration-200 group-hover:bg-[#c90814]">
								Learn More
							</span>
							<span className="flex items-center justify-center rounded-r-lg border-[#e20a17] border-t border-r border-b bg-white px-4 py-3.5 text-[#e20a17] transition-colors duration-200 group-hover:bg-zinc-50 dark:bg-transparent dark:text-[#ff4d57] dark:border-[#ff4d57] dark:group-hover:bg-white/5">
								<ArrowRight className="size-5" strokeWidth={2} />
							</span>
						</a>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
					<div className="relative aspect-[4/3] overflow-hidden rounded-[24px] md:aspect-auto md:h-[380px] lg:col-span-6 lg:h-[420px] xl:h-[460px]">
						<img
							src="/cold-ac.png"
							alt="Himal Refrigeration technician servicing a unit"
							className="h-full w-full object-cover"
						/>
						<div className="absolute inset-0 bg-black/10" />
						<button
							type="button"
							aria-label="Play video"
							className="absolute inset-0 m-auto flex size-16 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none sm:size-20"
						>
							<Play
								className="size-8 translate-x-0.5 fill-current text-[#e20a17] sm:size-10"
							/>
						</button>
					</div>

					{STATS.map((stat) => (
						<div
							key={stat.label}
							className="flex h-[280px] flex-col justify-between rounded-[24px] bg-[#1b82e7] p-8 sm:p-10 md:h-[380px] lg:col-span-3 lg:h-[420px] xl:h-[460px] dark:bg-[#1668ba]"
						>
							<div className="font-medium text-white/70 text-xs uppercase tracking-widest">
								{stat.label}
							</div>
							<div className="mt-auto">
								<div className="font-semibold text-[44px] text-white leading-none tracking-tight sm:text-[52px] lg:text-[56px] xl:text-[64px]">
									{stat.value}
								</div>
								<div className="mt-2 font-light text-sm text-white/80">
									{stat.caption}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
