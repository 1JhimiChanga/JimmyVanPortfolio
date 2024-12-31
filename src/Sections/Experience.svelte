<script lang="ts">
	import SectionHeader from '../components/SectionHeader.svelte';
	import SkillTag from '../components/SkillTag.svelte';
	import experiences from '../data/experienceDB.json';
</script>

{#snippet experienceCard(experience, index)}
	<div
		data-aos={index % 2 === 0 ? 'slide-right' : 'slide-left'}
		data-aos-duration="500"
		class={(index % 2 === 0 ? 'moving-gradient-1' : 'moving-gradient-2') +
			' relative mb-5 h-fit w-full rounded-md p-[3px] shadow-2xl sm:w-11/12 md:w-10/12 lg:w-10/12 xl:w-11/12 '}
	>
		<div
			class="clip-corner h-full overflow-hidden rounded-md bg-custom-white-theme p-4 font-roboto dark:bg-gray-900"
		>
			<h1 class="font-nunito text-xl font-bold tracking-wide">{experience.company}</h1>
			{#each experience.roles as role}
				<div class="flex flex-row justify-between">
					<h2 class="font-semibold">{role.title}</h2>
					<h2 class="italic">{role.dateRange}</h2>
				</div>
			{/each}
			{#if experience.skills}
				<div class="mb-5 mt-2 flex flex-wrap gap-2">
					<!-- Dynamic height based on tags -->
					{#each experience.skills as skill, index}
						<div>
							<SkillTag {skill} {index} />
						</div>
					{/each}
				</div>
			{/if}

			<!-- Ensure achievements flow below the skills section -->
			<div class="achievements-container">
				{#each experience.achievements as achievement}
					<p class="m-1">- {achievement}</p>
				{/each}
			</div>
		</div>
	</div>
{/snippet}

<section
	id="experience"
	class="relative h-fit w-full overflow-hidden bg-gray-100 dark:bg-gray-900/90"
>
	<!-- Background Layer -->
	<div
		class="absolute right-0 z-0 ml-auto h-full w-1/2 bg-custom-white-theme dark:bg-gray-900/100"
	></div>

	<!-- Foreground Content -->
	<div class="relative z-10 flex h-full w-full flex-col items-center justify-center">
		<div class="flex h-full flex-col items-center justify-center">
			<div class="m-5 flex w-11/12 flex-col items-center justify-center">
				<div class="mb-10 self-end">
					<SectionHeader title="EXPERIENCE" />
				</div>
				{#each experiences as experience, index}
					{@render experienceCard(experience, index)}
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.flex-wrap {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem; /* Adjust spacing between skill tags */
	}

	.achievements-container {
		margin-top: 1rem;
		clear: both; /* Ensures achievements are pushed below dynamically growing elements */
	}
</style>
