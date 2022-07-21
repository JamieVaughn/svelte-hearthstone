<script context="module">
	/** @type {import('./__types/[slug]').Load} */
	export async function load({ params, fetch, error }) {
		const name = encodeURIComponent(params.id);
		console.log(params.id, name);
		const response = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${name}`, {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '6b87c22f29msh36c8c222b01315dp11862ajsnd3a1d7678cbf',
				'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
			}
		});
		const json = await response.json();
		const cardData = json.filter((card) => card.img);
		console.log(response, error, cardData);
		return { props: { cardData, name }, status: response.status, error };
	}
</script>

<script>
	import Card from '../../components/card.svelte';

	export let cardData;
	export let name;
</script>

<h1>{decodeURIComponent(name)}</h1>
<main>
	{#each cardData as card}
		<div>
			<Card {card} />
			<p>Artist: {card.Artist}</p>
			<p>Card Set: {card.cardSet}</p>
			<p>Player Class: {card.playerClass}</p>
			<p>Type: {card.type}</p>
		</div>
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
		gap: 4px;
	}
</style>
