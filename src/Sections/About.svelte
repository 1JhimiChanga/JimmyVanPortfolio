<script lang="ts">
	import SectionHeader from '../components/SectionHeader.svelte';
</script>

<section
	id="about"
	class="relative flex h-fit w-full flex-row items-center justify-center bg-gray-100 dark:bg-gray-900/90"
>
	<!-- Gradient background animation for the "about" section -->
	<div
		data-aos="slide-right"
		data-aos-duration="500"
		data-aos-delay="200"
		class="moving-gradient-2 absolute bottom-0 left-0 right-0 top-0 z-0 w-[40vw] md:w-[30vw]"
	></div>
	<!-- Content of the "about" section -->
	<div class="z-10 m-10 flex flex-col items-center justify-center md:m-20">
		<div class="flex h-fit w-full flex-col-reverse items-center justify-center lg:flex-row">
			<!-- Image -->

			<img
				data-aos="fade-down"
				data-aos-duration="500"
				data-aos-delay="600"
				class="mt-5 w-full rounded-sm object-scale-down lg:w-[40vw] xl:w-[30vw]"
				src="assets\images\jimmyAbout5.png"
				alt="Jimmy Van About"
			/>
			<!-- Text content -->
			<div class="flex w-full flex-col lg:ml-5">
				<header class="min-h-[100px] self-end">
					<SectionHeader title="ABOUT ME" />
				</header>

				<div
					data-aos="fade-up"
					data-aos-duration="500"
					data-aos-delay="600"
					class="flex h-auto w-full flex-col items-center justify-center rounded-sm bg-white/100 shadow-2xl dark:bg-[#2a374a] lg:max-w-[40vw]"
				>
					<article
						class="row m-5 flex h-full flex-col justify-evenly font-roboto text-base lg:m-10 xl:text-xl"
					>
						<span class="mb-5"
							><span class="text-4xl">H</span>owdy! I’m Jimmy, a software developer with expertise
							in web development. Currently, I am a Full-Stack Developer for Crbon Labs.</span
						>
						<span class="mb-5"
							>For me, software development is about bringing ideas to life with clean, efficient,
							and intuitive designs that prioritize user experience.</span
						>
						<span class="mb-5"
							>My expertise include JavaScript, CSS, and the MERN stack, with a recent fascination
							for Svelte, which inspired me to create this web application! Aside from coding, I
							enjoy playing volleyball, badminton, video games, and billiards.</span
						>
					</article>
				</div>
			</div>
		</div>
	</div>
</section>
