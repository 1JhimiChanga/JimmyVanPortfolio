<script lang="ts">
	import 'aos/dist/aos.css';
	import AOS from 'aos';
	import Main from '../Sections/Main.svelte';
	import { onMount } from 'svelte';
	onMount(() => {
		AOS.init({
			// AOS settings (optional)
			duration: 1000, // Animation duration in ms
			offset: 200, // Trigger offset in px
			mirror: true
		});
	});
</script>

<Main />
