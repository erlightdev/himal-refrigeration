import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/home/about";
import { Hero } from "@/components/home/hero";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

function HomeComponent() {
	return (
		<main className="overflow-x-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
			<Hero />
			<About />
		</main>
	);
}
