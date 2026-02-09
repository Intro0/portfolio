<script lang="ts">
	let { section = null }: { section: string | null } = $props();
</script>

{#snippet breadcrumb({ text, href = undefined })}
	<li class="inline-flex items-center">
		{#if href}
			<a class="animation-wiggle hover:text-accent" {href}>{text}</a>
		{:else}
			<span aria-current="page">{text}</span>
		{/if}
	</li>
{/snippet}

<nav aria-label="Breadcrumbs">
	<ul class="text-md flex items-center">
		<li class="inline-flex items-center">
			<a class="text-accent hover:text-accent/40" href="/">~</a>
		</li>
		<li class="text-subtext0 mx-0.5 inline-flex items-center">/</li>
		<li class="inline-flex items-center">
			<a class="text-accent hover:text-accent/40" href="/">Kenny-Nguyen</a>
		</li>
		<li class="text-subtext0 mx-0.5 inline-flex items-center">/</li>
		{#if section}
			<li class="inline-flex items-center">
				<a class="text-accent hover:text-accent/40" href="#{section}">{section}</a>
			</li>
			<li class="text-subtext0 mx-0.5 inline-flex items-center">/</li>
		{/if}
		<li class="ml-0.5 inline-flex items-center">
			<span class="cursor-blink bg-accent h-4 w-2" aria-hidden="true"></span>
		</li>
	</ul>
</nav>

<style>
	@keyframes blink {
		0%,
		100% {
			opacity: 1; /* Fully visible */
		}
		20% {
			opacity: 0; /* Invisible */
		}
	}

	.cursor-blink {
		animation: blink 1s cubic-bezier(0.2, 1, 0.8, 1) infinite;
	}
</style>
