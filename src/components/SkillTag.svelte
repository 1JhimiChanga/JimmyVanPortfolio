<script lang="ts">
	import type { SkillType } from '../types';

	let { skill, index }: { skill: SkillType; index: number } = $props();
</script>

<button
	class={' h-full cursor-default rounded-md border-2 border-black  font-nunito font-bold transition-all dark:border-custom-white-theme dark:bg-gray-900/90 dark:hover:text-black' +
		(index % 2 === 0
			? 'hover:bg-green-200 dark:hover:bg-green-300'
			: 'hover:bg-blue-200 dark:hover:bg-blue-300')}
	data-aos="flip-down"
	data-aos-duration="500"
	data-aos-delay="500"
>
	<div class="flex flex-row items-center justify-center p-1">
		{#if skill.icon}
			<img class={'m-2 h-5'} src={'/assets/icons/' + skill.icon} alt={skill.label + ' Icon'} />
		{/if}

		<span class="px-2 py-2 tracking-wide">{skill.label}</span>
	</div>
</button>
