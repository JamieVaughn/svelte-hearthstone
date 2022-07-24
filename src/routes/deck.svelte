<script lang="ts">
	import Card from '../components/card.svelte';
	import { activeDeck, decks } from '../stores/hearthstore';
	import { url, options } from '../utils/api';
	import Cards from './cards.svelte';

	export let deck = $activeDeck;

	export let cards: Record<string, string>[] = [];
	Promise.all(
		deck.cards.map(async (card) => {
			const response = await fetch(url({ path: card, value: '' }), options);
			const json = await response.json();
			cards.push(json[0]);
			console.log(json[0]);
		})
	).then(() => {
		console.log(cards);
	});
</script>

<div>Deck</div>
<h2>{deck.name}</h2>
<div>
	{#each cards as card}
		<Card {card} />
	{/each}
</div>
