<script lang="ts">
	import { onMount } from 'svelte';
	import Typewriter, { loopOnce } from 'svelte-typewriter';
	import { fly } from 'svelte/transition';
	let firstTypewriterDone = $state(false);
	let landed = $state(false);
	onMount(() => {
		landed = true;
	});
</script>

<section
	id="home"
	class="bg-custom-white-theme flex h-screen w-full flex-row items-center justify-center dark:bg-[#2a374a]"
>
	{#if landed}
		<div
			transition:fly={{
				y: -1000,
				delay: 300,
				duration: 1000
			}}
			class="ml-auto h-full w-[35vw] bg-green-200"
		></div>
	{/if}

	<div
		class="dark: absolute flex h-2/6 w-5/12 flex-col items-start justify-center bg-white/100 dark:bg-gray-900/90"
	>
		<div class="absolute ml-5 h-3/6 w-1 bg-[#d8b4fe]"></div>
		<div class="ml-20">
			<div class="flex flex-row items-baseline">
				<Typewriter
					cursor={true}
					interval={70}
					keepCursorOnFinish={false}
					on:done={() => (firstTypewriterDone = true)}
				>
					<h1 class="mr-5 text-5xl font-bold">console.log("Hello👋. I'm</h1>
				</Typewriter>
				{#if firstTypewriterDone}
					<Typewriter
						cursor={true}
						interval={70}
						keepCursorOnFinish={false}
						mode="loopOnce"
						unwriteInterval={50}
					>
						<h1 class="text-5xl font-bold">Timmy")</h1>
						<h1 class="text-5xl font-bold">Jimmy")</h1>
					</Typewriter>
				{/if}
			</div>

			<h3 class="mb-5 mt-5 text-lg">
				I deliver professional web experiences built to industry standards. Take a look around!
			</h3>

			<button
				class={'h-8 w-32 rounded-sm border-[2px] border-[#7dd3fc] bg-blue-200  hover:bg-blue-300'}
			>
				<span class="text-md text-center font-medium text-black">View Resume</span>
			</button>
			<button
				class={'h-8 w-32  rounded-sm border-[2px] border-[#6ee7b7] bg-green-200 hover:bg-green-300'}
			>
				<span class="text-md text-center font-medium text-black">Reach Out</span>
			</button>
		</div>
	</div>
</section>

<style>
	:root {
		--cursor-color: #d8b4fe;
		--cursor-width: 5px;
	}
</style>
