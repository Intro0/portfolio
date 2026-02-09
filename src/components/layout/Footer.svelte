<script lang="ts">
	import Site, { Socials } from '$lib/config/common';
	import { IconHeart } from '@tabler/icons-svelte';

	const year = new Date().getFullYear();
</script>

<footer class="border-surface1/40 bg-surface0/30 mx-5 mb-5 rounded-lg border p-5 text-sm">
	<div class="flex flex-col items-center justify-between gap-y-4 md:flex-row md:gap-y-0">
		<span class="text-subtext0 whitespace-nowrap">
			© {year} <span class="text-accent font-medium">{Site.name}</span>
		</span>

		<span class="text-subtext0 hidden items-center gap-1.5 md:flex">
			Inspired by <a
				href="https://jasoncameron.dev/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:text-accent/70 transition-colors">jasoncameron.dev</a
			>
			<IconHeart size={14} class="text-red" />
		</span>

		<div class="flex items-center gap-x-4">
			{#each Socials.filter((item) => item.footer) as item (item.url)}
				{@const Icon = item.icon}
				<a
					href={item.url}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={item.label}
					class="text-subtext0 hover:text-accent transition-colors duration-200"
				>
					<Icon stroke={1.5} />
				</a>
			{/each}
		</div>
	</div>
</footer>
