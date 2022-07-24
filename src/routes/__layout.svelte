<script>
	import Nav from '../components/nav.svelte';
	import '../app.css';
</script>

<main>
	<Nav />
	<slot />
</main>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	main {
		margin: 0 auto;
		height: 100vh;
	}
</style>
