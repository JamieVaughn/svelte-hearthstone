<script context="module" lang="ts">
	import type { CardType } from '../../../types/Card';
	/** @type {import('./__types/[id]').load} */
	export async function load({ params, fetch, error }: Record<string, any>) {
		const id = encodeURIComponent(params.id);
		console.log(params.id, id);
		const response = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${id}`, {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
				'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
			}
		});
		const cardData = await response.json();
		// console.log(response, error, cardData);
		return { props: { cardData, id }, error };
	}
</script>

<script lang="ts">
	import Card from '../../components/card.svelte';

	export let cardData: CardType[];
</script>

{#each cardData as card}
	<h1>{card.name}</h1>
	<main>
		<div>
			<Card {card} width={300} autoload controls />
			<p>Id: {card.cardId}</p>
			<p>Type: {card.type}</p>
			<p>Player Class: {card.playerClass}</p>
			<p>Card Set: {card.cardSet}</p>
			<p>Artist: {card?.Artist || 'none'}</p>
		</div>
	</main>
{/each}

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
