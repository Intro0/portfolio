export const accentColorNames = [
	'rosewater',
	'flamingo',
	'pink',
	'mauve',
	'red',
	'maroon',
	'peach',
	'yellow',
	'green',
	'teal',
	'sky',
	'sapphire',
	'blue',
	'lavender'
] as const;

/** Deduplicated palette — ordered for maximum adjacent contrast */
const distinctTagColors: AccentColorName[] = [
	'red', // #e06c75 - warm pink-red
	'sapphire', // #61afef - blue
	'green', // #98c379 - green
	'pink', // #c678dd - purple
	'yellow', // #e5c07b - yellow
	'teal', // #56b6c2 - cyan
	'maroon', // #be5046 - dark red
	'peach' // #d19a66 - orange
];
export type AccentColorName = (typeof accentColorNames)[number];

export function getRandomAccentColor() {
	const randomIndex = Math.floor(Math.random() * accentColorNames.length);
	return accentColorNames[randomIndex];
}

/**
 * Returns deterministic colors for a list of tags, guaranteeing no two
 * adjacent tags share the same color. Uses a hash of the first tag to
 * pick a starting offset, then steps through the palette with a stride
 * of 3 (so adjacent colors are visually distinct).
 */
export function getTagColors(tags: string[]): AccentColorName[] {
	if (tags.length === 0) return [];
	const len = distinctTagColors.length;
	let hash = 0;
	const seed = tags[0];
	for (let i = 0; i < seed.length; i++) {
		hash = (hash << 5) - hash + seed.charCodeAt(i);
		hash |= 0;
	}
	const start = Math.abs(hash) % len;
	return tags.map((_, i) => distinctTagColors[(start + i) % len]);
}
