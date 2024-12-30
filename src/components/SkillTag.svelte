<script lang="ts">
	import type { SkillType } from '../types';

	let { skill, index }: { skill: SkillType; index: number } = $props();
</script>

<button
	class={'font-nunito flex h-full flex-row items-center justify-center rounded-md border-2 border-black  font-bold transition-all dark:border-custom-white-theme dark:bg-gray-900/90 dark:hover:text-black ' +
		(index % 2 === 0
			? 'hover:bg-green-200 dark:hover:bg-green-300'
			: 'hover:bg-blue-200 dark:hover:bg-blue-300')}
	data-aos="flip-down"
	data-aos-duration="500"
	data-aos-delay="500"
>
	<div
		class={skill.label === 'Express'
			? 'dark:flex dark:h-full dark:justify-center dark:bg-gray-200/65'
			: ''}
	>
		<img class={'m-2 h-5'} src={'/assets/icons/' + skill.icon} alt={skill.label + ' Icon'} />
	</div>

	<span class="p-2 tracking-wide">{skill.label}</span>
</button>
