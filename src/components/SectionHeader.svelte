<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import { onMount } from 'svelte';

	let { title }: { title: string } = $props();
	let isVisible = $state(false); // Tracks if the component is in view

	// Observe the component's visibility
	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				isVisible = entry.isIntersecting; // Update visibility
			},
			{ threshold: 0.5 } // Adjust threshold as needed
		);

		const element = document.getElementById('about');
		if (element) {
			observer.observe(element);
		}

		// Cleanup observer on component destroy
		return () => observer.disconnect();
	});
</script>

<div>
	{#if isVisible}
		<Typewriter mode="scramble" scrambleDuration={1500}>
			<h1 class="mb-10 font-roboto text-7xl font-bold tracking-wide">{title}</h1>
		</Typewriter>
	{/if}
</div>
