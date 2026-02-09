<script>
	import { onMount } from 'svelte';
	onMount(() => {
		window.location.href = '/resume.pdf';
	});
</script>

<svelte:head>
	<meta http-equiv="refresh" content="0; url=/resume.pdf" />
</svelte:head>

<p>Redirecting to <a href="/resume.pdf">resume</a>...</p>
