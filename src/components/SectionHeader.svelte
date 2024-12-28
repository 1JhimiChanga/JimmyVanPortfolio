<script lang="ts">
	import Typewriter from 'svelte-typewriter';

	let { title }: { title: string } = $props();
</script>

<Typewriter mode="scramble" scrambleDuration={2000}>
	<h1 class="mb-10 font-roboto text-7xl font-bold tracking-wide">{title}</h1>
</Typewriter>
