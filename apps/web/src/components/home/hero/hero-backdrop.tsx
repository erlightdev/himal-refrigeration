// Atmospheric tint over the video — cold blue (light) / warm red (dark).
const ATMOSPHERE_LIGHT =
	"radial-gradient(60% 55% at 50% 0%, rgba(25,118,210,0.22), transparent 70%), linear-gradient(180deg, rgba(186,230,253,0.25) 0%, rgba(219,234,254,0.12) 40%, rgba(255,255,255,0) 100%)";
const ATMOSPHERE_DARK =
	"radial-gradient(60% 55% at 50% 0%, rgba(255,138,107,0.28), transparent 70%), linear-gradient(180deg, rgba(168,28,42,0.22) 0%, rgba(120,40,20,0.12) 40%, rgba(0,0,0,0) 100%)";

// Readability scrim — lightens the middle band (light) / darkens it (dark).
const SCRIM_LIGHT =
	"linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 35%, rgba(255,255,255,0.55) 70%, rgba(255,255,255,0) 100%)";
const SCRIM_DARK =
	"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 30%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0) 100%)";

const VIDEO_BASE = "h-full w-full object-cover object-top";

/**
 * Full-bleed AC-airflow video backdrop. Cold (blue) airflow in light mode,
 * warm airflow in dark mode, each with mobile + desktop sources. The source
 * clips have black backgrounds that are dropped out via mix-blend.
 */
export function HeroBackdrop() {
	return (
		<div
			aria-hidden
			className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
		>
			{/* Light · cold airflow (mobile / desktop) */}
			<video
				key="cold-mobile"
				autoPlay
				muted
				loop
				playsInline
				preload="metadata"
				className={`${VIDEO_BASE} block mix-blend-multiply md:hidden dark:hidden`}
			>
				<source src="/mobile-cold-video.mp4" type="video/mp4" />
			</video>
			<video
				key="cold-desktop"
				autoPlay
				muted
				loop
				playsInline
				preload="metadata"
				className={`${VIDEO_BASE} hidden mix-blend-multiply md:block md:dark:hidden`}
			>
				<source src="/cold-video.mp4" type="video/mp4" />
			</video>

			{/* Dark · warm airflow (mobile / desktop) */}
			<video
				key="warm-mobile"
				autoPlay
				muted
				loop
				playsInline
				preload="metadata"
				className={`${VIDEO_BASE} hidden mix-blend-screen dark:block md:dark:hidden`}
			>
				<source src="/mobile-warm-video.mp4" type="video/mp4" />
			</video>
			<video
				key="warm-desktop"
				autoPlay
				muted
				loop
				playsInline
				preload="metadata"
				className={`${VIDEO_BASE} hidden mix-blend-screen md:dark:block`}
			>
				<source src="/warm-video.mp4" type="video/mp4" />
			</video>

			{/* Atmospheric tint */}
			<div
				className="absolute inset-0 block dark:hidden"
				style={{ backgroundImage: ATMOSPHERE_LIGHT }}
			/>
			<div
				className="absolute inset-0 hidden dark:block"
				style={{ backgroundImage: ATMOSPHERE_DARK }}
			/>

			{/* Readability scrim */}
			<div
				className="absolute inset-0 block dark:hidden"
				style={{ backgroundImage: SCRIM_LIGHT }}
			/>
			<div
				className="absolute inset-0 hidden dark:block"
				style={{ backgroundImage: SCRIM_DARK }}
			/>
		</div>
	);
}
