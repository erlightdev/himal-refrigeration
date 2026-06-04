export type Floater = {
	/** vertical position within the hero */
	top: string;
	/** horizontal position within the hero */
	left: string;
	/** icon size in px */
	size: number;
	/** float-drift duration in seconds */
	dur: number;
	/** animation start delay in seconds */
	delay: number;
	/** horizontal drift at the midpoint, in px */
	dx: number;
	/** vertical drift at the midpoint, in px */
	dy: number;
	/** rotation at the midpoint, in degrees */
	rot: number;
};

// Six floating icons at hand-tuned positions, sizes and animation timings.
export const FLOATERS: readonly Floater[] = [
	{
		top: "8%",
		left: "8%",
		size: 28,
		dur: 9,
		delay: 0,
		dx: 18,
		dy: -22,
		rot: 24,
	},
	{
		top: "18%",
		left: "82%",
		size: 22,
		dur: 11,
		delay: 1.4,
		dx: -20,
		dy: 16,
		rot: -18,
	},
	{
		top: "55%",
		left: "12%",
		size: 32,
		dur: 13,
		delay: 0.6,
		dx: 22,
		dy: 20,
		rot: 32,
	},
	{
		top: "62%",
		left: "78%",
		size: 26,
		dur: 10,
		delay: 2.2,
		dx: -16,
		dy: -18,
		rot: -28,
	},
	{
		top: "32%",
		left: "48%",
		size: 20,
		dur: 12,
		delay: 3.0,
		dx: 12,
		dy: 24,
		rot: 16,
	},
	{
		top: "78%",
		left: "42%",
		size: 24,
		dur: 14,
		delay: 1.8,
		dx: -22,
		dy: -14,
		rot: -22,
	},
];
