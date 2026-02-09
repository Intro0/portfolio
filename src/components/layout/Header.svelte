<script lang="ts">
	import Breadcrumb from './Breadcrumb.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	const sections = [
		{ id: 'about', label: 'About' },
		{ id: 'education', label: 'Education' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'contact', label: 'Contact' }
	];

	let activeSection = $state('about');
	let observer: IntersectionObserver;

	function smoothScroll(targetId: string) {
		const el = document.getElementById(targetId);
		if (!el) return;
		const targetY = el.getBoundingClientRect().top + window.scrollY - 80; // 5rem offset
		const startY = window.scrollY;
		const diff = targetY - startY;
		const duration = 400; // ms
		let start: number | null = null;

		function step(timestamp: number) {
			if (!start) start = timestamp;
			const progress = Math.min((timestamp - start) / duration, 1);
			const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
			window.scrollTo(0, startY + diff * ease);
			if (progress < 1) requestAnimationFrame(step);
		}
		requestAnimationFrame(step);
	}

	onMount(() => {
		if (!browser) return;

		observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				}
			},
			{ rootMargin: '-40% 0px -40% 0px', threshold: 0 }
		);

		for (const section of sections) {
			const el = document.getElementById(section.id);
			if (el) observer.observe(el);
		}
	});

	onDestroy(() => {
		observer?.disconnect();
	});
</script>

<div class="header sticky top-0 z-10 px-0 py-6 pb-10 select-none md:px-5">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-4">
		<Breadcrumb section={activeSection === 'about' ? null : activeSection} />
		<nav class="hidden items-center gap-x-6 md:flex">
			{#each sections as section (section.id)}
				<button
					onclick={() => smoothScroll(section.id)}
					class="cursor-pointer text-sm font-medium transition-colors duration-200 {activeSection ===
					section.id
						? 'text-accent'
						: 'text-subtext0 hover:text-accent'}"
				>
					{section.label}
				</button>
			{/each}
		</nav>
	</div>
</div>

<style>
	.header {
		mask: linear-gradient(black, black, transparent);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}
</style>
