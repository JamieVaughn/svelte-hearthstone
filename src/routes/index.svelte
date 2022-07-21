<script>
	import { hearthstore } from '../stores/hearthstore';
	import Card from '../components/Card.svelte';
	console.log($hearthstore);
</script>

<svelte:head>
	<title>Heathstone Viewer</title>
</svelte:head>
<h1>SvelteKit Hearthstone Viewer</h1>

<main>
	{#each $hearthstore as card}
		<Card {card} />
	{/each}
</main>

<style>
	h1 {
		font-size: 3rem;
		text-align: center;
		margin: 8px auto;
		text-transform: uppercase;
	}
	main {
		display: grid;
		justify-items: center;
		align-items: center;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	}
</style>
