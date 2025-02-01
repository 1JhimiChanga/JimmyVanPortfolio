<script>
	//comment
	import SectionHeader from '../components/SectionHeader.svelte';
	import SkillTag from '../components/SkillTag.svelte';
	const SKILLS = [
		{ label: 'JavaScript', icon: 'javascript.svg' },
		{ label: 'TypeScript', icon: 'typescript-icon.svg' },
		{ label: 'HTML5', icon: 'html-5.svg' },
		{ label: 'CSS', icon: 'css-3.svg' },
		{ label: 'React', icon: 'react.svg' },
		{ label: 'Material UI', icon: 'material-ui.svg' },
		{ label: 'Tailwind', icon: 'tailwindcss-icon.svg' },
		{ label: 'Node', icon: 'nodejs-icon-alt.svg' },
		{ label: 'Git', icon: 'git-icon.svg' },
		{ label: 'MongoDB', icon: 'mongodb-icon.svg' },
		{ label: 'DynamoDB', icon: 'aws-dynamodb.svg' },
		{ label: 'MySQL', icon: 'mysql-icon.svg' }
	];
</script>

<section
	id="skills"
	class="relative flex h-full min-h-[75vh] w-full items-center justify-center bg-custom-white-theme dark:bg-[#2a374a] md:min-h-[60vh] xl:min-h-[50vh]"
>
	<div class="flex h-full w-9/12 flex-col">
		<SectionHeader title="SKILLS" />
		<div
			class="grid grid-cols-2 grid-rows-5 gap-4 md:grid-cols-3 md:grid-rows-3 xl:grid-cols-6 xl:grid-rows-2"
		>
			{#each SKILLS as skill, index}
				<SkillTag {skill} {index} />
			{/each}
		</div>
	</div>
</section>
