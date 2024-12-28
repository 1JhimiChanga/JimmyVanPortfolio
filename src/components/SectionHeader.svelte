<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import { inview } from 'svelte-inview';

	let { title }: { title: string } = $props();
	let isInView = $state(false);
	const options = {};
</script>

<div
	use:inview={options}
	oninview_enter={(event) => {
		const { inView, entry, scrollDirection, observer, node } = event.detail;
		isInView = inView;
	}}
	oninview_leave={(event) => {
		const { inView, entry, scrollDirection, observer, node } = event.detail;
		isInView = inView;
	}}
>
	{#if isInView}
		<Typewriter mode="scramble" scrambleDuration={1500}>
			<h1 class="mb-10 font-roboto text-5xl font-bold tracking-wide md:text-7xl">{title}</h1>
		</Typewriter>
	{/if}
</div>
