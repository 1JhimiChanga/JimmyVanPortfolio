<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import SectionHeader from '../components/SectionHeader.svelte';

	//Controls the landing animation state
	let landed = $state(false);

	onMount(() => {
		landed = true;
	});
</script>

<section
	id="about"
	class="flex h-[80vh] w-full flex-row items-center justify-center bg-custom-white-theme dark:bg-gray-900/90"
>
	<!-- Check if the landing animation should run -->
	{#if landed}
		<div
			transition:fly={{
				x: -1000,
				delay: 300,
				duration: 1000
			}}
			class="moving-gradient-2 absolute left-0 z-0 h-[80vh] w-[30vw]"
		></div>
	{/if}
	<div class="z-10 flex flex-col items-center justify-center">
		<div class="flex h-[50vh] flex-row items-center justify-center">
			<div class="mt-28 h-[50vh] rounded-sm">
				<img
					transition:fly={{
						y: -1000,
						delay: 300,
						duration: 1000
					}}
					class="h-full rounded-sm"
					src="assets\images\jimmyAbout5.png"
					alt="Jimmy Van About"
				/>
			</div>
			<div class="ml-10 flex w-4/12 flex-col">
				<header class="self-end">
					<SectionHeader title="ABOUT ME" />
				</header>

				<div class="flex h-[50vh] flex-col items-center justify-center rounded-sm bg-[#2a374a]">
					<article class="font-nunito row m-14 flex h-full flex-col justify-evenly text-xl">
						<span
							><span class=" text-5xl">W</span>hat's up? I’m Bob, a software developer with
							expertise in web development. Currently, I am a Computer Science specialist at
							University of Toronto.</span
						>
						<span
							>The passion to create and innovate has always been in me. I strive to build quality,
							clean, intuitive, and robust software with attention and deliberation.</span
						>
						<span
							>My expertise include JavaScript, CSS, and the MERN stack. Recently I have been
							intrigue with blockchain tech and Web3. Aside from coding, I enjoy playing table
							tennis, video games, and the drums.</span
						>
					</article>
				</div>
			</div>
		</div>
	</div>
</section>
