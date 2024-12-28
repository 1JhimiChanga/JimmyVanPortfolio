<script lang="ts">
	import SectionHeader from '../components/SectionHeader.svelte';
</script>

<section
	id="about"
	class="flex h-screen w-full flex-row items-center justify-center bg-custom-white-theme dark:bg-gray-900/90 lg:h-[80vh]"
>
	<!-- Check if the landing animation should run -->

	<div
		data-aos="slide-right"
		data-aos-duration="300"
		data-aos-delay="200"
		class="moving-gradient-2 absolute left-0 z-0 h-screen w-[40vw] md:w-[30vw] lg:h-[80vh]"
	></div>

	<div class="z-10 ml-5 mr-5 flex flex-col items-center justify-center">
		<div
			class="flex h-[50vh] w-full flex-col-reverse items-center justify-center lg:h-[60vh] lg:flex-row"
		>
			<div class="mt-5 h-5/6 w-full rounded-sm lg:mt-28 lg:w-auto">
				<img
					data-aos="fade-down"
					data-aos-duration="500"
					data-aos-delay="500"
					class="h-full w-full rounded-sm object-cover lg:w-auto"
					src="assets\images\jimmyAbout5.png"
					alt="Jimmy Van About"
				/>
			</div>
			<div class="flex w-full flex-col md:w-[50vh] lg:ml-5 xl:w-4/12">
				<header class="self-end">
					<SectionHeader title="ABOUT ME" />
				</header>

				<div
					data-aos="fade-up"
					data-aos-duration="500"
					data-aos-delay="500"
					class="flex h-auto w-full flex-col items-center justify-center rounded-sm bg-white/100 shadow-2xl dark:bg-[#2a374a]"
				>
					<article
						class="font-nunito row m-5 flex h-full flex-col justify-evenly text-base lg:m-10 xl:text-xl"
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
