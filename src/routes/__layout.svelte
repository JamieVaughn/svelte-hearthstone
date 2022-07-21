<script>
	import Nav from '../components/Nav.svelte';
</script>

<div>
	<Nav />
	<slot />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	div {
		padding: 8px;
		max-width: 80vw;
		margin: 0 auto;
	}
</style>
