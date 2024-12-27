<script lang="ts">
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import { fly, slide } from 'svelte/transition';

	let {
		dark,
		toggleTheme
	}: {
		dark: boolean;
		toggleTheme: () => void;
	} = $props();

	let BUTTONS = ['about', 'skills', 'experience', 'contact', 'resume'];
	let buttonsVisible = $state(false);
	let menuButtonsVisible = $state(false);
	let menuOpen = $state(false);

	onMount(() => {
		// set buttons to visible when component mounts.
		buttonsVisible = true;

		/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
		let prevScrollPos = window.scrollY;
		const navbar = document.getElementById('navbar');
		if (navbar) {
			window.onscroll = () => {
				const currentScrollPos = window.scrollY;
				if (prevScrollPos > currentScrollPos) navbar.style.transform = 'translateY(0)';
				else navbar.style.transform = `translateY(-${navbar.offsetHeight}px)`;

				prevScrollPos = currentScrollPos;
			};

			// show navbar when hover over
			onmousemove = (e) => {
				if (e.clientY < navbar.offsetHeight) navbar.style.transform = 'translateY(0)';
			};
		}
	});

	// Custom 3D "fly-in" and "scale" transition for nav buttons
	function flyAndScale(
		node: HTMLElement,
		{ delay = 0, duration = 500, easing = cubicOut, scaleStart = 0 }
	) {
		return {
			delay,
			duration,
			easing,
			css: (t: number) => `
                transform: scale(${scaleStart + t * (1 - scaleStart)}) translateZ(${(1 - t) * 100}px);
         
            `
		};
	}

	// vertical open animation for logo, title, and toggle theme button
	function verticalOpen(node: HTMLElement, { duration = 400 } = {}) {
		return {
			duration,
			css: (t: number) => `
            transform: scaleY(${t});
            transform-origin: center;
        `
		};
	}
</script>

{#snippet toggleButton(forMenu: boolean)}
	<!-- Toggle button for theme switching -->
	<button
		transition:verticalOpen
		class={'rounded-lg border-2 border-solid border-[#4b5563] px-2 hover:bg-gray-200 dark:border-white/80 dark:text-custom-white-theme dark:hover:bg-gray-600 ' +
			(forMenu ? 'w-[150px] py-2' : 'w-[90px] py-1')}
		onclick={() => toggleTheme()}
	>
		<div class="flex items-center justify-center space-x-2 text-sm">
			<i class={'fa-solid ' + (dark ? 'fa-sun' : 'fa-moon')}></i>
			<span>{dark ? 'Light' : 'Dark'}</span>
		</div>
	</button>
{/snippet}

<nav
	id="navbar"
	class="backdrop-blue-md fixed top-0 z-50 flex w-full items-center gap-4 bg-white/80 px-6 shadow-md dark:bg-gray-900/80 lg:px-10"
>
	<!-- Logo and title with vertical opening transition -->
	{#if buttonsVisible}
		<img
			transition:verticalOpen
			class=" h-10 w-10"
			src="assets\images\Jlogo.jpg"
			alt="Jimmy Van Logo"
		/>
		<a transition:verticalOpen href="/#home" data-aos="flip-up" class="nav__text-home px-2"
			>Jimmy Van</a
		>
	{/if}
	<!-- Navigation buttons for desktop view -->
	<div class="ml-auto hidden items-center justify-center lg:flex">
		{#each BUTTONS as button, index}
			{#if buttonsVisible}
				<a
					href={'#' + button}
					transition:flyAndScale={{ duration: 500 + index * 100, delay: index * 100 }}
					class="nav__text m-5 capitalize"
				>
					<span class="px-3">{button}</span>
				</a>
			{/if}
		{/each}
		{#if buttonsVisible}
			{@render toggleButton(false)}
		{/if}
	</div>
	<!-- Hamburger menu for smaller screens -->
	<button
		aria-label="Open navigation menu"
		onclick={() => (menuOpen = true)}
		class="m-5 ml-auto text-xl lg:hidden"
	>
		<i class="fa-solid fa-burger"></i>
	</button>

	<!-- Mobile -->
	{#if menuOpen}
		<div class="fixed inset-0 z-50 backdrop-blur-md">
			<dialog
				open={menuOpen}
				transition:slide={{ duration: 500 }}
				class="fixed left-0 right-0 top-0 z-50 w-full bg-white/80 p-0 px-6 py-4 shadow-md dark:bg-gray-900/90"
				onintroend={() => {
					// Delay making buttons visible until the slide transition finishes
					menuButtonsVisible = true;
				}}
				onoutrostart={() => {
					// Immediately hide buttons when the dialog starts closing
					menuButtonsVisible = false;
				}}
			>
				<div class="dialog__container">
					<button
						aria-label="Close navigation menu"
						onclick={() => (menuOpen = false)}
						class="ml-auto flex justify-center rounded-lg bg-gray-200/80 px-3 py-2 text-sm text-gray-800 dark:bg-white/10 dark:text-gray-50"
					>
						<i class="fa-solid fa-x"></i>
					</button>
					<nav class="flex flex-col items-center overflow-x-hidden">
						{#each BUTTONS as button, index}
							{#if menuButtonsVisible}
								<a
									href={'#' + button}
									transition:fly={{
										x: index % 2 === 0 ? -400 : 400,
										delay: 50,
										duration: 500
									}}
									class="nav__text nav__text-menu m-2 bg-gray-200/80 px-3 py-2 text-xl capitalize dark:bg-white/10"
								>
									<span class="p-10">{button}</span>
								</a>
							{/if}
						{/each}

						{#if menuButtonsVisible}
							<div class="mt-5">
								{@render toggleButton(true)}
							</div>
						{/if}
					</nav>
				</div>
			</dialog>
		</div>
	{/if}
</nav>

<style>
	#navbar {
		transition: transform 0.3s;
	}
	.dialog__container {
		height: 55vh;
		overflow-y: auto;
	}
</style>
