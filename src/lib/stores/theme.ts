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
export type AccentColorName = (typeof accentColorNames)[number];

export function getRandomAccentColor() {
	const randomIndex = Math.floor(Math.random() * accentColorNames.length);
	return accentColorNames[randomIndex];
}
