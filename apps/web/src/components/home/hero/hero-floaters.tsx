import { Snowflake, SunSnow } from "lucide-react";
import type { CSSProperties } from "react";

import { FLOATERS } from "./hero-floaters.data";

// Drift + glow keyframes, scoped via the `hr-` prefix and the `.hr-floater`
// class. Animation is disabled under prefers-reduced-motion.
const KEYFRAMES = `
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
`;

/** Decorative snow/sun icons drifting and glowing behind the hero content. */
export function HeroFloaters() {
	return (
		<>
			<style>{KEYFRAMES}</style>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
			>
				{FLOATERS.map((f) => {
					const glow = (f.dur / 2).toFixed(1);
					return (
						<span
							key={`${f.top}-${f.left}`}
							className="hr-floater absolute text-[#1976d2] dark:text-[#ff8a6b]"
							style={
								{
									top: f.top,
									left: f.left,
									"--dx": `${f.dx}px`,
									"--dy": `${f.dy}px`,
									"--rot": `${f.rot}deg`,
									animation: `hr-float ${f.dur}s ease-in-out ${f.delay}s infinite, hr-glow-cold ${glow}s ease-in-out ${f.delay}s infinite`,
								} as CSSProperties
							}
						>
							<Snowflake
								className="block dark:hidden"
								size={f.size}
								strokeWidth={1.6}
							/>
							<SunSnow
								className="hidden dark:block"
								style={{
									animation: `hr-glow-warm ${glow}s ease-in-out ${f.delay}s infinite`,
								}}
								size={f.size}
								strokeWidth={1.6}
							/>
						</span>
					);
				})}
			</div>
		</>
	);
}
