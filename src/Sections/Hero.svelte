<script lang="ts">
	import { onMount } from 'svelte';
	import Typewriter from 'svelte-typewriter';
	import { fly } from 'svelte/transition';

	let typewriterStage = $state(1);

	//Controls the landing animation state
	let landed = $state(false);

	onMount(() => {
		landed = true;
	});
</script>

<section
	id="home"
	class="flex h-screen w-full flex-row items-center justify-center bg-custom-white-theme dark:bg-[#2a374a]"
>
	<!-- Check if the landing animation should run -->
	{#if landed}
		<div
			transition:fly={{
				y: -1000,
				delay: 300,
				duration: 1000
			}}
			class="moving-gradient-1 ml-auto h-full w-[35vw]"
		></div>
	{/if}
	<!-- Main container for the introduction text -->
	<div
		class=" absolute ml-5 mr-5 flex h-2/6 w-11/12 flex-col items-start justify-center bg-white/100 shadow-2xl dark:bg-gray-900/90 md:w-fit"
	>
		<div class="absolute ml-5 hidden h-3/6 w-1 bg-[#d8b4fe] md:flex"></div>
		<div class="ml-6 md:ml-14">
			<div
				class="flex flex-row items-baseline font-roboto text-base font-bold md:text-2xl lg:text-3xl xl:text-4xl"
			>
				<!-- Typewriter effect for the introductory text -->
				<Typewriter
					cursor={true}
					interval={50}
					keepCursorOnFinish={false}
					showCursorOnDelay={true}
					mode="cascade"
					on:done={() => (typewriterStage += 1)}
				>
					<span class="-mr-3">console.log("Hello.</span>
					<span class="waving-hand">👋</span>
					<span class="mr-2 md:mr-5">I'm</span>
				</Typewriter>

				<!-- Second typewriter effect for dynamic names -->
				{#if typewriterStage === 2}
					<Typewriter
						cursor={true}
						interval={50}
						keepCursorOnFinish={true}
						showCursorOnDelay={true}
						mode="loopOnce"
						unwriteInterval={30}
						class="flex items-center"
					>
						<span>Timmy")</span>
						<span>Jimmy")</span>
					</Typewriter>
				{/if}
			</div>

			<h3
				class="mb-7 mr-10 mt-4 w-10/12 text-wrap text-base text-gray-500/100 dark:text-gray-300/100 md:text-2xl lg:text-nowrap"
			>
				<p>I deliver web experiences built to industry standards.</p>
				<p>Take a look around!</p>
			</h3>
			<!-- Call-to-action buttons -->
			<button
				class={'mr-3 h-8 w-32 rounded-sm border-[2px] border-[#7dd3fc]  bg-blue-200 hover:bg-blue-300'}
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
	/* Styling for typewriter cursor */
	:root {
		--cursor-color: #d8b4fe;
		--cursor-width: 5px;
	}

	.waving-hand {
		animation-name: wave-animation;
		animation-duration: 2.5s;
		animation-iteration-count: 3;
		transform-origin: 70% 70%;
		display: inline-block;
	}

	@keyframes wave-animation {
		0% {
			transform: rotate(0deg);
		}
		15% {
			transform: rotate(14deg);
		} /* The following five values can be played with to make the waving more or less extreme */
		30% {
			transform: rotate(-8deg);
		}
		40% {
			transform: rotate(14deg);
		}
		50% {
			transform: rotate(-4deg);
		}
		60% {
			transform: rotate(10deg);
		}
		70% {
			transform: rotate(0deg);
		} /* Reset for the last half to pause */
		100% {
			transform: rotate(0deg);
		}
	}
</style>
