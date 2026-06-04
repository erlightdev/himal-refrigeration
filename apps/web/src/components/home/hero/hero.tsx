import { HeroBackdrop } from "./hero-backdrop";
import { HeroContent } from "./hero-content";
import { HeroFloaters } from "./hero-floaters";

/**
 * Landing hero: a full-height section layering a video backdrop and drifting
 * decorative icons behind the headline + calls to action.
 */
export function Hero() {
	return (
		<section className="relative isolate flex min-h-svh flex-col justify-center overflow-hidden">
			<HeroBackdrop />
			<HeroFloaters />
			<HeroContent />
		</section>
	);
}
