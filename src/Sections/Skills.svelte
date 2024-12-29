<script>
	import SectionHeader from '../components/SectionHeader.svelte';
	const SKILLS = [
		{ label: 'JavaScript', icon: 'javascript.svg' },
		{ label: 'TypeScript', icon: 'typescript-icon.svg' },
		{ label: 'HTML5', icon: 'html-5.svg' },
		{ label: 'CSS', icon: 'css-3.svg' },
		{ label: 'React', icon: 'react.svg' },
		{ label: 'Material UI', icon: 'material-ui.svg' },
		{ label: 'TailwindCSS', icon: 'tailwindcss-icon.svg' },
		{ label: 'Node', icon: 'nodejs-icon-alt.svg' },
		{ label: 'Git', icon: 'git-icon.svg' },
		{ label: 'MongoDB', icon: 'mongodb-icon.svg' },
		{ label: 'DynamoDB', icon: 'aws-dynamodb.svg' },
		{ label: 'MySQL', icon: 'mysql-icon.svg' }
	];
</script>

<section
	id="skills"
	class="flex h-full min-h-[85vh] w-full items-center justify-center bg-custom-white-theme dark:bg-[#2a374a] md:min-h-[80vh] xl:min-h-[60vh]"
>
	<div class="flex h-full w-9/12 flex-col">
		<SectionHeader title="SKILLS" />
		<div
			class="grid grid-cols-2 grid-rows-5 gap-4 md:grid-cols-3 md:grid-rows-3 xl:grid-cols-6 xl:grid-rows-2"
		>
			{#each SKILLS as skillTag, index}
				<button
					class={'font-nunito flex h-14 flex-row items-center justify-center rounded-md border-2 border-black font-bold transition-all dark:border-custom-white-theme dark:hover:text-black ' +
						(index % 2 === 0 ? 'hover:bg-green-200' : 'hover:bg-blue-200')}
					data-aos="flip-down"
					data-aos-duration="500"
					data-aos-delay="300"
				>
					<img
						class="m-2 h-5"
						src={'/assets/icons/' + skillTag.icon}
						alt={skillTag.label + ' Icon'}
					/>
					<span class="p-2 tracking-wide">{skillTag.label}</span>
				</button>
			{/each}
		</div>
	</div>
</section>
