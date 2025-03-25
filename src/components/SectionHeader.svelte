<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import { inview } from 'svelte-inview';

	let { title, minWidth }: { title: string; minWidth?: boolean } = $props();
	let isInView = $state(false);
	const options = {};
</script>

<div
	use:inview={options}
	oninview_enter={(event) => {
		const { inView } = event.detail;
		isInView = inView;
	}}
	oninview_leave={(event) => {
		const { inView } = event.detail;
		isInView = inView;
	}}
	class={'my-5 h-8 ' + (minWidth && 'w-96')}
>
	{#if isInView}
		<Typewriter mode="scramble" scrambleDuration={2000} scrambleSlowdown={true}>
			<h1 class="mb-10 whitespace-nowrap font-roboto text-5xl font-bold tracking-wide md:text-7xl">
				{title}
			</h1>
		</Typewriter>
	{/if}
</div>
