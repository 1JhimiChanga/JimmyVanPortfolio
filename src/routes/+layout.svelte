<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	let { children } = $props();

	let dark = $state<boolean>(true);

	// Add/remove the `dark` class on the <html> element
	$effect(() => {
		document.documentElement.classList.toggle('dark', dark);
	});
</script>

<div class:dark>
	<Navbar {dark} toggleTheme={() => (dark = !dark)} />
	{@render children()}
</div>
